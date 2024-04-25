const temperatures = [22, 25, 28, 28, 30, 24];

// indexOf()
// If the element is found, it returns the index of the first occurrence of the lement in array
// If the lement is found  its returns its index and if not returns -1
const index = temperatures.indexOf(28);
console.log("index", index);

const indexNotFound = temperatures.indexOf(54);
console.log("indexNotFound", indexNotFound);

// includes()
// The includes method checks wheter the array includes a certain element
// If element is found, it returns true, otherwise it returns false.

const found = temperatures.includes(30);
console.log("found", found);

const notFound = temperatures.includes(300);
console.log("not found", notFound);

// find()
const foundElement = temperatures.find((temp) => temp > 25);
console.log("find", foundElement);

const notFoundElement = temperatures.find((temp) => temp > 99);
console.log("notFoundElement", notFoundElement);

// filter()
// The filter method create a new array with all elements that meet the condition

const filteredTemperatures = temperatures.filter((temp) => temp >= 25);
console.log("filter", filteredTemperatures);

// Sort()
const sortedTemperatures = temperatures.slice().sort((a, b) => a - b);
// Create a copy of the temperatures array using slice() to prevent mutating the original array.
console.log("tem1", temperatures);
console.log("sortedTemperatures", sortedTemperatures);

// If we use only sort without slice we are mutating the original array
const sortedTemperaturesMutateTheOriginalArray = temperatures.sort(
  (a, b) => a - b
);

console.log("original array", temperatures);
console.log(
  "sortedTemperaturesMutateTheOriginalArray",
  sortedTemperaturesMutateTheOriginalArray
);

// Complex Filtering
const filteredComplex = temperatures.filter(
  (temp) => temp > 25 && temp % 2 === 0
);
console.log("filteredComplex", filteredComplex);

// map()
// const temperatures = [22, 25, 28, 30, 24];

const multipliedTemperatures = temperatures.map((temp) => temp * 2);
console.log("multipliedTemperatures", multipliedTemperatures);

// reduce(): The reduce method applies a function against an accumulator and each element in the array
// (from left to right) to reduce it to a single value. It's powerful for performing calculations on arrays.
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("sum", sum);

// Using array of objects
const cities = [
  {
    name: "New York",
    temperature: 22,
  },
  {
    name: "Los Angeles",
    temperature: 25,
  },
  {
    name: "Chicago",
    temperature: 28,
  },
  {
    name: "Miami",
    temperature: 30,
  },
  {
    name: "Seattle",
    temperature: 24,
  },
];

// Using find method to find a city with temperature greater then 25
const foundCity = cities.find((city) => city.temperature > 25);
console.log("foundCity", foundCity);

// Using filter method to filter sities with temperature greater that or equal to 24
const filteredCities = cities.filter((city) => city.temperature >= 24);
console.log("filteredCities", filteredCities);

// Using findIndex method to find the index of a city with temperature 30
const indexCity = cities.findIndex((city) => city.temperature === 30);
console.log("indexCity", indexCity);

// Using some method to check if there is a city with provided temperature
const hasCityWithTemerature20 = cities.some((city) => city.temperature === 20);
console.log("hasCityWithTemerature20", hasCityWithTemerature20);

const hasCityWithTemerature24 = cities.some((city) => city.temperature === 24);
console.log("hasCityWithTemerature24", hasCityWithTemerature24);
