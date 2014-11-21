/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

var UI = require('ui');
var Vector2 = require('vector2');

var SM = require('./strap-metrics');
var strapMetricsParms = {
    app_id: "7r7wg8WkDwyiCJDYg",
    resolution: "144x168",
    useragent: "PEBBLE/2.0"
};

SM.Init(strapMetricsParms);

// if accel functionality desired
var Accel = require('ui/accel');
SM.InitAccel(strapMetricsParms,Accel);

// Call initial variables
var totalCoins = 10;
var totalHealth = 17;

var enemyStatus = []; //global var

function moveAllEnemies() {
  //cases for corners
  if (enemyStatus[0][0] > 0) {
    for (var i = 0; i < enemyStatus[0][0]; i++) {
      enemyStatus[0][0]--;
      enemyStatus[0][5]++;
    }
  }
  if (enemyStatus[0][5] > 0) {
    for (var j = 0; j < enemyStatus[0][5]; j++) {
      enemyStatus[0][5]--;
      enemyStatus[0][6]++;
    }
  }
  if (enemyStatus[0][6] > 0) {
    for (var k = 0; k < enemyStatus[0][6]; k++) {
      enemyStatus[0][6]--;
      enemyStatus[0][11]++;
    }
  }
  if (enemyStatus[0][11] > 0) {
    for (var l = 0; l < enemyStatus[0][11]; l++) {
      enemyStatus[0][11]--;
    }
  }

  if (enemyStatus[4][4] > 0) {
    for (var m = 0; m < enemyStatus[4][4]; m++) {
      enemyStatus[4][4]--;
      enemyStatus[4][3]++;
    }
  }
  if (enemyStatus[4][3] > 0) {
    for (var n = 0; n < enemyStatus[4][3]; n++) {
      enemyStatus[4][3]--;
      enemyStatus[4][8]++;
    }
  }
  if (enemyStatus[4][8] > 0) {
    for (var o = 0; o < enemyStatus[4][8]; o++) {
      enemyStatus[4][8]--;
      enemyStatus[4][7]++;
    }
  }
  if (enemyStatus[4][7] > 0) {
    for (var p = 0; p < enemyStatus[4][7]; p++) {
      enemyStatus[4][7]--;
    }
  }

  if (enemyStatus[20][20] > 0) {
    for (var q = 0; q < enemyStatus[20][20]; q++) {
      enemyStatus[20][20]--;
      enemyStatus[20][21]++;
    }
  }
  if (enemyStatus[20][21] > 0) {
    for (var r = 0; r < enemyStatus[20][21]; r++) {
      enemyStatus[20][21]--;
      enemyStatus[20][16]++;
    }
  }
  if (enemyStatus[20][16] > 0) {
    for (var s = 0; s < enemyStatus[20][16]; s++) {
      enemyStatus[20][16]--;
      enemyStatus[20][17]++;
    }
  }
  if (enemyStatus[20][17] > 0) {
    for (var t = 0; t < enemyStatus[20][17]; t++) {
      enemyStatus[20][17]--;
    }
  }

  if (enemyStatus[24][24] > 0) {
    for (var u = 0; u < enemyStatus[24][24]; u++) {
      enemyStatus[24][24]--;
      enemyStatus[24][19]++;
    }
  }
  if (enemyStatus[24][19] > 0) {
    for (var v = 0; v < enemyStatus[24][19]; v++) {
      enemyStatus[24][19]--;
      enemyStatus[24][18]++;
    }
  }
  if (enemyStatus[24][18] > 0) {
    for (var w = 0; w < enemyStatus[24][18]; w++) {
      enemyStatus[24][18]--;
      enemyStatus[24][13]++;
    }
  }
  if (enemyStatus[24][13] > 0) {
    for (var x = 0; x < enemyStatus[24][13]; x++) {
      enemyStatus[24][13]--;
    }
  }

  //cases for 3s

  if (enemyStatus[1][1] > 0) {
    for (var y = 0; y < enemyStatus[1][1]; y++) {
      enemyStatus[1][1]--;
      enemyStatus[1][6]++;
    }
  }
  if (enemyStatus[1][6] > 0) {
    for (var z = 0; z < enemyStatus[1][6]; z++) {
      enemyStatus[1][6]--;
      enemyStatus[1][11]++;
    }
  }
  if (enemyStatus[1][11] > 0) {
    for (var aa = 0; aa < enemyStatus[1][11]; aa++) {
      enemyStatus[1][11]--;
    }
  }

  if (enemyStatus[3][3] > 0) {
    for (var ab = 0; ab < enemyStatus[3][3]; ab++) {
      enemyStatus[3][3]--;
      enemyStatus[3][8]++;
    }
  }
  if (enemyStatus[3][8] > 0) {
    for (var ac = 0; ac < enemyStatus[3][8]; ac++) {
      enemyStatus[3][8]--;
      enemyStatus[3][13]++;
    }
  }
  if (enemyStatus[3][13] > 0) {
    for (var ad = 0; ad < enemyStatus[3][13]; ad++) {
      enemyStatus[3][13]--;
    }
  }

  if (enemyStatus[21][21] > 0) {
    for (var ae = 0; ae < enemyStatus[21][21]; ae++) {
      enemyStatus[21][21]--;
      enemyStatus[21][16]++;
    }
  }
  if (enemyStatus[21][16] > 0) {
    for (var af = 0; af < enemyStatus[21][16]; af++) {
      enemyStatus[21][16]--;
      enemyStatus[21][11]++;
    }
  }
  if (enemyStatus[21][11] > 0) {
    for (var ag = 0; ag < enemyStatus[21][11]; ag++) {
      enemyStatus[21][11]--;
    }
  }

  if (enemyStatus[23][23] > 0) {
    for (var ah = 0; ah < enemyStatus[23][23]; ah++) {
      enemyStatus[23][23]--;
      enemyStatus[23][18]++;
    }
  }
  if (enemyStatus[23][18] > 0) {
    for (var ai = 0; ai < enemyStatus[23][18]; ai++) {
      enemyStatus[23][18]--;
      enemyStatus[23][13]++;
    }
    if (enemyStatus[23][13] > 0) {
      for (var aj = 0; aj < enemyStatus[23][13]; aj++) {
        enemyStatus[23][13]--;
      }
    }

    //cases for 2s

    if (enemyStatus[2][2] > 0) {
      for (var ak = 0; ak < enemyStatus[2][2]; ak++) {
        enemyStatus[2][2]--;
        enemyStatus[2][7]++;
      }
    }
    if (enemyStatus[2][7] > 0) {
      for (var al = 0; al < enemyStatus[2][7]; al++) {
        enemyStatus[2][7]--;
      }
    }

    if (enemyStatus[14][14] > 0) {
      for (var am = 0; am < enemyStatus[14][13]; am++) {
        enemyStatus[14][14]--;
        enemyStatus[14][13]++;
      }
    }
    if (enemyStatus[14][13] > 0) {
      for (var an = 0; an < enemyStatus[14][13]; an++) {
        enemyStatus[14][13]--;
      }
    }

    if (enemyStatus[22][22] > 0) {
      for (var ao = 0; ao < enemyStatus[22][22]; ao++) {
        enemyStatus[22][22]--;
        enemyStatus[22][17]++;
      }
    }
    if (enemyStatus[22][17] > 0) {
      for (var ap = 0; ap < enemyStatus[22][17]; ap++) {
        enemyStatus[22][17]--;
      }
    }

    if (enemyStatus[10][10] > 0) {
      for (var aq = 0; aq < enemyStatus[10][11]; aq++) {
        enemyStatus[10][10]--;
        enemyStatus[10][11]++;
      }
    }
    if (enemyStatus[10][11] > 0) {
      for (var ar = 0; ar < enemyStatus[10][11]; ar++) {
        enemyStatus[10][11]--;
      }
    }
  }
}

//adding enemies

var spawnGrids = [0,1,2,3,4,5,9,10,14,15,19,20,21,22,23,24];

for (var as = 0; as < spawnGrids.length; as++) {
  if (Math.random() >= 0.9) {
    enemyStatus[spawnGrids[as]][spawnGrids[as]]++;
  }
}




// Set these variables for sizes
var size1 = 9;
var size2 = 38;
var size3 = 67;
var size4 = 96;
var size5 = 125;

// Renders the grid

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
 // size: new Vector2(29, 29),
  borderColor: 'black',
  image: ('./castle.png')
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

for (var ba = 0; ba < grid.length; ba++) {
  wind.add(grid[ba]);
}

wind.show();
SM.Log('/mainwind/show');

//Draw blocks

for (var at = 0; at < 24; at++) {
  for (var au = 0; au < 24; au++) {

    var testing = enemyStatus[at][au];
    // This is the position where to PUT the enemy according to the grid array
    var positionOfEnemy = grid[au].position();

    if (testing === 0) {
      var emptySquare = new UI.Rect({
        size: new Vector2(10, 10),
        position: positionOfEnemy,
        backgroundColor: 'clear',
        borderColor: 'black'
      });
      wind.add(emptySquare);
    }
    else if (testing == 1) { // This still needs to work
      // Make a filled in square
      var filledInSquare = new UI.Rect({
        size: new Vector2(10,10),
        position: positionOfEnemy,
        backgroundColor: 'black',
        borderColor: 'black'
      });
      wind.add(filledInSquare);
    }
    else if (testing == 2) { // This still needs to work
      // Make an empty circle
      var emptyCircle = new UI.Circle({
        size: new Vector2(10,10),
        position: positionOfEnemy,
        backgroundColor: 'clear',
        borderColor: 'black'
      });
      wind.add(emptyCircle);
    }
    else if (testing == 3) { // This still needs to work
      // Make an filled in circle
      var filledInCircle = new UI.Circle({
        size: new Vector2(10,10),
        position: positionOfEnemy,
        backgroundColor: 'black',
        borderColor: 'black'
      });
      wind.add(filledInCircle);
    }
    else if (testing == 4) { // This still needs to work
      var fourSymbol = new UI.Text({
        text: '%',
        color: 'black',
        position: positionOfEnemy
      });
      wind.add(fourSymbol);
    }
  }
}


wind.on('click', 'up', function(e) {
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
        SM.Log('/hp/purchase');

        console.log(totalHealth);
        console.log(totalCoins);
      }
      else {
        console.log("Not enough coins");
        SM.Log('/coins/none');

      }
    }
    
    // If Wall was purchased
    if (e.sectionIndex === 0 && e.itemIndex === 1) {
      
      totalCoins = totalCoins - 3;
      console.log("Wall was purchased");
      SM.Log('/wall/purchase');

      console.log(totalCoins);
    }
    
    // If Nuke was purchased
    if (e.sectionIndex === 0 && e.itemIndex === 2) {
      
      totalCoins = totalCoins - 3;
      console.log("Nuke was purchased");
      SM.Log('/nuke/purchase');

    }
  });
  menu.show();
});



wind.on('click', 'down', function(e) {
  var healthAndCoinCard = new UI.Card({
  title: 'Status',
  subtitle: 'Health: '+totalHealth.toString()+'/20',
  body: 'Coins: '+totalCoins
  });
  healthAndCoinCard.show();
  SM.Log('/status/show');

});