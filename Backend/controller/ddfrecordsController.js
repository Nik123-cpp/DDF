const ddf_records = require('../model/ddf_records')
const Request = require('../model/request')
const Profile = require('../model/profile')


//get all ddf records
exports.all_records = (req, res, next) => {
    ddf_records.find()
        .sort({ created: -1 })
        .populate({
            path: 'request',
            populate: {
                path: 'faculty',
                model: 'Profile'
            }
        })
        .orFail()
        .lean()
        .exec((err, records) => {
            if (err) {
                res.status(500).json({ message: "there are no records" });
                next(err);
            }
            else {
                records.forEach(record => {
                    console.log(record)
                    if (record.request) {
                        record.faculty_name = record.request.faculty.username;
                        record.request_title = record.request.title;
                    }
                    else {
                        record.faculty_name = "NA"
                        record.request_title = "NA"
                    }
                    delete record.request;
    
                });
                    res.status(200).json(records);   
            }
        })
}