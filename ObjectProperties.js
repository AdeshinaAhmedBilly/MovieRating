const car = { make: 'Toyota', model: 'Camry', year: 2021 };

// Function to loop through object properties
function getObjectProperties(obj) {
  let result = [];
  for (let key in obj) {
    result.push(`${key}: ${obj[key]}`);
  }
  return result.join(', ');
}

// Call the function and print the result
const output = getObjectProperties(car);
console.log(output); // 👉 "make: Toyota, model: Camry, year: 2021"
