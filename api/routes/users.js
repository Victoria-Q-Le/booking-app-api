import express from "express"
import {updateUser, deleteUser, getUser, getUsers} from "../controllers/user.js"
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js"

const router = express.Router()

//VERIFY TOKEN
router.get("/checkauthentication", verifyToken, (req, res, next) => {
    res.send("Hello user, you are logged in")
})

router.get("/checkuser/:id", verifyUser, (req, res, next) => {
    res.send("Hello user, you are logged in and can delete your account")
})

router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
    res.send("Hello Admin")
})

//UPDATE
router.put("/:id", updateUser)

//DELETE
router.delete("/:id", deleteUser)

//GET 
router.get("/:id", getUser)

//GET ALL
router.get("/", getUsers)

export default router