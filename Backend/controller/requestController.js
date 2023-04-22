const Request = require('../model/request');

exports.get_request = (req, res, next) => {
    Request.findById(req.params.req_id)
        .populate('faculty')
        .lean()
        .exec((err, request) => {
            if (err) {
                console.log(err);
                res.status(500).json(err);
                next(err);
            }
            request.faculty_name = request.faculty.username;
            request.email_address = request.faculty.email_address;
            delete request.faculty;
            res.status(200).json(request);
        });
}

