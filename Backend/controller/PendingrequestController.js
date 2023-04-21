const mongoose = require('mongoose');
const Request = require('../model/request');
const Profile = require('../model/profile');

//requests not yet verfied 
exports.requested_requests = (req, res, next) => {
    Request.find({ status: "Requested" })
        .populate('faculty')
        .lean()
        .sort({ created: -1 })
        .exec((err, request) => {
            if (err) {
                res.status(500).json({ error: err });
                next(err);
            }
            request.forEach(req => {
                req.faculty_name = req.faculty.username;
                req.email_address = req.faculty.email_address;
                delete req.faculty;
            });
            console.log(request);
            res.status(200).json(request);
        });
}

//requests verified by committee
exports.verified_requests = (req, res, next) => {
    Request.find({ status: "Verified" })
        .populate('faculty')
        .lean()
        .sort({ created: -1 })
        .exec((err, request) => {
            if (err) {
                res.status(500).json({ error: err });
                next(err);
            }
            request.forEach(req => {
                req.faculty_name = req.faculty.username;
                req.email_address = req.faculty.email_address;
                delete req.faculty;
            });
            console.log(request);
            res.status(200).json(request);
        });
}

//requests of a particular faculty not yet approved but requested or verified
exports.my_requests = (req, res, next) => {
    Profile.findOne({ email_address: req.params.email_id })
        .exec((err, profile) => {
            console.log(profile._id)
            Request.find({ faculty: profile._id, status: { $in: ["Requested", "Verified"] } }, { _id: 1, title: 1, requestType: 1, created: 1, amount: 1, status: 1 })
                .populate('faculty')
                .lean()
                .sort({ created: -1 })
                .exec((err, request) => {
                    if (err) {
                        res.status(500).json({ error: err });
                        next(err);
                    }
                    request.forEach(req => {
                        req.faculty_name = req.faculty.username;
                        req.email_address = req.faculty.email_address;
                        delete req.faculty;
                    });
                    console.log(request);
                    res.status(200).json(request);
                });
        });
}

