var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  first_name: { type: String, trim: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
  orders: [{ type: mongoose.Schema.Types.ObjectId, ref:'Order'}]
});

mongoose.model('User', UserSchema);
UserSchema.path('first_name').required(true, "First Name is required");
