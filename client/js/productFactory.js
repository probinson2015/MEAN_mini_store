app.factory('ProductFactory', function($http, $location){
	return {
		getProducts: function(callback){
			console.log("ProductsFactory getProducts");
			$http.get('/products').success(function(response){
				callback(response);
			})
		},
		add: function(newProduct, callback){
			if(newProduct){
				console.log("ProductsFactory add ", newProduct);
				$http.post('/products', newProduct).success(function(response){
					callback(response);
				})
			}
		},
		remove: function(product, callback){
			console.log("ProductFactory remove ", product);
			$http.delete('/products/'+product._id).success(function(response){
				callback();
			})
		},
		update: function(product){
			console.log("ProductsFactory update ", product);
			$http.put('/products/'+product._id, product).success(function(response){
				$location.path('/products');
			})
		},
		setProduct: function(product){
			this.product = product;
			$location.path('/products/details');
		},
		getProduct: function(){
			if(!this.product)
				$location.path('/products');
			return this.product;
		}
	}
})