const Profile = require('./model/profile');
const Request = require('./model/request');

const mongoose = require('mongoose');

mongoose.set("strictQuery", false);

const mongoDB = "mongodb+srv://cs20btech11018:zwmZG1KTGxxhW4w0@cluster0.6yngap0.mongodb.net/ddf?retryWrites=true&w=majority";

try {
    mongoose.connect(mongoDB, { useNewUrlParser: true });
    console.log('MongoDB Connected');
    // suraj = profileCreate("suraj", "cs20btech11050@iith.ac.in", "bobby");
    // madhav = profileCreate("Nikhil", "cs20btech11036@iith.ac.in", "nikki");
    requestCreate("cs20btech11036@iith.ac.in", "Travel fund", "Personal", 20000, ["doc1", "doc2"], "I need money for travel");
    requestCreate("cs20btech11036@iith.ac.in", "Furniture fund for new lab", "Public", 200000, ["doc1", "doc2"], "I need money for furniture");

} catch (error) {
	console.log(error);
}

async function profileCreate(username, email_address, password) {
    
    profileObject = { username: username, 
        email_address: email_address, 
        password: password };

    const profile = new Profile(profileObject);
    await profile.save();
    console.log(`create a profile of ${username}`);
    return profile;
}

function requestCreate(mail, title, requestType, amount, documents, description) {

    requestObject = { faculty: mongoose.Types.ObjectId(), 
        title: title, 
        requestType: requestType, 
        amount: amount, 
        documents: documents, 
        description: description };

    const query = Profile.findOne({ email_address: mail });

    query.exec((err, profile) => {
        if (err) {
            console.log(err);
            return;
        }
        requestObject.faculty = profile._id;
        console.log(`created the request ${profile._id}`);
        const request = new Request(requestObject);
        request.save();
        console.log(`created the request ${title}`);
        return request;
    });

}
