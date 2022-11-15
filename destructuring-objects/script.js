//Destructuring Arrays
//To break a complex data structure down into simpler variables

'use strict';

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegeterian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetaa', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, //Open 24 hours
            close: 24,
        },
    },

    order: function(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
    },

    orderDelivery: function({starterIndex = 0, mainIndex = 0, time = `noon`, address = `Riara Rd`}) {
        console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    }
};

restaurant.orderDelivery ({
    time: '22:30',
    address: 'Via del Sole, 21',
    mainIndex: 2,
    starterIndex: 2,
});

restaurant.orderDelivery ({
    mainIndex: 2,
    starterIndex: 2,
});
//Destructuring Objects
//Done with curly braces
const {name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories);

//Renaming the vairables
const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;
console.log(restaurantName, hours, tags);

//Setting default values
const {menu = [], starterMenu: starters = []} = restaurant;
console.log(menu, starters);

//Mutating variables
let a = 111;
let b = 999;
const obj = {a: 23, b: 7, c: 14};

({b, a} = obj);
console.log(a, b);

//Nested objects
const {fri: {open, close}} = openingHours;
console.log(open, close);