const mongoose = require('mongoose');
const Request = require('../model/request');
const Profile = require('../model/profile');
const user = require('../model/user');

// get all requests
exports.all_request = (req, res, next) => {
    Request.find().populate('faculty')
        .lean()
        .exec((err, requests) => {
            if (err) {
                res.status(500).json({ error: err });
                next(err);
            }
            requests.forEach(req => {
                        req.faculty_name = req.faculty.username;
                        req.email_address = req.faculty.email_address;
                        delete req.faculty;
            });
            // console.log(requests);
            res.status(200).json(requests);
            // res.status(200).json("deleted");
     });
}

//get all public requests
exports.public_request = (req, res, next) => {
    Request.find({ requestType: "Public" })
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

//get all personal requests of a particular person
exports.faculty_all_request = (req, res, next) => {
    console.log(req.params.email_id)
    Profile.findOne({ email_address: req.params.email_id })
        .exec((err, profile) => {
            console.log(profile._id)
            Request.find({ $or: [{ requestType: "Personal", faculty: profile._id }, { requestType: "Public" }] })
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

//get all personal requests of a particular person
exports.faculty_my_requests = (req, res, next) => {
    console.log(req.params.email_id)
    Profile.findOne({ email_address: req.params.email_id })
        .exec((err, profile) => {
            console.log(profile._id)
            Request.find({ faculty: profile._id })
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


