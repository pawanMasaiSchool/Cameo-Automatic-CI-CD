const express= require('express')
const { getCelebritiesByID } = require('../controllers/celebrities.controller')
const { addFollowingInUser, getFollowing, removeFollowingInUser, getUser, updateUser, getCelebBySearch } = require('../controllers/user.controller')
const router= express.Router()

router.get('/user/profile',(req,res)=>{
    return res.status(200).json({profile_picture:req.user.profile_picture,username:req.user.username})
})

router.get('/user/detail',getUser)

router.patch('/user/following',addFollowingInUser)
router.patch('/user/detail',updateUser)
router.get('/user/following',getFollowing)

router.patch('/user/following/remove',removeFollowingInUser)


module.exports=router