const mongoose = require('mongoose');
const Profile = require('../model/profile');

exports.user_datails = (req, res, next) => {
    email_id = req.params.email_id;
    email_id = email_id.toLowerCase();
    console.log(email_id);
    Profile.findOne({ email_address: email_id })
        .exec((err, profile) => {
            if (err) {
                res.status(500).json({ error: err });
                next(err);
            }
            console.log(profile);
            user = {"User" : profile}
            res.status(200).json(user);
     });
}

exports.register = (req, res, next) => {
    profileObject = { username: req.params.username, email_address: req.params.email_address, password: req.params.password };
    const profile = new Profile(profileObject);
    profile.save();
    log.console(profile);
    res.status(200).json({ message: "Profile Created" });
}

