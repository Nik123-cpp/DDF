const mongoose = require('mongoose');
const Profile = require('../model/profile');
const Request = require('../model/request');

//verify the request
exports.verify = (req, res, next) => {
    console.log("Verify request")
    const {review} = req.body
    Request.findOneAndUpdate({ _id: req.params.request_id, status: "Requested" }, { status: "Verified" , review: review},{new: true})
        .exec((err, request) => {
            if (err) {
                res.status(500).json({ error: err });
                next(err);
            }
            console.log(request);
        });
    res.status(200).json({ message: "Request Verified" });
};


exports.deny= (req, res, next) => {
    console.log("Deny request")

    const {review} = req.body
    Request.findOneAndUpdate({ _id: req.params.request_id, status: "Requested" }, { status: "Denied" , review: review },{new: true})
        .exec((err, request) => {
            if (err) {
                res.status(500).json({ error: err });
                next(err);
            }
            console.log(request);
        });
    res.status(200).json({ message: "Request Denied" });
};