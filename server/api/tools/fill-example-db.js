'use strict';

var mongoose = require('mongoose'),
Category = mongoose.model('Category'),
Item = mongoose.model('Items');

// Erstelle eine Kategorie (nur für initiales Füllen im Beispiel)
exports.createCategory = function(name, icon) {
  var newCategory = new Category();
  newCategory.name = name;
  newCategory.icon = icon;
  newCategory.save();
};

// Erstelle eine Kategorie (nur für initiales Füllen im Beispiel)
exports.createItem = function(name, imgUrl, shortDesc, category, highlighted, price) {
  var newItem = new Item();
  newItem.name = name;
  newItem.imgUrl = imgUrl;
  newItem.shortDesc = shortDesc;
  newItem.category = category;
  newItem.highlighted = highlighted;
  newItem.price = price
  newItem.save();
};

exports.dropCollections = function() {
  //Clear the Database
  var filldb = this;
  mongoose.connection.collections['categories'].drop(function (err) { 
    if (err) {
      console.log(err);
    }
    console.log("Cleared Categories!");
    filldb.createDemoCategories();
  });
  mongoose.connection.collections['items'].drop(function (err) { 
    if (err) {
      console.log(err);
    }
    console.log("Cleared Items!"); 
    filldb.createDemoItems();
  });
}

exports.createDemoItems = function() {
  this.createItem("Farber-Castell Füller Essentio Black Carbon",
    "/static/img/fueller.jpg",
    "Schöne Optik, gute Haptik, angenehmes Schreibgefühl - dafür stehen Essentio Schreibgeräte. Farblich abgesetzt und mit Softlack beschichtet, werden die ergonomischen Griffzonen reizvoll mit verchromtem Metall kombiniert.",
    "Schreibwaren",
    true,
    39.99
  );
  this.createItem("Farber-Castell Farbstift Polychromos 120er Holzkoffer",
    "/static/img/buntstifte.jpg",
    "Polychromos Künstlerfarbstifte werden international von professionellen und semiprofessionellen Anwendern für ihre unübertroffene Qualität geschätzt. Ob für die grafische Anwendung, die künstlerische freie Gestaltung oder das exakte Kolorieren von Plänen, Polychromos Buntstifte überzeugen durch ihren hohen Qualitäts-Standard.",
    "Schreibwaren",
    false,
    349.99
  );
  this.createItem("Farber-Castell Textmarker Textliner 48 6er Etui",
    "/static/img/marker.jpg",
    "Der Textliner 1548 garantiert leuchtkräftiges Markieren ohne Verschmieren auf allen gängigen Papierarten. 6 intensiv leuchtende Farben sorgen für Abwechslung. Dank der Spezialspitze aus Polyester können Textpassagen ganz individuell und präzise in drei unterschiedlichen Strichbreiten hervorgehoben werden. Ein klares Zeichen für die Umwelt: Die Tinte basiert auf Wasser und kann mit dem Tintenfass Textliner 1549 Automatic Refill ganz einfach nachgefüllt werden.",
    "Schreibwaren",
    false,
    5.99
  );
  this.createItem("Brunnen Schulheft A4 liniert",
    "/static/img/heft_liniert.jpg",
    "Klassisches, liniertes Schulheft in Lineatur 3. Enthält 16 Blatt 80g/m² Papier",
    "Hefte",
    true,
    1.29
  );
  this.createItem("Brunnen Schulheft A4 kariert",
    "/static/img/heft_kariert.jpg",
    "Klassisches, kariertes Schulheft in Lineatur 5. Enthält 16 Blatt 80g/m² Papier",
    "Hefte",
    false,
    1.29
  );
  this.createItem("Wedo Universalschere",
    "/static/img/schere.jpg",
    "Hochwertige, spitze Universalschere aus rostfreiem Edelstahl mit Kunststoff-Softgriffen. Länge: 16 cm",
    "Utensilien",
    true,
    4.59
  );
  this.createItem("UHU - 2 Klebestifte",
    "/static/img/uhu.jpg",
    "Hochwertige UHU-Klebestifte im praktischen Doppelpack. Gewicht: 21 g",
    "Utensilien",
    false,
    6.19
  );
  this.createItem("Herlitz Briefumschlag DIN Lang, 100er Pack",
    "/static/img/brief_lang.jpg",
    "Selbstklebend mit Fenster, 100 Stück mit Innendruck in Folienpackung, eingeschweißt, weiß",
    "Briefumschläge",
    true,
    2.99
  );
  this.createItem("Herlitz Versandtasche C4, 25er Pack",
    "/static/img/brief_c4.jpg",
    "Haftklebend, Recyclingpapier, blauer Engel, 25er Packung, eingeschweißt, braun",
    "Briefumschläge",
    false,
    3.69
  );
}

exports.createDemoCategories = function() {
  this.createCategory("Schreibwaren", "mode_edit");
  this.createCategory("Hefte", "chrome_reader_mode");
  this.createCategory("Utensilien", "content_cut");
  this.createCategory("Briefumschläge", "drafts");
}

exports.createDemoDatabase = function() {
  this.dropCollections();  
}