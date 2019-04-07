

const model = {
    boardSize: 7,
    shipNum:3,
    shipLength: 3,
    shipSunk:0,
    // setting location of ships through empty arrays until guess is declared.
    ships:[
        {locations:[0,0,0], hits: ["","","",]},
        {locations:[0,0,0], hits: ["","","",]},
        {locations:[0,0,0], hits: ["","","",]},
    ],
    fire: function(guess){
        // created a for loop for the players guess
        for (i = 0; i <this.shipNum;i++){
            const ship = this.ships[1];
            const index = ship.locations. indexOf(guess);
            // display  already hit
            if (ship.hits[index] === "hit"){
                view.displayMessage("Already hit Target!");
                return true;
            }
            // hit 
            else if (index >= 0 ){
                view.displayHit(guess);
                view.displayMessage("HIT!");

                if(this.shipSunk(ship)){
                    view.displayMessage("You sunk my Battleship!");
                    this.shipSunk ++;
                }
                return true;
            }
        }
        view.displayMiss(guess);
        view.displayMessage("You Missed fool!");
        return false;
    },
    // index of ship have been hit three times, valid location, otherwise it is sunk.
    sunk:function(ship){
        for (const i=0;i < this.shipLength; i++){
            if (ship.hits[i]!== "hit"){
                return false;
            }
        }
    
    },
    createShipLocation: function(){
        const locations;
        for (const i = 0; i < this.shipNum; i++) {
            do {
                locations = this.createShipLocation();
            } while (this.target(locations));
            this.ships [i].locations = locations;
        }
        console.log("shipsarray");
        console.log(this.ships);
    },
    // if the direction returns a value of one it will be horizontal
    // random umber multiplied by the board size and col are dependent on random number
    // this will determine location of ship
    createShip: function () {
        var direction = Math.floor (Math.random(0) *2);
        var row,col;
        if (direction === 1){
            row = Math.floor(Math.random() * this.boardSize);
            col = Math.floor (Math.random() * (this.boardSize - this.shipLength +1));
        } else {
        col= Math.floor(Math.random() * this.boardSize);
        row = Math.floor (Math.random() * (this.boardSize - this.shipLength +1));
    }
        var newShipLocations = [];
        for (let i =0;i < this.shipLength; i++){
            if  (direction === 1){
                newShipLocations.push(row + "" + (col + 1));
            } else {
                newShipLocations.push ((row +1 + "" + col));
            }
        }
        return newShipLocations;
    },
    // as long as the ship locations are equal or greater to index of length locations for variable a, and not the same, return true for no collions
    // if false collision
    collision: function (locations) {
        for (let i = 0; i < this.shipNum; i ++) {
            let ship = this.ships[i];
            for (let a = 0; a < locations.length; a ++){
                if (ship.locations.indexOf (locations[a]) >= 0) {
                    return true;
                }
            }
        }
        return false;
    }


};

let view = {
    displayMessage: function(msg) {
        let messageArea = document. getElementById("message");
        messageArea.innerHTML = msg;
    },
    displayHit: function (location) {
        let cell = document.getElementById(location);
        cell.setAttribute("class","hit");
    },
    displayMiss: function (location){
        let cell = document.getElementById(location);
        call.setAttribute("class","miss");
    }
};



