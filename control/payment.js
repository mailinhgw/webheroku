module.exports = function(app) {

	app.get('/payment', payment_view);
	function payment_view(req, res) {
		var cart = req.session.cart;

		res.render('shop_payment', {
			current_user: req.session.user,
			cart: cart,
			cart_count: cart ? Object.values(cart).reduce((a, b) => a + b.qty, 0) : 0
		});
    }
    
}