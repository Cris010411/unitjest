// import the function sum from the app.js file
//const { sum } = require('./app.js');

// start your first test
//test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    //let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    //expect(total).toBe(23);
//});

const { fromDollarToYen } = require('./app.js');

// start your first test
test('convertir dolar a yen', () => {
    //inside the test we call our sum function with 2 numbers
    let total = fromDollarToYen(2);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(213.12);
});
const { fromDollarToYen } = require('./app.js');

// start your first test
test('convertir Euro a dolar', () => {
    //inside the test we call our sum function with 2 numbers
    let total = fromEuroToDollar(2);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(257.16);
});
const { fromEuroToDollar } = require('./app.js');

// start your first test
test('convertir yen a pound', () => {
    //inside the test we call our sum function with 2 numbers
    let total = fromYanToPound(2);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(0.0067);
});