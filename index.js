const returnFirstTwoDrivers = (arryOfDrivers) => {
  return arryOfDrivers.slice(0, 2);
};

const returnLastTwoDrivers = (drivers) => {
  return drivers.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
  return function (fare) {
    return fare * multiplier;
  };
}

const fareDoubler = createFareMultiplier(2);
// // createFareMultiplier(2)(10)
// fareDoubler(10);

const potato = [];
// createFareMultiplier(3)(12)

function selectDifferentDrivers(arryOfDrivers, selectDriversFunction) {
  return selectDriversFunction(arryOfDrivers);
}
