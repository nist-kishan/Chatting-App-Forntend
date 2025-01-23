const User = require('../model/userModel')
const bcrypt = require('bcrypt')

module.exports.register = async (req, res, next) => {
    try {
        const { fullname, username,email, password } = req.body;
        const usernameCheck = await User.findOne({ username })
        if (usernameCheck) {
            return res.json({ msg: 'Username Already used', status: false })
        }
        const emailCheck = await User.findOne({ email })
        if (emailCheck) {
            return res.json({ msg: "User Already user his/her Email", status: false })
        }
        const hashPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            fullname,
            username,
            email,
            password: hashPassword,
        });
        delete user.password;

        return res.json({
            status: true,
            user
        });
    } catch (error) {
        next(error)
    }
};

module.exports.login = async (req, res, next) => {
    try {
        const { username,password } = req.body;

        const user = await User.findOne({ username })
        if (!user) {
            return res.json({ msg: 'Incorrect Username or Password', status: false })
        }

        const isPasswordValidate=await bcrypt.compare(password,user.password);
        if(!isPasswordValidate){
            return res.json({ msg: 'Incorrect Username or Password', status: false })
        }
        console.log(user)
        delete user.password;
        return res.json({
            status: true,
            user
        });
    } catch (error) {
        console.error("Login error:", error);
        next(error)
    }
};

module.exports.dp = async (req, res, next) => {
    try {
        console.log("1")
        const userid=req.params.id;
        console.log("2")
        const {avatarImage}=req.body;
        
        console.log("avatarImage: ",avatarImage)
        const userData=await User.findByIdAndUpdate(userid,{avatarImage:avatarImage,isAvatarImageSet:true},{new:true});
        console.log(userData)
        return res.json({
            isSet:userData.isAvatarImageSet,
            image:userData.avatarImage,
        });
    } catch (error) {
        next(error)
    }
};

module.exports.getAllUsers = async (req, res, next) => {
    try {
        // const allUser=await User.find({_id:{$ne:req.params.id}}).select([
        //     "email",
        //     "username",
        //     "avatarImage",
        //     "_id",
        // ]);
        // return req.json(User)
        console.log(req.body)
    } catch (error) {
        next(error);
    }
};