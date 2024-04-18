let person1 = {
  name: "Nikola",
  age: 31,
};
console.log("person1", person1);

let person2 = person1;
console.log("person2", person2);

person2.age = 21;

console.log("person1", person1);
