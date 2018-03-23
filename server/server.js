var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Item = require('./api/models/itemModel'), 
  Checkout = require('./api/models/checkoutModel'),
  Category = require('./api/models/categoryModel'),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  Demo = require('./api/tools/fill-example-db'),
  createDemo = true;
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/ShopDb'); 

// Too secure for development :)
app.use(cors({
   origin: "http://localhost:8080"
}))

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routen registrieren
var itemRoutes = require('./api/routes/itemRoutes');
var checkoutRoutes = require('./api/routes/checkoutRoutes');
var categoryRoutes = require('./api/routes/categoryRoutes');
itemRoutes(app);
checkoutRoutes(app);
categoryRoutes(app);

//Wenn die Demodatenbank erzeugt werden soll
if (createDemo) {
  Demo.createDemoDatabase();
}

app.listen(port);
console.log('The AGI API server has been started on port: ' + port);