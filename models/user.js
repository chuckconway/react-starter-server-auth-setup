const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Define our model
const userSchema = new Schema({
  email:{type:String, unique:true},
  password:String

});

//Create the model class


//Export the model
