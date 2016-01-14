app.controller('MainController', function(){
	console.log("MainController Loaded");
	
})

app.controller('UsersController', function(UserFactory){
	console.log("UsersController Loaded");
	var that = this;
	
	//user controller calls to factory
	var getUsers = function(){
		UserFactory.getUsers(function(users){
			that.users = users;
		});
	}
	getUsers();
	this.add = function(newUser){
		UserFactory.add(newUser, function(){
			getUsers();
		})
		this.newUser = {};
	}
	// this.add = function(newUser)
	// {
	// 	for(var i = 0; i < that.users.length; i++){
	// 		if(that.users[i].first_name == that.newUser.first_name){
	// 			$('.error').removeClass('hide');
	// 		}
	// 		else
	// 		{
	// 			$('.error').addClass('hide');
	// 			UserFactory.add(newUser, function()
	// 			{
	// 			})
	// 		}
	// 	}
	// 				getUsers();
	// }
	
	this.remove = function(user){
		UserFactory.remove(user, function(){
			getUsers();
		})
	}
	this.show = function(user){
		UserFactory.setUser(user);
	}


})

app.controller('UserController', function(UserFactory, OrderFactory){
	console.log("UserController Loaded");
	var that = this;
	this.user = UserFactory.getUser();
	this.update = function(user){
		UserFactory.update(user);
	}
	var getOrders = function(){
		OrderFactory.getOrders(function(orders){
			that.orders = orders;
		});
	}
	getOrders();
})