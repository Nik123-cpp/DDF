mongoose = require("mongoose")

const userschema = new mongoose.Schema({
    username : String,
    email_address : {
        type: String,
        required: true,
        unique: true
    },
    password : String
})


const User = mongoose.model("User",userschema)

class user{
    
    constructor(username,email_id,password){
        this.email_id = email_id;
        this.username = username;
        this.password = password;
    }

    
    async change_username(new_username) {

        try{
            const user = await User.findOne({ email_address:this.email_id })
            user.username = new_username
            user.save()
            console.log(user)
            return 1
        }catch(err){
            console.log(err);
            return 0
        }

    }

    async register_user() {
        try{
            const user = await User.create({ 
                username : this.username ,
                email_address: this.email_id,
                password: this.password })

            console.log(user)
            return 1
        }catch(err){
            console.log(err);
            return 0
        }
    }

    static async get_user_id(email_id) {


        try{
            email_id = email_id.toLowerCase()
            const doc = await User.findOne({ email_address:email_id }).select({username: 1 ,_id: 0, password: 1})
            console.log(doc)
            return doc
        }catch(err){
            console.log(err);
        }
    }
}


module.exports = user;