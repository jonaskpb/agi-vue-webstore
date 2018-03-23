'use strict';
module.exports = function(app) {
  var categoryStore = require('../controllers/categoryController');

  app.route('/categories')
    .get(categoryStore.getAllCategories);
};