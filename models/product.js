mongoose = require('mongoose');



//products schema
const productSchema = mongoose.Schema({
          image: {type: String},
          title: {type: String, required: true},
          desc: {type: String, required: true},
          price: {type: Number, required: true}


});

const Product = module.exports = mongoose.model('Product', productSchema);
