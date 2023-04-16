const mongoose = require('mongoose');
const Request = require('../model/request');
const Profile = require('../model/profile');

exports.requested_requests = (req, res, next) => {
    Request.find({ status: "Requested" })
        .sort({ created: -1 })
        .exec((err, request) => {
            if (err) {
                res.status(500).json({ error: err });
                next(err);
            }
            console.log(request);
            res.status(200).json(request);
        });
}

exports.verified_requests = (req, res, next) => {
    Request.find({ status: "Verified" })
        .sort({ created: -1 })
        .exec((err, request) => {
            if (err) {
                res.status(500).json({ error: err });
                next(err);
            }
            console.log(request);
            res.status(200).json(request);
        });
}

exports.my_requests = (req, res, next) => {
    Profile.findOne({ email_address: req.params.email_id })
        .exec((err, profile) => {
            console.log(profile._id)
            Request.find({ faculty: profile._id, status: { $in: ["Requested", "Verified"] } })
                .sort({ created: -1 })
                .exec((err, request) => {
                    if (err) {
                        res.status(500).json({ error: err });
                        next(err);
                    }
                    console.log(request);
                    res.status(200).json(request);
                });
        });
}

