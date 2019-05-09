// Code your solution in this file
function findMatching(drivers, string) {
  return drivers.filter(function (name) {return name.toUpperCase() === string.toUpperCase();})
}

function fuzzyMatch(drivers, string) {
  return drivers.filter(function (name) {return name[0].toUpperCase() === string[0].toUpperCase();})
}

function matchName(drivers, string) {
  return drivers.filter(function (driver) {return driver.name === string;})
}
