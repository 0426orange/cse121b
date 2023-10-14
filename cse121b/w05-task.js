/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById('temples');
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    templesElement.innerHTML = ''; // Clear existing temple data

    temples.forEach((temple) => {
        // Create an HTML <article> element
        const article = document.createElement('article');

        // Create an HTML <h3> element
        const h3 = document.createElement('h3');
        h3.textContent = temple.templeName;

        // Create an HTML <img> element
        const img = document.createElement('img');
        img.src = temple.imageUrl;
        img.alt = temple.location;

        // Append elements to the <article>
        article.appendChild(h3);
        article.appendChild(img);

        // Append the <article> to templesElement
        templesElement.appendChild(article);
    });
};

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    try {
        const response = await fetch('URL_OF_TEMPLE_DATA_JSON'); // Replace with the correct URL
        const data = await response.json();
        templeList = data;
        displayTemples(templeList);
    } catch (error) {
        console.error('Error fetching temple data: ', error);
    }
};

/* reset Function */
const reset = () => {
    templesElement.innerHTML = ''; // Clear all temple data
};

/* sortBy Function */
const sortBy = (temples) => {
    reset(); // Clear existing temple data

    const filter = document.getElementById('sortBy').value;

    switch (filter) {
        case 'utah':
            displayTemples(temples.filter((temple) => temple.location.includes('Utah')));
            break;
        case 'nonutah':
            displayTemples(temples.filter((temple) => !temple.location.includes('Utah')));
            break;
        case 'older':
            displayTemples(temples.filter((temple) => new Date(temple.dedicated) < new Date(1950, 0, 1)));
            break;
        case 'all':
            displayTemples(temples);
            break;
        default:
            console.log('Invalid filter option');
    }
};

getTemples();

/* Event Listener */
document.getElementById('sortBy').addEventListener('change', () => {
    sortBy(templeList);
});
