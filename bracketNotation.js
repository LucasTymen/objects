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

console.log(isActive);
