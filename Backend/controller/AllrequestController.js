const mongoose = require('mongoose');
const Request = require('../model/request');
const Profile = require('../model/profile');

exports.all_request = (req, res, next) => {
    Request.find()
        .exec((err, request) => {
            if (err) {
                res.status(500).json({ error: err });
                next(err);
            }
            console.log(request);
            res.status(200).json(request);
     });
}

exports.public_request = (req, res, next) => {
    Request.find({ requestType: "Public" })
        .exec((err, request) => {
            if (err) {
                res.status(500).json({ error: err });
                next(err);
            }
            console.log(request);
            res.status(200).json(request);
     });
}

exports.personal_request = (req, res, next) => {
    console.log(req.params.email_id)
    Profile.findOne({ email_address: req.params.email_id })
        .exec((err, profile) => {
            console.log(profile._id)
            Request.find({ requestType: "Personal", faculty: profile._id })
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


