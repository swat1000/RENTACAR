const mongoose = require("mongoose");
const jwt = require("jsonwebtoken")

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    user_type: {
        type: String,
        required: true
    },
    tokens:[{
        token:{
            type:String,
            required: true
        }
    }]
});

UserSchema.methods.generateAuthToken = async function() {
    try {
        const token = jwt.sign({_id:this._id.toString()}, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({token:token})
        await this.save();
        return token;
    } catch (error) {
        res.send(error)
    }
}

//Create a collection and UserModel is your collection name 

const UserModel = mongoose.model('User', UserSchema);

module.exports= UserModel;