const mongoose = require('mongoose');
const Profile = require('../model/profile');
const Request = require('../model/request');
const DDF_balance = require("../model/DDF");
//approve the request
exports.approve = (req, res, next) => {
    let {name , DeductAmount} = req.body;
    DDF_balance.findOneAndUpdate(
        { name: "Main Balance" },{$inc:{balance : -DeductAmount}}
      ).exec((err, request) => {
        if (err) {
          res.status(500).json({ error: err });
          //console.log(err)
          next(err);
        } else {
          //res.status(200).json({ message: "Successfully Deducted amount" });
        }
      });
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


exports.reject = (req, res, next) => {
    Request.findOneAndUpdate({ _id: req.params.request_id, status: "Verified" }, { status: "Rejected" },{new: true})
        .exec((err, request) => {
            if (err) {
                res.status(500).json({ error: err });
                next(err);
            }
            console.log(request);
        });
    res.status(200).json({ message: "Request Rejected" });
}