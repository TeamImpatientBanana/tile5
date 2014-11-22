var UI = require('ui');
var Vector2 = require('vector2');

// Call initial variables
var totalCoins = 10;
var totalHealth = 17;
var wallInventory = 0;

var main = new UI.Card({
    title: 'tile5',
    icon: 'images/menu_icon.png',
    subtitle: 'A pebble tower defense',
    //body: 'Press any button.'
});

var error = new UI.Card({
    title: 'Error',
    //icon: 'images/menu_icon.png',
    subtitle: 'You encountered an error',
    //body: 'Have specific error here.'
});

main.show();

main.on('click', 'up', function(e) {
    var card = new UI.Card();
    card.title('Stats');
    card.body('Health, money, wall inventory,  kills, time alive, time until next wave');
    card.show();
});

main.on('click', 'select', function(e) {
    var menu = new UI.Menu({
        sections: [{
            // Items are instant use upon purchase
            items: [
                {
                    title: 'Buy Health (2)',
                    subtitle: 'Heals for 1 hp'
                },
                {
                    title: 'Buy Wall (3)',
                    subtitle: 'Takes the next hit'
                },
                {
                    title: 'Buy Nuke (4)',
                    subtitle: 'Clears every tile'
                }
            ]
        }]
    });
    menu.on('select', function(e) {
        console.log('Selected item #' + e.itemIndex + ' of section #' + e.sectionIndex);
        console.log('The item is titled "' + e.item.title + '"');
        // If Health was purchased
        if (e.sectionIndex === 0 && e.itemIndex === 0) {
            if (totalHealth < 20 && totalCoins >= 2) {
                totalHealth = ++totalHealth;
                totalCoins = totalCoins - 2;
                console.log("Health was purchased");
                console.log(totalHealth);
                console.log(totalCoins);
                main.show();
            }
            else {
                console.log("Not enough coins or your health is full");
                error.show();
            }
        }
        // If Wall was purchased
        else if (e.sectionIndex === 0 && e.itemIndex === 1) {
            if (totalCoins >= 3) {
                totalCoins = totalCoins - 3;
                wallInventory++;
                console.log("Wall was purchased");
                console.log(totalCoins);
                main.show();
            }
            else {
                console.log("Not enough coins");
                error.show();
            }
        }
        // If Nuke was purchased
        else if (e.sectionIndex === 0 && e.itemIndex === 2) {
            if (totalCoins >= 5) {
                totalCoins = totalCoins - 5;
                console.log("Nuke was purchased");
                console.log(totalCoins);
                main.show();
            }
            else {
                console.log("Not enough coins");
                error.show();
            }
        }
    });
  menu.show();
});

/*wind.on('click', 'select', function(e) {
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
});*/

main.on('click', 'down', function(e) {
  var card = new UI.Card();
  card.title('How to play');
  card.body('Every 10 minutes enemies get closer to your base. Fend them off by purchasing items from the shop. ');
  card.show();
});