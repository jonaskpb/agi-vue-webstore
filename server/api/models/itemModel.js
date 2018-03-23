'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ItemSchema = new Schema({
  name: {
    type: String,
    required: 'The name of the item.'
  },
  imgUrl: {
    type: String,
    default: '/static/img/icons/apple-touch-icon.png'
  },
  shortDesc: {
    type: String
  },
  category: {
    type: String
  },
  highlighted: {
    type: Boolean
  },
  price: {
    type: Number
  }
});

module.exports = mongoose.model('Items', ItemSchema);