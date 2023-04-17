const mongoose = require('mongoose');
const Profile = require('../model/profile');
const Request = require('../model/request');

exports.approve = (req, res, next) => {
    Request.findOneAndUpdate({ _id: req.params.request_id, status: "Verified" }, { status: "Approved" },{new: true})
        .exec((err, request) => {
            if (err) {
                res.status(500).json({ error: err });
                next(err);
            }
            console.log(request);
        });
    res.status(200).json({ message: "Request Approved" });
}