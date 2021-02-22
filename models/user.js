mongoose = require('mongoose');
var encrypt = require('mongoose-encryption');


//page schema
const userSchema = new mongoose.Schema({
          email: {type: String, required: true},
          password: {type: String, required: true}

});


const secret = 'ourlitlesecrettext';
userSchema.plugin(encrypt, { secret: secret, encryptedFields: ['password'] }); // you want to add other element , and add after password

const User = module.exports = mongoose.model('user', userSchema);
