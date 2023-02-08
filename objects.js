
// Introduction to Objects

// Basics - construction of an object
let fasterShip = { color: "silver", "Fuel Type": "Turbo Fuel" };

// Accessing Properties wit dot access ()
let spaceship = {
  homePlanet: "Earth",
  color: "silver",
  "Fuel Type": "Turbo Fuel",
  numCrew: 5,
  flightPath: ["Venus", "Mars", "Saturn"],
};

// Write your code below
let crewCount = (spaceship.numCrew = {});
let planetArray = (spaceship.flightPath = {});

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

// #################### METHOD ####################
let retreatMessage =
  "We no longer wish to conquer your planet. It is full of dogs, which we do not care for.";

// Write your code below
let alienShip = {
  retreat() {
    console.log(retreatMessage);
  },
  takeOff() {
    console.log("Spim... Borp... Glix... Blastoff!");
  },
};

alienShip.retreat();
alienShip.takeOff();
/*

// actual ES6 syntax
let variableName2 = {
  objectName2 () {
    // script to run
  }
}

let  alienShip2 = {
  invade2 () {
    console.log('Hello! We have come to dominate your planet. Instead of Earth,
    it shall be called New Xaculon.')
  };
};

alienShip2.invade2(); // Prints 'Hello! We have come to dominate your planet.
Instead of Earth, it shall be called New Xaculon.'

*/

// #################### Nested Objects ####################
/*
In application code, objects are often nested— an object might have another
object as a property which in turn could have a property that’s an array of
even more objects!

In our spaceship object, we want a crew object. This will contain all the crew
members who do important work on the craft. Each of those crew members are
objects themselves. They have properties like name, and degree, and they each
have unique methods based on their roles. We can also nest other objects in the
spaceship such as a telescope or nest details about the spaceship’s computers
inside a parent nanoelectronics object.

let spaceship = {
  passengers: [{name: 'Buck Rogers'},{name: 'Flash Gordon'}],
  telescope: {
    yearBuilt: 2018,
    model: "91031-XLT",
    focalLength: 2032,
  },
  crew: {
    captain: {
      name: "Sandra",
      degree: "Computer Engineering",
      encourageTeam() {
        console.log("We got this!");
      },
      "favorite foods": ["cookies", "cakes", "candy", "spinach"],
    },
  },
  engine: {
    model: "Nimbus2000",
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      monitors: "HD",
    },
    "back-up": {
      battery: "Lithium",
      terabytes: 50,
    },
  },
};

let capFave = spaceship.crew.captain['favorite foods'][0]
let firstPassenger = spaceship.passengers[0]
*/

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
*/

// #################### Looping Through Objects (FOR...IN) ####################
/*
// syntax & exemple of iteration :
for (let variableName in outerObject.innerObject) {
  console.log(`${outerObject.innerObject[variableName].propertyName}: ${outerObject.innerObject[variableName].differentPropertyName}`)
};


let spaceship = {
  crew: {
    captain: {
      name: "Lily",
      degree: "Computer Engineering",
      cheerTeam() {
        console.log("You got this!");
      },
    },
    "chief officer": {
      name: "Dan",
      degree: "Aerospace Engineering",
      agree() {
        console.log("I agree, captain!");
      },
    },
    medic: {
      name: "Clementine",
      degree: "Physics",
      announce() {
        console.log(`Jets on!`);
      },
    },
    translator: {
      name: "Shauna",
      degree: "Conservation Science",
      powerFuel() {
        console.log("The tank is full!");
      },
    },
  },
};

// Write your code below
for (let crewMember in spaceship.crew) {
  console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`);
}
console.log("#################################");
for (let crewMember in spaceship.crew) {
  console.log(
    `${spaceship.crew[crewMember].name}: ${spaceship.crew[crewMember].degree}`
  );
}



*/
