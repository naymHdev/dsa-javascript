const groceries = [
  "Milk",
  "Eggs",
  "Bread",
  "Apples",
  "Bananas",
  "Chicken Breast",
  "Rice",
  "Tomatoes",
  "Potatoes",
  "Carrots",
];

const serachTermItem = (item) => {
  for (let i = 0; i < groceries.length; i++) {
    if (groceries[i] === item) {
      console.log(`Found: ${item}`);
    }
  }
};

// serachTermItem("Eggs");

function sumOff(n) {
  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += i;
  }
  return total;
}

console.log(sumOff(3));
