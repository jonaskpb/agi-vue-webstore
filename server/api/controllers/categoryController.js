'use strict';

var mongoose = require('mongoose'),
Category = mongoose.model('Category');

// Liste alle Kategorien
exports.getAllCategories = function(req, res) {
  Category.find({}, function(err, cat) {
    if (err)
      res.send(err);
    res.json(cat);
  });
};