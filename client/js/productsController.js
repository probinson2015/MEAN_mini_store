	app.controller('ProductsController', function(ProductFactory){
	console.log("ProductsController Loaded");
	var that = this;

	//product controller calls to factory
	var getProducts = function(){
		ProductFactory.getProducts(function(products){
			that.products = products;
		});
	}
	getProducts();
	this.add = function(newProduct){

		ProductFactory.add(newProduct, function(){
			getProducts();
		})
		this.newProduct = {};
	}
	this.remove = function(product){
		ProductFactory.remove(product, function(){
			getProducts();
		})
	}
	this.show = function(product){
		ProductFactory.setProduct(product);
	}
})

	app.controller('ProductController', function(ProductFactory){
	// console.log("UserController Loaded");
	this.product = ProductFactory.getProduct();
	
	// ProductFactory.getProduct(function(productParam){
	// 	that.product = productParam
	// });
	

	this.update = function(product){
		ProductFactory.update(product);
	}
})