const user = require("../model/user")


exports.user_details = async (req,res,next) => {

    try{
        console.log("Got user details request")
        email_id = req.params.email_id;
        const User = await user.get_user_id(email_id);
        res.status(201).json({User});
    }catch(error){
        console.log(error)
        next(next)
    }
}


exports.change_username = async (req,res,next) => {

    try{
        email_id = req.params.email_id;
        new_username = req.params.name;
        const User = new user(null,email_id,null);
        result = await User.change_username(new_username)
        if(result == 1) {
            console.log("Succesfully changed username")
            res.send("Changed Username")
        }

    }catch(error){
        console.log(error)
        next(next)
    }
}

exports.Register = async (req,res,next) => {

    try{
        let {username,email_id,password} = req.body;

        const User = new user(username,email_id,password);
        result = await User.register_user()
        if(result == 1) {
            console.log("Succesfully Registered")
            res.send("Registration Succesfull")
        }

    }catch(error){
        console.log(error)
        next(next)
    }
}
