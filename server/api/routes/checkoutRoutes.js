'use strict';
module.exports = function(app) {
  var checkoutStore = require('../controllers/checkoutController');

  app.route('/checkout')
    .post(checkoutStore.storeCheckout);
};