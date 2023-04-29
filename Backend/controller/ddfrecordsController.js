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

                    if(record.source)
                    delete record.request;
    
                });
                    res.status(200).json(records);   
            }
        })
}


exports.Add_DDF = (req,res,next)=>{
    let {Source,Amount}=req.body;

    ddf_records.find()
        .sort({ created: -1 })
        .exec((err, record) => {
            if (err) {
                res.status(500).json({err : err});
                next(err);
            }
            else {
                console.log("last record balance is ",record[0].balance)
                const prev_balance = record[0].balance
                const ddf = new ddf_records({source :Source , amount: Amount ,   balance: prev_balance +  Amount ,  transaction_type: "Credit"});
                ddf.save();
                res.status(200).json({ message: "Successfully Update" });
            }
        });

}

exports.Get_Balance = (req,res,next)=>{
    ddf_records.find()
    .sort({ created: -1 })
    .exec((err, record) => {
      if (err) {
          res.status(500).json({err : err});
          next(err);
          }
      else {
          console.log('Returning balance',record[0].balance)
          //const ddf = new DDF_record({ request: request._id, amount: request.amount,balance: record[0].balance - request.amount ,transaction_type: "Debit"});
          res.status(200).json({ balance: record[0].balance })
          }
    });
}