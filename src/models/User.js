const {Schema, model} = require('mongoose');

const bcrypt = require('bcryptjs');

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
},  {
    timestamps: true
});

UserSchema.methods.encriptar = async password => {
    const salt = await bcrypt.genSalt(11);
    return await bcrypt.hash(password, salt);
};

UserSchema.methods.comparar = async function(password){
    return await bcrypt.compare(password, this.password)
}

module.exports = model('User', UserSchema);
