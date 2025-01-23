const { register, login,dp } = require('../userController/userController');

const router=require('express').Router();

router.post('/register',register)
router.post('/login',login)
router.post('/dp/:id',dp)
router.get('/allusers/:id',dp)
module.exports=router;