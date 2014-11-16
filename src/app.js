/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

var UI = require('ui');
var Vector2 = require('vector2');

// Call initial variables
var totalCoins = 10;
var totalHealth = 17;

var main = new UI.Card({
  title: 'tile5',
  icon: 'images/menu_icon.png',
  subtitle: 'True time tower defense',
  body: 'Press any button.'
});
main.show();

/*main.on('click', 'up', function(e) {
  var menu = new UI.Menu({
    sections: [{
      items: [{
        title: 'Pebble.js',
        icon: 'images/menu_icon.png',
        subtitle: 'Can do Menus'
      }, {
        title: 'Second Item',
        subtitle: 'Subtitle Text'
      }]
    }]
  });
  menu.on('select', function(e) {
    console.log('Selected item #' + e.itemIndex + ' of section #' + e.sectionIndex);
    console.log('The item is titled "' + e.item.title + '"');
  });
  menu.show();
});
*/

var size1 = 10;
var size2 = 39;
var size3 = 68;
var size4 = 97;
var size5 = 126;

main.on('click', 'up', function(e) {
  
  // Create a dynamic window
  var wind = new UI.Window();
  
  // First Row
  var cell0 = new UI.Rect({
    position: new Vector2(0, size1),
    // static value
    size: new Vector2(29, 29),
    borderColor: 'black'
  });
  var cell1 = new UI.Rect({
    position: new Vector2(29, size1),
    // static value
    size: new Vector2(29, 29),
    borderColor: 'black'
  });
  var cell2 = new UI.Rect({
    position: new Vector2(58, size1),
    // static value
    size: new Vector2(29, 29),
    borderColor: 'black'
  });
  var cell3 = new UI.Rect({
    position: new Vector2(87, size1),
    // static value
    size: new Vector2(29, 29),
    borderColor: 'black'
  });
  var cell4 = new UI.Rect({
    position: new Vector2(116, size1),
    // static value
    size: new Vector2(29, 29),
    borderColor: 'black'
  });
  
  // Second Row
  var cell5 = new UI.Rect({
    position: new Vector2(0, size2),
    // static value
    size: new Vector2(29, 29),
    borderColor: 'black'
  });
  var cell6 = new UI.Rect({
    position: new Vector2(29, size2),
    // static value
    size: new Vector2(29, 29),
    borderColor: 'black'
  });
  var cell7 = new UI.Rect({
    position: new Vector2(58, size2),
    // static value
    size: new Vector2(29, 29),
    borderColor: 'black'
  });
  var cell8 = new UI.Rect({
    position: new Vector2(87, size2),
    // static value
    size: new Vector2(29, 29),
    borderColor: 'black'
  });
  var cell9 = new UI.Rect({
    position: new Vector2(116, size2),
    // static value
    size: new Vector2(29, 29),
    borderColor: 'black'
  });
  
  // Third Row
  var cell10 = new UI.Rect({
    position: new Vector2(0, size3),
    // static value
    size: new Vector2(29, 29),
    borderColor: 'black'
  });
  var cell11 = new UI.Rect({
    position: new Vector2(29, size3),
    // static value
    size: new Vector2(29, 29),
    borderColor: 'black'
  });
  var cell12 = new UI.Rect({
    position: new Vector2(58, size3),
    // static value
    size: new Vector2(29, 29),
    borderColor: 'black'
  });
  var cell13 = new UI.Rect({
    position: new Vector2(87, size3),
    // static value
    size: new Vector2(29, 29),
    borderColor: 'black'
  });
  var cell14 = new UI.Rect({
    position: new Vector2(116, size3),
    // static value
    size: new Vector2(29, 29),
    borderColor: 'black'
  });
  
  // Fourth Row
  var cell15 = new UI.Rect({
    position: new Vector2(0, size4),
    // static value
    size: new Vector2(29, 29),
    borderColor: 'black'
  });
  var cell16 = new UI.Rect({
    position: new Vector2(29, size4),
    // static value
    size: new Vector2(29, 29),
    borderColor: 'black'
  });
  var cell17 = new UI.Rect({
    position: new Vector2(58, size4),
    // static value
    size: new Vector2(29, 29),
    borderColor: 'black'
  });
  var cell18 = new UI.Rect({
    position: new Vector2(87, size4),
    // static value
    size: new Vector2(29, 29),
    borderColor: 'black'
  });
  var cell19 = new UI.Rect({
    position: new Vector2(116, size4),
    // static value
    size: new Vector2(29, 29),
    borderColor: 'black'
  });
  
  // Fourth Row
  var cell20 = new UI.Rect({
    position: new Vector2(0, size5),
    // static value
    size: new Vector2(29, 29),
    borderColor: 'black'
  });
  var cell21 = new UI.Rect({
    position: new Vector2(29, size5),
    // static value
    size: new Vector2(29, 29),
    borderColor: 'black'
  });
  var cell22 = new UI.Rect({
    position: new Vector2(58, size5),
    // static value
    size: new Vector2(29, 29),
    borderColor: 'black'
  });
  var cell23 = new UI.Rect({
    position: new Vector2(87, size5),
    // static value
    size: new Vector2(29, 29),
    borderColor: 'black'
  });
  var cell24 = new UI.Rect({
    position: new Vector2(116, size5),
    // static value
    size: new Vector2(29, 29),
    borderColor: 'black'
  });
  
  var grid = [cell0, cell1, cell2, cell3, cell4, cell5, cell6, cell7, cell8, cell9, cell10, cell11, cell12, cell13, cell14, cell15, cell16, cell17, cell18, cell19, cell20, cell21, cell22, cell23, cell24];
    
  for (var i = 0; i < grid.length; i++) {
    wind.add(grid[i]);
  }
  wind.show();

  /*
  var wind = new UI.Window();
  var textfield = new UI.Text({
    position: new Vector2(0, 20),
    size: new Vector2(144, 30),
    font: 'gothic-24-bold',
    text: 'Text Anywhere!',
    textAlign: 'center'
  });
  wind.add(textfield);
  wind.show();
  */

/*
main.on('click', 'down', function(e) {
  var card = new UI.Card();
  card.title('A Card');
  card.subtitle('Is a Window');
  card.body('The simplest window type in Pebble.js.');
  card.show();*/
});

main.on('click', 'select', function(e) {
  var menu = new UI.Menu({
    sections: [{
      // Items are instant use upon purchase
      items: [{
        title: 'Buy Health (2)',
        subtitle: 'Heals for 1 hp'
      }, {
        title: 'Buy Wall (3)',
        subtitle: 'Takes the next hit'
      }, {
        title: 'Buy Nuke (4)',
        subtitle: 'Clears every tile'
      }]
    }]
  });
  
  menu.on('select', function(e) {
    // If Health was purchased
    if (e.sectionIndex === 0 && e.itemIndex === 0) {
      if (totalHealth < 20 && totalCoins >= 2) {
        totalHealth = ++totalHealth;
        totalCoins = totalCoins - 2;
        console.log("Health was purchased");
        console.log(totalHealth);
        console.log(totalCoins);
      }
      else {
        console.log("Not enough coins");
      }
    }
    
    // If Wall was purchased
    if (e.sectionIndex === 0 && e.itemIndex === 1) {
      
      totalCoins = totalCoins - 3;
      console.log("Wall was purchased");
      console.log(totalCoins);
    }
    
    // If Nuke was purchased
    if (e.sectionIndex === 0 && e.itemIndex === 2) {
      
      totalCoins = totalCoins - 3;
      console.log("Nuke was purchased");
    }
  });
  menu.show();
});