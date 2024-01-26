"use strict";

// Hardcoded plant object
const examplePlant = {
  name: "Sunflower",
  species: "Helianthus annuus",
  waterSchedule: "Every 2 days",
};

// Array to store plant objects
let plantsArray = []; // Initialize as an empty array

// Function to display plants in an unordered list on the webpage
function displayPlants() {
  const plantListDiv = document.getElementById("plantList");
  const ul = document.createElement("ul");

  // Iterate through each plant in the array and create a list item for each
  plantsArray.forEach((plant, index) => {
    const li = document.createElement("li");

    // Add a button to update the plant
    const updateButton = document.createElement("button");
    updateButton.textContent = "Update";
    updateButton.addEventListener("click", () => updatePlant(index));

    // Add a button to remove the plant
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", () => removePlant(index));

    // Set the text content of the list item with plant information and buttons
    li.textContent = `Name: ${plant.name}, Species: ${plant.species}, Water Schedule: ${plant.waterSchedule}`;
    li.appendChild(updateButton);
    li.appendChild(removeButton);

    ul.appendChild(li);
  });

  // Update the plant list area
  plantListDiv.innerHTML = "";
  plantListDiv.appendChild(ul);
}

// Function to add a new plant to the array and update the display
function addPlant(name, species, waterSchedule) {
  const newPlant = { name, species, waterSchedule };

  // Check if all fields are empty
  if (!name && !species && !waterSchedule) {
    alert("Please fill in the form"); // Display an alert for an empty form
    return; // Exit the function if the form is empty
  }

  // Get error message spans
  const nameError = document.getElementById("nameError");
  const speciesError = document.getElementById("speciesError");
  const waterScheduleError = document.getElementById("waterScheduleError");

  // Check for validation errors
  if (!name) {
    nameError.textContent = "Please enter a name";
    document.getElementById("plantName").classList.add("error");
    return;
  }

  if (!species) {
    speciesError.textContent = "Please enter a species";
    document.getElementById("plantSpecies").classList.add("error");
    return;
  }

  if (!waterSchedule) {
    waterScheduleError.textContent = "Please enter a water schedule";
    document.getElementById("waterSchedule").classList.add("error");
    return;
  }

  // Add the new plant object to the array
  plantsArray.push(newPlant);

  // Save the updated plants array to localStorage
  savePlantsToLocalStorage();

  // Clear the input fields
  document.getElementById("plantName").value = "";
  document.getElementById("plantSpecies").value = "";
  document.getElementById("waterSchedule").value = "";

  // Display the updated list of plants
  displayPlants();
}

// Function to update a plant in the array and update the display
function updatePlant(index) {
  // Implement your update logic here, e.g., show a prompt for new values
  const newName = prompt("Enter new name:");
  const newSpecies = prompt("Enter new species:");
  const newWaterSchedule = prompt("Enter new water schedule:");

  // Update the plant at the specified index
  plantsArray[index] = {
    name: newName,
    species: newSpecies,
    waterSchedule: newWaterSchedule,
  };

  // Save the updated plants array to localStorage
  savePlantsToLocalStorage();

  // Display the updated list of plants
  displayPlants();
}

// Function to remove a plant from the array and update the display
function removePlant(index) {
  // Remove the plant at the specified index
  plantsArray.splice(index, 1);

  // Save the updated plants array to localStorage
  savePlantsToLocalStorage();

  // Display the updated list of plants
  displayPlants();
}

// Function to save the updated plants array to localStorage
function savePlantsToLocalStorage() {
  localStorage.setItem("plants", JSON.stringify(plantsArray));
}

// Check localStorage for existing plant data on page load
document.addEventListener("DOMContentLoaded", function () {
  // Retrieve stored plant data from localStorage
  const storedPlants = localStorage.getItem("plants");

  // If there is stored data, parse it and update the plantsArray
  if (storedPlants) {
    plantsArray = JSON.parse(storedPlants);
  }

  // Display the plants on the webpage
  displayPlants();
});

// Manually invoke displayPlants to test displaying the hardcoded plant
displayPlants();

// Form submission event listener
document
  .getElementById("plantForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission
    // Extract form values
    const name = document.getElementById("plantName").value;
    const species = document.getElementById("plantSpecies").value;
    const waterSchedule = document.getElementById("waterSchedule").value;
    // Add the plant using the form values
    addPlant(name, species, waterSchedule);
  });
