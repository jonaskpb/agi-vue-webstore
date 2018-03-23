'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CheckoutSchema = new Schema({
  added: {
    type: Array,
    required: true
  },
  timestamp: {
    type: String
  } 
});

module.exports = mongoose.model('Checkout', CheckoutSchema);