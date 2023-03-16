import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import User from "../models/User.js"
import {createError} from "../utils/error.js";


export const register = async (req,res,next) => {
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash,

        })
        await  newUser.save()
        res.status(200).send("User has been created")
    } catch (error) {
        next(error)
    }
}

export const login = async (req,res,next) => {
    try {
        const user = await User.findOne({username: req.body.username})
        if (!user) return next(createError(404, "User not found!")) //check wether the user is in db 

        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password) //comparing the password with the hash - 400 bad request 
        if (!isPasswordCorrect) return next(createError(400, "Please double check your username and password!"))
        const token = jwt.sign({id: user._id, isAdmin: user.isAdmin}, process.env.JWT)//if the password is correct => create a token in this token I chose to save the user id and whether they are admin, this also require a secrect key. Then setting the token inside the cookie (installing cookie Parser )

        const {password, isAdmin, ...otherDetails} = user._doc  //deconstruct return user, because didnt want to show all details on client side, also user object is saved under _doc 

        res.cookie("access_token", token, {httpOnly: true}).status(200).json({...otherDetails}) //After creating the token, insert it inside a cookie, I also adjust the config to httpOnly: true because it doesnt allow any client secrect reach to the cookie = more secure 
    } catch (error) {
        next(error)
    }
}