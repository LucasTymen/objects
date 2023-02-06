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
let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth',
  color: 'silver',
  'Secret Mission' : 'Discover life outside of Earth.'
};

// Write your code below
