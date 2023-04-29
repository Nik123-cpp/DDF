const mongoose = require('mongoose');
const Profile = require('../model/profile');
const Request = require('../model/request');
const DDF_record = require("../model/ddf_records");
//approve the request
exports.approve = (req, res, next) => {
    
    Request.findOne({ _id: req.params.request_id, status: "Verified" })
        .orFail()
        .exec((err, request) => {
            if (err) {
                res.status(500).json({ message: "No such request is verified by committee" });
                next(err);
            }
            else {
                DDF_record.find()
                    .sort({ created: -1 })
                    .exec((err, record) => {
                        if (err) {
                            res.status(500).json({err : err});
                            next(err);
                        }
                        else if(request.amount > record[0].balance){
                            res.status(200).json({message : "Funds Insufficient"})
                        }
                        else {
                            Request.findOneAndUpdate({ _id: req.params.request_id, status: "Verified" },{status: "Approved"},{ new: true })
                            .exec((err, request) => {
                                if (err) {
                                    res.status(500).json({ message: "No such request is Requested by any faculty" });
                                    next(err);
                                }
                                else {   
                                    const ddf = new DDF_record({ request: request._id, amount: request.amount,balance: record[0].balance - request.amount ,transaction_type: "Debit"});
                                    ddf.save();
                                    res.status(200).json({ message: "Request Successfully Approved" });
                                }}
                            )
                        }
                    });
                // res.status(200).json({ message: "Request Successfully Approved" });
            }
        });    
}


exports.reject = (req, res, next) => {
    Request.findOneAndUpdate({ _id: req.params.request_id, status: "Verified" }, { status: "Rejected" },{new: true})
        .exec((err, request) => {
            if (err) {
                res.status(500).json({ message: "No such request is verified by committee" });
                next(err);
            }
            else {
                res.status(200).json({ message: "Request Successfully Rejected" });
            }
        });

}