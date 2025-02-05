// Write a function that adds an ageGroup property to each person:

// "Child" if age is below 13
// "Teen" if age is between 13 and 19
// "Adult" if age is 20 or above

const people = [
  { name: "John", age: 10 },
  { name: "Alice", age: 17 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 14 },
];

for (let i = 0; i<people.length; i++){
    if (people[i].age < 13){
        people[i].ageGroup = 'Child'
    }
    else if (people[i].age >= 13 && people[i].age <= 19){
        people[i].ageGroup = 'Teen'
    }
    else{
        people[i].ageGroup = 'Adult'
    }
}
console.log(people);