const express = require('express')
const router = express.Router()
const { data_login }=require('../models')
const gameControllers = require('../controllers/gameControllers')

router.post('/',(req,res)=>{
    const {login_user , login_password} = req.body;
    console.log(login_user);
    data_login.create({
        login_user: login_user,
        login_password: login_password
    }).then(()=>{
        res.render('../views/homepage')
    })
})


//User_Game
router.get('/', gameControllers.index);
router.get('/:id(\\d+)$/', gameControllers.retrieve);
router.post('/', gameControllers.store);
router.put('/:id(\\d+)$/', gameControllers.update);
router.patch('/:id(\\d+)$/', gameControllers.update);
router.delete('/:id(\\d+)$/', gameControllers.remove);


  module.exports = router;
  