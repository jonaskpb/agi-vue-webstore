'use strict';

var mongoose = require('mongoose'),
Item = mongoose.model('Items');

// Liste alle Items
exports.listAllItems = function(req, res) {
  Item.find({}, function(err, item) {
    if (err)
      res.send(err);
    res.json(item);
  });
};

// Liste alle Items mit dem Highlighted Flag
exports.listAllItemsHighlighted = function(req, res) {
  Item.find({highlighted: true}, function(err, item) {
    if (err)
      res.send(err);
    res.json(item);
  });
};

// Liste alle Items in Kategorie x
exports.listAllItemsInCategory = function(req, res) {
  Item.find({category: req.params.itemCategory}, function(err, item) {
    if (err)
      res.send(err);
    res.json(item);
  });
};

// Erstelle ein Item
exports.createItem = function(req, res) {
  var newItem = new Item(req.body);
  newItem.save(function(err, item) {
    if (err)
      res.send(err);
    res.json(item);
  });
};

// Lese ein bestimmtes Item
exports.readItem = function(req, res) {
  Item.findById(req.params.itemId, function(err, item) {
    if (err)
      res.send(err);
    res.json(item);
  });
};

// Aktualisiere ein Item
exports.updateItem = function(req, res) {
  Item.findOneAndUpdate({_id: req.params.itemId}, req.body, {new: true}, function(err, item) {
    if (err)
      res.send(err);
    res.json(item);
  });
};
