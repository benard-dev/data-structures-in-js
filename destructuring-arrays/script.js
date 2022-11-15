//Destructuring Arrays
//To break a complex data structure down into simpler variables

'use strict';

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegeterian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetaa', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],


    order: function(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
    }
};


const arr = [2, 3, 4];

//Old way
const a = arr[0];
const b = arr[1];
const c = arr[2];

//With destructuring
const [x, y, z] = arr; //Destructuring assignment
console.log(x, y, z);
console.log(arr); //Original array does not get destroyed

const [first, second] = restaurant.categories;
console.log(first, second);

const [newFirst, , third] = restaurant.categories; //Leave a hole if you want to skip values
console.log(first, third); 

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

//Old way of switching values in array

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary)

//Switching variable with destructuring
[main, secondary] = [secondary, main];
console.log(main, secondary)

//Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

//Nested destructuring
const nested = [2, 4, [5, 6]];
const [i, j] = nested;
console.log(i, j);

const [k, l, [m, n]] = nested;
console.log(k, l, m, n);

//Default values
//Set default values for the variable when we are extracting them
const [p=1, q=1, r=1] = [8, 9];
console.log(p, q, r);
