/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Tzu Hsuan Hsu';
let currentYear = 2023;
let profilePicture = 'images/image.JPG'; // Provide the correct image path

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.getElementById('year'); // Remove the #
const imageElement = document.querySelector('img'); // Use querySelector correctly

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear; // Remove <strong> here
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', profilePicture);

/* Step 5 - Array */
let favoriteFoods = [];
let newFavoriteFood = 'Fried Chicken'; 
favoriteFoods.shift();
favoriteFoods.pop();