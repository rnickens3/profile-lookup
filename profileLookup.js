/*
Completed December 25th, 2025
Function iterates through array and returns the object's properties
Concepts Learned: Iteration, Loops, Accessing Arrays, Bracket Notation
*/

let contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, property) {
  for (let i = 0; i < contacts.length; i++) { 
  if (contacts[i].firstName === name) { //This will iterate through all contacts and check if the contact exists. If not, returns "No such contact"
    if (property in contacts[i]) { //This checks if the property is in the found contact. If not, returns "No such property"
      return contacts[i][property]; //Returns the contact property
    } else {
      return "No such property";
    }
  }
}
  return "No such contact";
}
