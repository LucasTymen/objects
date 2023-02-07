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
