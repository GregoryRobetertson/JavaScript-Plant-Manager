"use strict";

// Hardcoded plant object
const examplePlant = {
  name: "Sunflower",
  species: "Helianthus annuus",
  waterSchedule: "Every 2 days",
};

// Array to store plant objects
const plantsArray = [examplePlant];

// Function to display plants in an unordered list on the webpage
function displayPlants() {
  const plantListDiv = document.getElementById("plantList");
  const ul = document.createElement("ul");

  // Iterate through each plant in the array and create a list item for each
  plantsArray.forEach((plant) => {
    const li = document.createElement("li");
    li.textContent = `Name: ${plant.name}, Species: ${plant.species}, Water Schedule: ${plant.waterSchedule}`;
    ul.appendChild(li);
  });

  // Update the plant list area
  plantListDiv.innerHTML = "";
  plantListDiv.appendChild(ul);
}

// Function to add a new plant to the array and update the display
function addPlant(name, species, waterSchedule) {
  const newPlant = { name, species, waterSchedule };

  // Add the new plant object to the array
  plantsArray.push(newPlant);

  // Clear the input fields
  document.getElementById("plantName").value = "";
  document.getElementById("plantSpecies").value = "";
  document.getElementById("waterSchedule").value = "";

  // Display the updated list of plants
  displayPlants();
}

// Manually invoke displayPlants to test displaying the hardcoded plant
displayPlants();
