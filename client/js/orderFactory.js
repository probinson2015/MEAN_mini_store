app.factory('OrderFactory', function($http, $location){
	return {
		getOrders: function(callback){
			console.log("OrdersFactory getOrders");
			$http.get('/orders').success(function(response){
				callback(response);
			})
		},
		add: function(newOrder, callback){
			if(newOrder){
				console.log("OrdersFactory add ", newOrder);
				$http.post('/orders', newOrder).success(function(response){
					callback(response);
				})
			}
		},
		remove: function(order, callback){
			console.log("OrdersFactory remove ", order);
			$http.delete('/orders/'+order._id).success(function(response){
				callback();
			})
		},
		update: function(order){
			console.log("OrdersFactory remove ", order);
			$http.put('/orders/'+order._id, order).success(function(response){
				$location.path('/orders');
			})
		},
		setOrder: function(order){
			this.order = order;
			$location.path('/orders/details');
		},
		getOrder: function(){
			if(!this.order)
				$location.path('/orders');
			return this.order;
		}
	}
})