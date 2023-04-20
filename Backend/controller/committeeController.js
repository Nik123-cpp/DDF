const mongoose = require('mongoose');
const Profile = require('../model/profile');
const Request = require('../model/request');

//verify the request
exports.verify = (req, res, next) => {
    
    Request.findOneAndUpdate({ _id: req.params.request_id, status: "Requested" }, { status: "Verified" },{new: true})
        .exec((err, request) => {
            if (err) {
                res.status(500).json({ error: err });
                next(err);
            }
            console.log(request);
        });
    res.status(200).json({ message: "Request Verified" });
};