var Order = mongoose.model('Order');
var Product = mongoose.model('Product');
var User = mongoose.model('User');

module.exports = (function() {
	return {
		index: function(request, response){
			console.log("Server / Ctrl / Products - Index")
			// var products = [{first_name:'Winners!!!!'}];
			Product.find({}, function(err, products){
				if(err){
					console.log(err);
					// response.json([{first_name:"Updating, please be patient..."}]);
				}
				else{
					// console.log(products);
					response.json(products);
				}
			})
		},
		new: function(request, response){
			console.log("Server / Ctrl / Products - New")
		},
		create: function(request, response){
			console.log("Server / Ctrl / Products - Create")
			var product = new Product;
			product.product_name = request.body.product_name;
			product.description = request.body.description;
			product.quantity = request.body.quantity;
			product.img_url = request.body.img_url;
			product.save(function(err){
				if(err){
					console.log(err);
					response.json({status:false});
				}
				else{
					response.json({status:true});
				}
			})
		},
		edit: function(request, response){
			console.log("Server / Ctrl / Products - Edit")
		},
		update: function(request, response){
			console.log("Server / Ctrl / Products - Update", request.body)
			Product.findOneAndUpdate({_id:request.params.id}, request.body, function(err, record){
				if(err){
					console.log(err);
					response.json({status:false});
				}
				else{
					response.json({status:true});
				}
			})
		},
		show: function(request, response){
			console.log("Server / Ctrl / Products - Show")
		},
		destroy: function(request, response){
			console.log("Server / Ctrl / Products - Destroy");
			console.log("Destroy params id:", request.params.id);
			Product.remove({_id:request.params.id}, function(err){
				if(err){
					console.log(err);
					response.json({status:false});
				}
				else{
					response.json({status:true});
				}
			})
		}
	}
})();