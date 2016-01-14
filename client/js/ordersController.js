// app.controller('MainController', function(){
// 	console.log("MainController Loaded");
	
// })

app.controller('OrdersController', function(OrderFactory, ProductFactory, UserFactory){
	console.log("OrdersController Loaded");
	var that = this;
	
	//order controller calls to factory
	var getOrders = function(){
		OrderFactory.getOrders(function(orders){
			that.orders = orders;
		});
	}
	getOrders();
	this.add = function(newOrder){
		// console.log("new order details: ", newOrder, user, product);
		OrderFactory.add(newOrder, function(){
			getOrders();
		})
	}
	this.remove = function(order){
		OrderFactory.remove(order, function(){
			getOrders();
		})
	}
	this.show = function(order){
		OrderFactory.setOrder(order);
	}

	//get users
	UserFactory.getUsers(function(users){
	that.users = users;
	// console.log("here are the users: ", users);
	});
	
	//get products
	ProductFactory.getProducts(function(products){
	that.products = products;
	// console.log("here are the products: ", products);
	});
	




})

app.controller('OrderController', function(OrderFactory){
	console.log("OrderController Loaded");
	this.order = OrderFactory.getOrder();
	this.update = function(order){
		OrderFactory.update(order);
	}
})