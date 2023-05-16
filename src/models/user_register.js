const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
    password: {
        type: String,
        required: true
    },
    user_type: {
        type: String,
        required: true
    }
});

//Create a collection and UserModel is your collection name 

const UserModel = mongoose.model('User', UserSchema);

module.exports= UserModel;