module.exports = function(app) {
  	var users = require('../controllers/users.js');
  	var products = require('../controllers/products.js');
  	var orders = require('../controllers/orders.js');


	app

	// - - - User - - -
    // Index
	.get('/users', function(request, response) { users.index(request, response) })
	// New
	.get('/users/new', function(request, response) { users.create(request, response) })
	// Show
	.get('/users/:id', function(request, response) { users.show(request, response) })
	// Edit 
	.post('/users/:id/edit', function(request, response) { users.update(request, response) })
	// Create
	.post('/users', function(request, response) { users.create(request, response) })	
	// Destroy
	.delete('/users/:id', function(request, response) { users.destroy(request, response) })
	// Update
	.put('/users/:id', function(request, response) { users.update(request, response) })

	// - - - Product - - -
    // Index
	.get('/products', function(request, response) { products.index(request, response) })
	// New
	.get('/products/new', function(request, response) { products.create(request, response) })
	// Show
	.get('/products/:id', function(request, response) { products.show(request, response) })
	// Edit 
	.post('/products/:id/edit', function(request, response) { products.update(request, response) })
	// Create
	.post('/products', function(request, response) { products.create(request, response) })	
	// Destroy
	.delete('/products/:id', function(request, response) { products.destroy(request, response) })
	// Update
	.put('/products/:id', function(request, response) { products.update(request, response) })

	// - - - Order - - -
    // Index
	.get('/orders', function(request, response) { orders.index(request, response) })
	// New
	.get('/orders/new', function(request, response) { orders.create(request, response) })
	// Show
	.get('/orders/:id', function(request, response) { orders.show(request, response) })
	// Edit 
	.post('/orders/:id/edit', function(request, response) { orders.update(request, response) })
	// Create
	.post('/orders', function(request, response) { orders.create(request, response) })	
	// Destroy
	.delete('/orders/:id', function(request, response) { orders.destroy(request, response) })
	// Update
	.put('/orders/:id', function(request, response) { orders.update(request, response) })
};