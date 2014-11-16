/**
 * Created by apple on 11/16/14.
 */
switch(enemyStatus[originX][originY][currentX][currentY]) {

    //cases for corners
    case enemyStatus[1][1][1][1]:
        this.status = enemyStatus[1][1][1][2];
        break;
    case enemyStatus[1][1][1][2]:
        this.status = enemyStatus[1][1][2][2];
        break;
    case enemyStatus[1][1][2][2]:
        this.status = enemyStatus[1][1][2][3]
        break;
    case enemyStatus[1][1][2][3]:
        this.status = destroy;
        break;

    case enemyStatus[5][1][5][1]:
        this.status = enemyStatus[5][1][4][1];
        break;
    case enemyStatus[5][1][4][1]:
        this.status = enemyStatus[5][1][4][2];
        break;
    case enemyStatus[5][1][4][2]:
        this.status = enemyStatus[5][1][3][2];
        break;
    case enemyStatus[5][1][3][2]:
        this.status = destroy;
        break;

    case enemyStatus[1][5][1][5]:
        this.status = enemyStatus[1][5][2][5];
        break;
    case enemyStatus[1][5][2][5]:
        this.status = enemyStatus[1][5][2][4];
        break;
    case enemyStatus[1][5][2][4]:
        this.status = enemyStatus[1][5][3][4];
        break;
    case enemyStatus[1][5][3][4]:
        this.status = destroy;
        break;

    case enemyStatus[5][5][5][5]:
        this.status = enemyStatus[5][5][5][4];
        break;
    case enemyStatus[5][5][5][4]:
        this.status = enemyStatus[5][5][4][4];
        break;
    case enemyStatus[5][5][4][4]:
        this.status = enemyStatus[5][5][4][3];
        break;
    case enemyStatus[5][5][4][3]:
        this.status = destroy;
        break;

    //cases for 3s

    case enemyStatus[2][1][2][1]:
        this.status = enemyStatus[2][1][2][2];
        break;
    case enemyStatus[2][1][2][2]:
        this.status = enemyStatus[2][1][2][3];
        break;
    case enemyStatus[2][1][2][3]:
        this.status = destroy;
        break;

    case enemyStatus[4][1][4][1]:
        this.status = enemyStatus[4][1][4][2];
        break;
    case enemyStatus[4][1][4][2]:
        this.status = enemyStatus[4][1][4][3];
        break;
    case enemyStatus[4][1][4][3]:
        this.status = destroy;
        break;

    case enemyStatus[2][5][2][5]:
        this.status = enemyStatus[2][5][2][4];
        break;
    case enemyStatus[2][5][2][4]:
        this.status = enemyStatus[2][5][2][3];
        break;
    case enemyStatus[2][5][2][3]:
        this.status = destroy;
        break;

    case enemyStatus[4][5][4][5]:
        this.status = enemyStatus[4][5][4][4];
        break;
    case enemyStatus[4][5][4][4]:
        this.status = enemyStatus[4][5][4][3];
        break;
    case enemyStatus[4][5][4][3]:
        this.status = destroy;
        break;

    //cases for 2s

    case enemyStatus[3][1][3][1]:
        this.status = enemyStatus[3][1][3][2];
        break;
    case enemyStatus[3][1][3][2]:
        this.status = destroy;
        break;

    case enemyStatus[5][3][5][3]:
        this.status = enemyStatus[5][3][4][3];
        break;
    case enemyStatus[5][3][4][3]:
        this.status = destroy;
        break;

    case enemyStatus[3][5][3][5]:
        this.status = enemyStatus[3][5][3][4];
        break;
    case enemyStatus[3][5][3][4]:
        this.status = destroy;
        break;

    case enemyStatus[1][3][1][3]:
        this.status = enemyStatus[1][3][2][3];
        break;
    case enemyStatus[1][3][2][3]:
        this.status = destroy;
        break;

    default:
    default code block
}

//look for enemy collisions

tile[2][2] = 0;
tile[3][2] = 0;
tile[4][2] = 0;

tile[2][3] = 0;
tile[4][3] = 0;

tile[2][4] = 0;
tile[3][4] = 0;
tile[4][4] = 0;

foreach (enemyStatus[currentX][currentY]) {
    tile[currentX][currentY]++;
}

//add new enemies

tile[1][1] = 0;
tile[2][1] = 0;
tile[3][1] = 0;
tile[4][1] = 0;
tile[5][1] = 0;

tile[1][2] = 0;
tile[5][2] = 0;

tile[1][3] = 0;
tile[5][3] = 0;

tile[1][4] = 0;
tile[5][4] = 0;

tile[1][5] = 0;
tile[2][5] = 0;
tile[3][5] = 0;
tile[4][5] = 0;
tile[5][5] = 0;

foreach (tile[currentX][currentY]) {
    if (Math.random() >= .9) {
        tile[currentX][currentY]++;
    }
}

//Draw blocks

foreach (tile[currentX][currentY]) {
    if (tile[currentX][currentY] == 0) {
        empty square;
    }
    else if (tile[currentX][currentY] == 1) {
        make filled in circle;
    }
    else if (tile[currentX][currentY] == 2) {
        make empty circle;
    }
    else if (tile[currentX][currentY] == 3) {
        make triangle;
    }
    else if (tile[currentX][currentY] == 3) {
        make diamond;
    }
}