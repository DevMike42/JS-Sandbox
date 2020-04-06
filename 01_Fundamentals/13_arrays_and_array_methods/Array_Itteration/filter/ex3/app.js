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


// FILTER ALL COMPANIES FROM THE 80s

// ======================================================
// Vanilla Method (for Loop)

const retailCompaniesVanilla = [];

for (let i = 0; i < companies.length; i++) {
  if (companies[i].start >= 1980 && companies[i].end <= 1989) {
    retailCompaniesVanilla.push(companies[i]);
  }
};
console.log(retailCompaniesVanilla);

console.log('============================================');
// Prototype Method: filter()
// Parameters: (cb function)
// cb Paramters: (iterator, index, entire array)
// Return Value: A new array containg elements that returned true

const retailCompanies = companies.filter(function (company) {
  if (company.start >= 1980 && company.end <= 1989) {
    return true;
  }
});

console.log(retailCompanies);


console.log('============================================');
// Clean version

const retailCompaniesClean = companies.filter(company => company.start >= 1980 && company.end <= 1989);

console.log(retailCompaniesClean);
