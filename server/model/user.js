const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a Schema

const userSchema = new Schema({
  username : {type:String,require:true,unique:true},
  password : {type:String,require :true},
  name : {type:String}
},{collection : UserDb});

const User = mongoose.model('User',userSchema);

module.exports = User;
