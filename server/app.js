const express = require('express')
const bodyParser = require('body-parser')
const User = require('./model/user');
const app = express()
const mongoose = require('mongoose');
const url = 'mongodb://localhost/UserDB';

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : false}))

app.post('/api/user/login',(req,res)=>{
  mongoose.connect(url,{useNewUrlParser: true},function(err){
    if(err) throw err;
    User.find({
      username : req.body.username,password:req.body.password
    },function(err,user){
      if(err) throw err;
      if(user.length===1){
        return res.status(200).json({
          status :'success',
          data :user
        })
      }else {
        return res.status(200).json({
          status :'fail',
          message :'Login-failed'
        })

      }
    })
  });
})
// app.post('/api/user/login', (req, res) => {
//     mongoose.connect(url, function(err){
//         if(err) throw err;
//         console.log('connected successfully, username is ',req.body.username,' password is ',req.body.password);
//     });
// })

app.listen(3000, () => console.log('blog server running on port 3000!'))
