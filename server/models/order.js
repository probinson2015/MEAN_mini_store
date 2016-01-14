var mongoose = require('mongoose');

var OrderSchema = new mongoose.Schema({
  _user_id: { type: mongoose.Schema.Types.ObjectId, required:true, trim: true, ref: 'User' },
  _product_id: {type: mongoose.Schema.Types.ObjectId, required: true, trim: true, ref: 'Product'},
  quantity: {type: Number},
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

mongoose.model('Order', OrderSchema);
// OrderSchema.path('product_name').required(true, "Product Name is required");