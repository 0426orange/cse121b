/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Tzu Hsuan Hsu"
};
let profilePicture = 'images/image.JPG';


/* Populate Profile Object with placesLive objects */
myProfile.placedLived.push(
    {
        pace:'Rexburg, ID',
        length:'1 year'
    }
)




/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;
/* Photo with attributes */
document.getElementById("photo").src = myProfile.photo;
document.getElementById("photo").alt = myProfile.name;


/* Favorite Foods List*/

myProfile.favoriteFoods.forEach((food) => {
  let li = document.createElement("li");
  li.textContent = food;
  document.querySelector('#favorite-foods').appendChild(li);
});

favoriteFoods: [
    'Rice','Fried chichken', 'Boba Milk'
]

/* Hobbies List */
myProfile.favoriteFoods.forEach((hobbies) => {
    let li = document.createElement("li");
    li.textContent = hobbies;
    document.querySelector('#hobbies').appendChild(li);
  });
  
hobbies: ['Video Games','Music',''

]

/* Places Lived DataList */
placelived: []
const placesLivedList = document.getElementById("places-lived");

myProfile.placesLived.forEach((place) => {
  const dt = document.createElement("dt");
  dt.textContent = place.place;

  const dd = document.createElement("dd");
  dd.textContent = place.length;

  placesLivedList.appendChild(dt);
  placesLivedList.appendChild(dd);
});

