const mongoose = require('mongoose');
const Profile = require('../model/profile');

// get user details based on email id
exports.user_datails = async (req, res, next) => {
    email_id = req.params.email_id;
    email_id = email_id.toLowerCase();
    Profile.findOne({ email_address: email_id })
        .exec((err, profile) => {
            if (err) {
                res.status(500).json({ error: err });
                next(err);
            }
            user = {"User" : profile}
            res.status(200).json(user);
     });
}

// register a user i.e, creates a new profile
exports.register = async (req, res,next) => {
    profileObject = { username: req.params.username, email_address: req.params.email_address, password: req.params.password };
    const profile = new Profile(profileObject);
    Profile.findOne({ email_address: req.params.email_address }).exec((err, profiles) => {
        if (profiles == null) {
            profile.save()
            res.json({ message: "Profile Created" });
        }
        else {
            res.status(500).json({ error: "user already exists" });
        }
    });


}

// change password
exports.change_password = async (req, res, next) => {
    email_id = req.params.email_id;
    email_id = email_id.toLowerCase();
    Profile.findOne({ email_address: email_id })
        .exec((err, profile) => {
            if (err) {
                res.status(500).json({ error: "cannot find profile" });
                next(err);
            }
            profile.password = req.params.password;
            profile.save();
            res.status(200).json({ message: "Password Changed" });
     });
}


