mongoose = require('mongoose');

//Catagory schema
const catagorySchema = mongoose.Schema({
          title: {type: String, required: true},
          slug: {type: String}
});

const Catagory = module.exports = mongoose.model('Catagory', catagorySchema);
