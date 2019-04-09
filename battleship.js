
// console.log ("HELLO WORLD")
// const model = {
//     boardSize: 7,
//     shipNum:3,
//     shipLength: 3,
//     shipSunk:0,
//     // setting location of ships through empty arrays until guess is declared.
//     ships:[
//         {locations:[0,0,0], hits: ["","","",]},
//         {locations:[0,0,0], hits: ["","","",]},
//         {locations:[0,0,0], hits: ["","","",]},
//     ],

//     fire: function(guess){
//         // created a for loop for the players guess
//         for (i = 0; i <this.shipNum;i++){
//             const ship = this.ships[1];
//             const index = ship.locations. indexOf(guess);
//             // display  already hit
//             if (ship.hits[index] === "hit"){
//                 view.displayMessage("Already hit Target!");
//                 return true;
                
//             }
//             // hit 
//             else if (index >= 0 ){
//                 view.displayHit(guess);
//                 view.displayMessage("HIT!");

//                 if(this.shipSunk(ship)){
//                     view.displayMessage("You sunk my Battleship!");
//                     this.shipSunk ++;
//                 }
//                 return true;
//             }
//         }
//         view.displayMiss(guess);
//         view.displayMessage("You Missed fool!");
//         return false;
//     },
    
//     // index of ship have been hit three times, valid location, otherwise it is sunk.
//     sunk:function(ship){
//         for (const i=0;i < this.shipLength; i++){
//             if (ship.hits[i]!== "hit"){
//                 return false;
//             }
//         }
//         return true;
//     },
//     createShipLocation: function(){
//         var locations;
//         for (const i = 0; i < this.shipNum; i++) {
//             do {
//                 locations = this.createShipLocation();
//             } while (this.target(locations));
//             this.ships [i].locations = locations;
//         }
//         console.log("shipsarray");
//         console.log(this.ships);
//     },
//     // if the direction returns a value of one it will be horizontal
//     // random umber multiplied by the board size and col are dependent on random number
//     // this will determine location of ship
//     createShip: function () {
//         var direction = Math.floor (Math.random() *2);
//         var row,col;
//         if (direction === 1){
//             row = Math.floor(Math.random() * this.boardSize);
//             col = Math.floor (Math.random() * (this.boardSize - this.shipLength +1));
//         } else {
//         col= Math.floor(Math.random() * this.boardSize);
//         row = Math.floor (Math.random() * (this.boardSize - this.shipLength +1));
//     }
//         var newShipLocations = [];
//         for (let i =0;i < this.shipLength; i++){
//             if  (direction === 1){
//                 newShipLocations.push(row + "" + (col + 1));
//             } else {
//                 newShipLocations.push ((row +1 + "" + col));
//             }
//         }
//         return newShipLocations;
//     },
//     // as long as the ship locations are equal or greater to index of length locations for variable a, and not the same, return true for no collions
//     // if false collision
//     collision: function (locations) {
//         for (let i = 0; i < this.shipNum; i ++) {
//             let ship = this.ships[i];
//             for (let a = 0; a < locations.length; a ++){
//                 if (ship.locations.indexOf (locations[a]) >= 0) {
//                     return true;
//                 }
//             }
//         }
//         return false;
//     }


// };

// let view = {
//     displayMessage: function(msg) {
//         let messageArea = document. getElementById("message");
//         messageArea.innerHTML = msg;
//     },
//     displayHit: function (location) {
//         let cell = document.getElementById(location);
//         cell.setAttribute("class","hit");
//     },
//     displayMiss: function (location){
//         let cell = document.getElementById(location);
//         call.setAttribute("class","miss");
//     }
// };

// const controller = {
//     guesses: 0,
//     makeGuess: function(guess){
//         let location = parseGuess(guess);
//         if (location){
//             this.guesses ++;
//             let hit = model.fire(location);
//             if(hit && model.shipSunk === model.shipNum){
//                 view.displayMessage("you sank all the ships" + this.guesses+ "guesses!");
//             }
//         }
//     }
// };

// function parseGuess(guess){
//     let alphabet = ["A","B","C","D","E","F","G"];

//     if(guess === null || guess.length !== 2) {
//         alert("Pick a valid guess!")
//     } else {
//         let firstLetter = guess.charAt(0);
//         let row = alphabet.indexOf(firstLetter);
//         let column = guess.charAt(1);

//         // make sure the input they selected is valid
//          if(isNaN(row) || isNaN(column)){
//             alert( "not valid");
//         } else if (row >= model.boardSize || column < 0 || column >= model.boardSize){
//             alert("input is not on board");
//         }else {
//             return row + column;
//         }
//     }
//     return null;
// };

// function handleFire() {
//     let guessInput = document.getElementById("guessInput");
//     let guess = guessInput.value.toUpperCase();

//     controller. processGuess(guess);

//     guessInput.value = "";
// };

// function handlekey(e) {
//     let fireButton = document.getElementById("fireButton");

//     e=e || window.event;
//     if (e.keycode ===13){
//         fireButton.click();
//         return false;
//     }
// }



// JavaScript Model
var model = {
    boardSize: 7,
    numShips: 3,
    shipLength: 3,
    shipsSunk: 0,

	ships: [
		{ locations: [0, 0, 0], hits: ["", "", ""] },
		{ locations: [0, 0, 0], hits: ["", "", ""] },
		{ locations: [0, 0, 0], hits: ["", "", ""] }
	],

	fire: function(guess) {

		for(var i = 0; i < this.numShips; i++) {
			var ship = this.ships[i];
			var index = ship.locations.indexOf(guess);

			// check if a ship location has already been hit
			if ( ship.hits[index] === "hit" ) {
				view.displayMessage("Oops, you already hit that location");
				return true;
			} else if ( index >= 0 ) {
				ship.hits[index] = "hit";
				view.displayHit(guess);
				view.displayMessage("HIT!");

				if ( this.isSunk(ship) ) {
					view.displayMessage("You sank my battleship!");
					this.shipsSunk++;
				}
				return true;
			}
			$('#guessInput').focus();
		}
		view.displayMiss(guess);
		view.displayMessage("You Missed");
		return false;
	},

	isSunk: function(ship) {
		for (var i = 0; i < this.shipLength; i++) {
			if (ship.hits[i] !== "hit") {
				return false;
			}
		}
		$('#guessInput').focus();
		return true;
	},

	generateShipLocations: function() {
		var locations;
		for (var i = 0; i < this.numShips; i++) {
		do {
				locations = this.generateShip();
		} while (this.collision(locations));
			this.ships[i].locations = locations;
		}
	},

	generateShip: function() {
		var direction = Math.floor(Math.random() * 2);
		var row, col;

		if (direction === 1) { // horizontal
			row = Math.floor(Math.random() * this.boardSize);
			col = Math.floor(Math.random() * (this.boardSize - this.shipLength + 1));
		} else { // vertical
			row = Math.floor(Math.random() * (this.boardSize - this.shipLength + 1));
			col = Math.floor(Math.random() * this.boardSize);
		}

		var newShipLocations = [];

		for (var i = 0; i < this.shipLength; i++) {
			if (direction === 1) {
				newShipLocations.push(row + "" + (col + i));
			} else {
				newShipLocations.push((row + i) + "" + col);
			}
		}
		return newShipLocations;
	},

	collision: function(locations) {
		for (var i = 0; i < this.numShips; i++) {
			var ship = this.ships[i];
			for (var j = 0; j < locations.length; j++) {
				if (ship.locations.indexOf(locations[j]) >= 0) {
					return true;
				}
			}
		}
		return false;
	}
};

var view = {
	displayMessage: function(msg) {
		var messageArea = document.getElementById("messageArea");
		messageArea.innerHTML = msg;
	},
	displayHit: function(location) {
		var cell = document.getElementById(location);
		cell.setAttribute("class", "hit");
	},
	displayMiss: function(location) {
		var cell = document.getElementById(location);
		cell.setAttribute("class", "miss");
	}
};

var controller = {
	guesses: 0,

	processGuess: function(guess) {
		var location = parseGuess(guess);

		if (location) {
			this.guesses++;
			var hit = model.fire(location);
			if (hit && model.shipsSunk === model.numShips) {
				view.displayMessage("You sank all my battleships, in " + this.guesses + " guesses");
			}
		}
	}
};

// helper function to parse a guess from the user
function parseGuess(guess) {
	var alphabet = ["A", "B", "C", "D", "E", "F", "G"];

	if (guess === null || guess.length !== 2) {
		alert("Oops, please enter a letter and a number on the board.");
	} else {
		var firstChar = guess.charAt(0);
		var row = alphabet.indexOf(firstChar);
		var column = guess.charAt(1);
		if (isNaN(row) || isNaN(column)) {
			alert("Oops, that isn't on the board.");
		} else if (row < 0 || row >= model.boardSize || column < 0 || column >= model.boardSize) {
				alert("Oops, that's off the board!");
		} else {
			return row + column;
		}
	}
	return null;
}

// event handlers
function handleFireButton() {
	var guessInput = document.getElementById("guessInput");
	var guess = guessInput.value.toUpperCase();
	controller.processGuess(guess);
	guessInput.value = "";
}

function handleKeyPress(e) {
	var fireButton = document.getElementById("fireButton");
	// in IE9 and earlier, the event object doesn't get passed
	// to the event handler correctly, so we use window.event instead.
	e = e || window.event;
	if (e.keyCode === 13) {
		fireButton.click();
		return false;
	}
}

// init - called when the page has completed loading
window.onload = init;

function init() {
	// Fire! button onclick handler
	var fireButton = document.getElementById("fireButton");
	fireButton.onclick = handleFireButton;
	// handle "return" key press
	var guessInput = document.getElementById("guessInput");
	guessInput.onkeypress = handleKeyPress;
	// place the ships on the game board
	model.generateShipLocations();
}