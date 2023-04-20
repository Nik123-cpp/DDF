const Profile = require("../model/profile");
const Request = require("../model/request");

//creates a requests
exports.create_request = (req, res, next) => {
    let {title,requestType,amount,documents,description,email_address} = req.body;
    requestObject = { title: title, requestType: requestType, amount: amount, documents: documents, description: description };
    
    const mail = email_address;
    const query = Profile.findOne({ email_address: mail });

    query.exec((err, profile) => {
        if (err) {
            console.log(err);
            next(err);
        }
        requestObject.faculty = profile._id;
        console.log(`created the request ${profile._id}`);
        const request = new Request(requestObject);
        request.save();
        console.log(`created the request ${title}`);
        res.status(200).json({ message: "Request Succesfully Created with ID : " + request._id });
    });
}