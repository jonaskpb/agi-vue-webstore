'use strict';
module.exports = function(app) {
  var itemStore = require('../controllers/itemController');

  app.route('/items')
    .get(itemStore.listAllItemsHighlighted)
    .post(itemStore.createItem);

  app.route('/items/all')
    .get(itemStore.listAllItems)
    .post(itemStore.createItem);
    
  app.route('/items/:itemId')
    .get(itemStore.readItem)
    .put(itemStore.updateItem)

  app.route('/items/cat/:itemCategory')
    .get(itemStore.listAllItemsInCategory)
};
