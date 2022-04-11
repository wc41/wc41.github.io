let flowers = [
  { name: "Spotify", amount: 260 * 1.627 },
  { name: "Bandcamp", amount: 112 * 1.627 },
  { name: "Soundcloud", amount: 48 * 1.627 },
];

// First show all the flowers and create divs for each of them
let container = document.querySelector(".garden");
// create a counter variable that will give us each flowers number in the array
let i = 0;
let b;

function displayFlowers() {
  for (var x = 0; x < 420 * 1.627; x++) {
    var flower = flowers[Math.floor(Math.random() * flowers.length)];
    if (flower.amount < 1) {
      var flower = flowers[Math.floor(Math.random() * flowers.length)];
    }

    let newItem = document.createElement("div");
    let flowerDiv = container.appendChild(newItem);
    // increase the counter variable by one
    i++;
    // adds a shared class to each new div
    newItem.classList.add("flower");
    // adds a specific class to each new div
    newItem.classList.add(flower.name);
    newItem.classList.add(flower.name + [i]);
    flower.amount--;
  }
  // create a for loop that will run based on the flower amount
}
// loops through the flowers and runs the displayFlowers function for each one
displayFlowers();
