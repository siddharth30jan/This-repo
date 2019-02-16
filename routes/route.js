const route=require('express').Router()
const passport=require('../passport')
const Users=require('../db').Users
const Products=require('../db').Products

route.use('/admin',require('./admin'))


route.get('/login',(req,res)=>{
    res.render('login')
})
route.get('/signup',(req,res)=>{
    res.render('signup')
})
route.post('/login',passport.authenticate('local',{
    failureRedirect: '/login',
    successRedirect: '/private'
}))
route.post('/signup',(req,res)=>{
    Users.create({
        username: req.body.username,
        password: req.body.password,
        firstname: req.body.firstname,
        lastname: req.body.lastname
    }).then((createdUser)=>{
        res.redirect('/login')
    })    
})

route.get('/logout', function(req, res){
    req.logout();
    res.redirect('/login');
  });

exports=module.exports=route
