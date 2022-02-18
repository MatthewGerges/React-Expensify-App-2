//Object Destructuring

// const person = {
//     name: 'Andrew',
//     age: 26,
//     location: {
//         city: 'Philly',
//         temp: 92
//     }
// }

// // const name = person.name;
// // const age = person.age;

// //setting name to default value
// const { name = 'Anonymous', age } = person;

// const {name: firstName = 'Anonymous'} = person;
// console.log(`${firstName} is ${age}.`);

// //type of variable = what we're trying to destructure

// console.log(`${name} is ${age}.`);

// // const {city, temp} = person.location;
// //renaming syntax:
// const {city, temp: temperature} = person.location;


// // if (person.location.city && person.location.temp)
// //cant use temp anymore
// if (city && temperature)
// {
//     // console.log(`It's ${person.location.temp} in ${person.location.city}`);
//     console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// //CHALLENGE!!

// const {name: publisherName = 'Self-Published'} = book.publisher;
// //publisherName = sets default value

// console.log(publisherName);
// //penguin or default value of self-published

//Array Destructuring

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pensylvania', '19147'];
//SQUARE BRACKETS for array 

// const [street, city, state, zip] = address;

//Selective destructuring for x local variables from y variables
const [,city = 'Pens',state = 'New York'] = address;

console.log(`You are in ${address[1]} ${address[2]}`);
console.log(`You are in ${city} ${state}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [itemName, , mediumPrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}`);