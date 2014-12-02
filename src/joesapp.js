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
    var stats = new UI.Card();
    stats.title('Stats');
    stats.subtitle('Health: '+totalHealth.toString()+'/20');
    stats.body('Coins: '+totalCoins+', wall inventory: '+wallInventory+',  kills, time alive, time until next wave');
    stats.show();
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

//Begin tiles as objects that probably won't work
//Make enemies as params of tiles
/* EX:
  if (tile1.enemies[origin] > 0) {
    for (var i = 0; i < tile1.enemies[origin]; i++) {
      tile1.enemies[origin]--;
      tile2.enemies[origin]++;
    }
  }
*/

function tile(position) {
    this.position = position;
    this.isSpawnPosition = isSpawnPosition;
    this.isCastle = isCastle;
    this.rowPosition = row;
    this.column = column;
    this.describeMyself = function() {
        console.log("I am a " + this.adjective + " rabbit");
    };
}

//End tiles as objects that probably won't work


main.on('click', 'down', function(e) {
  var howto = new UI.Card();
  howto.title('How to play');
  howto.body('Every 10 minutes enemies get closer to your base. Fend them off by purchasing items from the shop. ');
  howto.show();
});