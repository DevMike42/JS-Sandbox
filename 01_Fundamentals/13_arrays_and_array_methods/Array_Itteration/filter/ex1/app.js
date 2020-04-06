const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2003 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 21];


// GET ALL AGES THAT ARE 21 AND OVER

// ======================================================
// Vanilla Method (for Loop)

let canDrinkVanilla = [];
for (let i = 0; i < ages.length; i++) {
  if (ages[i] >= 21) {
    canDrinkVanilla.push(ages[i]);
  }
};
console.log(canDrinkVanilla);

console.log('============================================');

// Prototype Method: filter()
// Desc: 
// Parameters: (cb function)
// cb Paramters: (iterator, index, entire array)
// Return Value: A new array containg elements that returned true
const canDrink = ages.filter(function (age) {
  if (age >= 21) {
    return true;
  }
});
console.log(canDrink);

console.log('============================================');
// Clean version

const canDrinkClean = ages.filter(age => age >= 21);

console.log(canDrinkClean);
