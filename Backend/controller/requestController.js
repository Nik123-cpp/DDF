const Request = require('../model/request');

exports.get_request = (req, res, next) => {
    Request.findById(req.params.req_id)
        .exec((err, request) => {
            if (err) {
                console.log(err);
                res.status(500).json(err);
                next(err);
            }
            res.status(200).json(request);
        });
}

