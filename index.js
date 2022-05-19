const returnFirstTwoDrivers = (arryOfDrivers) => {
  return arryOfDrivers.slice(0, 2);
};

const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// create a function call createFareMultiplier
// define parameter called multiplier
// return a function
// the returned function define parameter called fare
// the returned function is going to multiply fare by multiplier

function createFareMultiplier(multiplier = 1) {
  return (fare) => {
    return fare * multiplier;
  };
}

// fareDoubler() — Declare a variable with const and assign a function returned by createFareMultiplier() to it. Invoke createFareMultiplier() in such a way that the new fareDoubler() function accepts a fare as its lone argument and doubles it.

// defined variable with const called fareDoubler
// assign to the function returned from createFareMultiplier (invoke)
// pass 2 as the argument to createFareMultiplier

const fareDoubler = createFareMultiplier(2);

// fareTripler() — Declare a variable with const and assign a function returned by createFareMultiplier() to it. Invoke createFareMultiplier() in such a way that the new fareTripler() function accepts a fare as its lone argument and triples it.
const fareTripler = createFareMultiplier(3);

// selectDifferentDrivers() — This function takes two arguments, an array of drivers and either the returnFirstTwoDrivers() or returnLastTwoDrivers() function. Based on these two arguments, selectDifferentDrivers() will return either the first two drivers or the last two drivers.

// defined function called selectDifferentDrivers
// define 2 parameters : 1st called drivers, 2nd called returnTwoDriversFunction
// return returnTwoDriversFunction (2nd parameter) make sure its invoked
// pass the drivers parameter in as the first argument to returnTwoDriversFunction

function selectDifferentDrivers(drivers, returnTwoDriversFunction) {
  return returnTwoDriversFunction(drivers);
}
