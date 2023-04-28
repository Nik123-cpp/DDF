const Request = require('../model/request');

//get request details
exports.get_request = (req, res, next) => {

    Request.findById(req.params.req_id)
        .orFail()
        .populate('faculty')
        .lean()
        .exec((err, request) => {
            if (err) {
                // console.log(err);
                res.status(500).json({ message: "No such request exists" });
                // next(err);   
            }
            else {
                request.faculty_name = request.faculty.username;
                request.email_address = request.faculty.email_address;
                delete request.faculty;
                res.status(200).json(request);
            }
        });
    
}

//delete the request
exports.delete_request = (req, res, next) => {
    Request.findByIdAndDelete(req.params.req_id)
        .orFail()
        .exec((err, request) => {
            if (err) {
                res.status(500).json({ message : "cannot delete non-existing request" });
                // next(err);
            }
            else {
                   res.status(200).json({ message: "Request deleted successfully" });
            }
        });
 
}


