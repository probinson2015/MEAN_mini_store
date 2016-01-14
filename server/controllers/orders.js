var Order = mongoose.model('Order');
var Product = mongoose.model('Product');
var User = mongoose.model('User');


module.exports = (function() {
	return {
		
		index: function(request, response){
		console.log("Server / Ctrl / Orders - Index")
		
		Order.find().populate('_product_id').populate('_user_id').exec(function(err, orders){
				if(err){
					console.log(err);
				}
				else{
					// console.log(orders);
					response.json(orders);
				}
			})
		},
		new: function(request, response){
			console.log("Server / Ctrl / Orders - New")
		},
		create: function(request, response)
		{
			console.log("Server / Ctrl / Orders - Create", request.body.product_id);
			Product.findOne({_id: request.body.product_id}, function(err, product)
			{
				console.log("here is the product found", product);
				var order = new Order;
				// console.log(order._id);
				order._product_id = product._id;
				User.findOne({_id: request.body.user_id}, function(err, user)
				{
					// console.log("found this user", user)
					order._user_id = user._id;
					order.quantity = request.body.quantity;
					product.orders.push(order._id);
					//decrease product inventory	
					product.quantity = product.quantity - order.quantity;
					user.orders.push(order._id);
					order.save(function(err)
					{
						if(err)
						{
							console.log(err);
							response.json({status:false});
						}
						else
						{
							product.save(function(err){
								if (err){
									console.log("there was an error saving product");
									response.json({status:false});
								}
							})
							user.save(function(err){
								if(err){
									console.log("there was an error saving user");
									response.json({status:false});

								}
							})

							response.json({status:true});
						}	
					})
				})
			})
		},	
		edit: function(request, response){
			console.log("Server / Ctrl / Orders - Edit")
		},
		update: function(request, response){
			console.log("Server / Ctrl / Orders - Update", request.body)
			Order.findOneAndUpdate({_id:request.params.id}, request.body, function(err, record){
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
			console.log("Server / Ctrl / Orders - Show")
		},
		destroy: function(request, response){
			console.log("Server / Ctrl / Orders - Destroy");
			console.log("Destroy params id:", request.params.id);
			//get the order object
			Order.findOne({_id: request.params.id}, function(err, order)
			{
			//find product and put back on shelf
				Product.findOne({_id: order._product_id}, function(err, product)
				{
					product.quantity = product.quantity + order.quantity;

					//remove order from product orders array
					var orderIndex = product.orders.indexOf(request.params.id);
					product.orders.splice(orderIndex, 1);
					//save the product
					product.save(function(err)
					{
						if (err){
							console.log("error removing order from product orders array");
							response.json({status:false});
						}
						//remove order from user orders
						User.findOne({_id: order._user_id}, function(err, user)
						{	
							var orderIdx = user.orders.indexOf(request.params.id);
							user.orders.splice(orderIdx, 1);
							//save the user
							user.save(function(err)
							{
								if(err)
								{
									console.log("error removing order from user orders array");
									response.json({status: false});
								}
								//delete order
								Order.remove({_id:request.params.id}, function(err)
								{
									if(err)
									{
										console.log(err);
										response.json({status:false});
									}
									else
									{
										response.json({status:true});
									}
								})
							})
						})		
					})
				})
			})
		}
	}

})();