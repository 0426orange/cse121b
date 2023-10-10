/* LESSON 3 - Programming Tasks */

/* Profile Object */
let myProfile = {
  name: "Tzu Hsuan Hsu",
  favoriteFoods: ['Rice', 'Fried Chicken', 'Boba Milk'],
  hobbies: ['Video Games', 'Music'],
  placesLived: [
      {
          place: 'Rexburg, ID',
          length: '1 year'
      }
  ]
};

/* Photo */
let profilePicture = 'images/image.JPG';

/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
document.getElementById("photo").src = profilePicture;
document.getElementById("photo").alt = myProfile.name;

/* Favorite Foods List */
myProfile.favoriteFoods.forEach((food) => {
  let li = document.createElement("li");
  li.textContent = food;
  document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach((hobby) => {
  let li = document.createElement("li");
  li.textContent = hobby;
  document.querySelector('#hobbies').appendChild(li);
});

/* Places Lived Data List */
const placesLivedList = document.getElementById("places-lived");

myProfile.placesLived.forEach((place) => {
  const dt = document.createElement("dt");
  dt.textContent = place.place;

  const dd = document.createElement("dd");
  dd.textContent = place.length;

  placesLivedList.appendChild(dt);
  placesLivedList.appendChild(dd);
});
