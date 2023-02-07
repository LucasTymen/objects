// Introduction to Objects

// Basics - construction of an object
let fasterShip = {color: 'silver', 'Fuel Type': 'Turbo Fuel'};

// Accessing Properties wit dot access ()
let spaceship = {
  homePlanet: 'Earth',
  color: 'silver',
  'Fuel Type': 'Turbo Fuel',
  numCrew: 5,
  flightPath: ['Venus', 'Mars', 'Saturn']
};

// Write your code below
let crewCount = spaceship.numCrew = {};
let planetArray = spaceship.flightPath = {}

// #################### Bracket Notation ####################
let spaceshipé = {
  "Fuel Type": "Turbo Fuel",
  "Active Mission": true,
  homePlanet: "Earth",
  numCrew: 5,
};

let propName = "Active Mission";

// Write your code below
let isActive = spaceshipé["Active Mission"];

let returnAnyProp = (objectName, propName) => objectName[propName];
console.log(returnAnyProp(spaceshipé, "homePlanet"));

console.log(isActive)

// #################### Property Assignment ####################
let spaceship3 = {
  "Fuel Type": "Turbo Fuel",
  homePlanet: "Earth",
  color: "silver",
  "Secret Mission": "Discover life outside of Earth.",
};

// Write your code below
console.log("###### inital state ######");
console.log(spaceship3);
console.log("###### modifications ######");
spaceship3.color = "glorious gold";
spaceship3.numEngines = 6;
console.log(spaceship3.color);
console.log(spaceship3);
console.log("###### delete ######");
delete spaceship3["Secret Mission"];
console.log(spaceship3);
