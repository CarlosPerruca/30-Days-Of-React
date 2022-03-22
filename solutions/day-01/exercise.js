//*EXERCISE LEVEL 1

const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

//Declare an empty array;
let emptyArr = [];

//Declare an array with more than 5 number of elements
console.log(countries);
console.log(webTechs);

//Find the length of your array
console.log(`the length of Countries it is ${countries.length}`);
console.log(webTechs.length);

// Get the first item, the middle item and the last item of the array
let firstCountry = countries[0];
let middleCountry = Math.round(countries.length / 2);
let lastCountry = countries.length - 1;

console.log(
  firstCountry,
  ", ",
  countries[middleCountry],
  ", ",
  countries[lastCountry]
);

let firstTech = webTechs[0];
let middleTech = Math.round(webTechs.length / 2);
let lastTech = webTechs.length - 1;

console.log(firstTech);
console.log(webTechs[middleTech]);
console.log(webTechs[lastTech]);

//Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
let mixedDataTypes = countries.concat(webTechs);
console.log(mixedDataTypes);

//Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

//Print the array using console.log()
console.log(itCompanies);

//Print the number of companies in the array
console.log(itCompanies.length);

//Print the first company, middle and last company
let firstCompany = itCompanies[0];
let middleCompany = Math.round(itCompanies.length / 2);
let lastCompany = itCompanies.length - 1;

console.log(firstCompany);
console.log(itCompanies[middleCompany]);
console.log(itCompanies[lastCompany]);

//Print out each company
itCompanies.forEach((company) => {
  console.log(company);
});

//Change each company name to uppercase one by one and print them out
itCompanies.forEach((company) => {
  console.log(company.toUpperCase());
});

//Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(
  `${itCompanies[0]}, ${itCompanies[1]}, ${itCompanies[2]}, ${itCompanies[3]}, ${itCompanies[4]}, ${itCompanies[5]} and ${itCompanies[6]} are big IT companies`
);

//Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found

function checkCompany(item) {
  return itCompanies.forEach((company) => {
    if (company === item) {
      console.log(`We found the company ${company} in the array!`);
    } else {
      console.log("Company is not found");
    }
  });
}
checkCompany();

//*EXERCISE LEVEL 2
