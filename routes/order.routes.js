const express = require('express');
const {placeOrderOfUser, getOrdersOfUser, getOrdersofCelebrity, updateOrder} = require('../controllers/order.controller')
const {addOrderInUser}= require('../controllers/user.controller')
const router = express.Router()

// router.get('/orders/:username',authenticated,getOrdersOfUser);
// router.patch('/orders/:username',authenticated,placeOrderOfUser);
router.post('/orders/create',placeOrderOfUser,addOrderInUser) //authenticated
router.get('/orders',getOrdersOfUser) //authenticated
router.get('/orders/celebrity/:celeb_id',getOrdersofCelebrity)
router.patch('/orders/video/edit',updateOrder)

module.exports=router
