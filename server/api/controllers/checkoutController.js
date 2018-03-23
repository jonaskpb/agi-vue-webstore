'use strict';

var mongoose = require('mongoose'),
Checkout = mongoose.model('Checkout');

// Erstelle einen Checkout in der Datenbank
exports.storeCheckout = function(req, res) {
  var newCheckout = new Checkout();
  var currentDate = new Date();
  newCheckout.added = req.body;
  newCheckout.timestamp = currentDate.toLocaleString()
  newCheckout.save(function(err, checkout) {
    if (err)
      res.send(err);
    res.json(checkout);
  });
};