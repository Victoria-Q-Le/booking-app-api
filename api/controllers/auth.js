import User from "../models/User.js"
import bcrypt from 'bcryptjs'
import { createError } from "../utils/error.js";
import jwt from 'jsonwebtoken'

export const register = async(req, res,next) => {
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const newUser = new User ({
            username: req.body.username,
            email: req.body.email,
            password: hash,

        })
        await newUser.save()
        res.status(200).send("User has been created")
    } catch (error) {
        next(error)
    }
}

export const login = async(req, res,next) => {
    try {
        const user = await User.findOne({username: req.body.username})
        if (!user) return next(createError(404, "User not found!")) //To check wether the user is in db, else return a custom error mess

        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password)
        if (!isPasswordCorrect) return next(createError(400, "Please double check your username and password!"))
        const {password, isAdmin, ...otherDetails} = user._doc //because user is stored in ._doc in mongoose db, deconstruct the user to return without the admin and hashed password
        const token = jwt.sign({id: user._id, isAdmin: user.isAdmin}, process.env.JWT)//if password is correct, create a new token with the secrect key. JWT: we gonna the hide the user information in the json web token and send it as a cookie, so whenever we make a update service api request, we gonna check if the user isAdmin, if not, return error, if yes, make change to the service
        res.cookie("access_token", token, {httpOnly: true} ).status(200).json({...otherDetails})
       
    } catch (error) {
        next(error)
    }
}

