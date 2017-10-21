// Creating person object
var person = new Object();

// Setting properties to person object
person.firstName = "John";        // Setting first name property
person.lastName = "Doe";         // Setting last name property
person.email = "john@doe.com";   // Setting email property
person.phone = "9878787878";     // Setting phone property

console.log(person);
console.log(person.firstName);
console.log(person.lastName);
console.log(person.email);
console.log(person.phone);

// Take id of each element and set innertext to it
document.getElementById("first-name").innerText = person.firstName;
document.getElementById("last-name").innerText = person.lastName;
document.getElementById("email").innerText = person.email;
document.getElementById("phone").innerText = person.phone;