// #################### Pass By Reference ####################
/*
Objects are passed by reference. This means when we pass a variable assigned to
an object into a function as an argument, the computer interprets the parameter
name as pointing to the space in memory holding that object. As a result,
functions which change object properties actually mutate the object permanently
(even when the object is assigned to a const variable).

for exemple :

const spaceship = {
  homePlanet : 'Earth',
  color : 'silver'
};

let paintIt = obj => {
  obj.color = 'glorious gold'
};

paintIt(spaceship);

spaceship.color // Returns 'glorious gold'
*/

// excercise
let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth'
};

// Write your code below
let greenEnergy = spaceship => {
  spaceship['Fuel Type'] = 'avocado oil';
};

let remotelyDisable = obj => {
  obj.disabled = true
}

greenEnergy(spaceship)
remotelyDisable(spaceship)

console.log(spaceship)
