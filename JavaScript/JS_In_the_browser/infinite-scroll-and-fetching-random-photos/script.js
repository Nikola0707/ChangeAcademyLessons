/*
Unsplash API to get random photos. 
// https://unsplash.com/developers
*/

const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

// We initialize some variables to keep track of the loading state and the photos array.
let ready = false;
let imagesLoaded = 0;
let totalImages = 0;
let photosArray = [];

/*
Here, we define the count of photos we want to fetch and the API URL with our API key.
Remember, normally you shouldn't store API keys directly in your code, but for this tutorial, it's fine since it's a free and public API.
*/
const count = 10;
const apiKey = "74m06v3WYKgZobXkXHrYUy8MqE2dxPUr8uX9qeYraew";
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;

/*
We need a function to check if all images have finished loading. 
This function will increment our imagesLoaded counter and hide the loader when all images are loaded.
*/
function imageLoaded() {
  imagesLoaded++;
  if (imagesLoaded === totalImages) {
    ready = true;
    loader.hidden = true;
  }
}

/*
To make our code cleaner, we use a helper function to set attributes on DOM elements dynamically.
This function takes a DOM element and an object of attributes as arguments. 
It iterates over the object properties (attribute names and values) 
and uses the setAttribute method to set each attribute on the element.
*/
function setAttributes(element, attributes) {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}

/*
 displayPhotos function this will create elements for each photo and add them to the DOM.
It also sets up an event listener to track when each image finishes loading.
*/

// Create Elements For Links & Photos, Add to the DOM
function displayPhotos() {
  // Reset the count of images loaded to 0
  imagesLoaded = 0;
  // Set the total number of images to the length of the photosArray
  totalImages = photosArray.length;

  // Loop through each photo object in the photosArray
  photosArray.forEach((photo) => {
    console.log("photo", photo);

    // Create an <a> element to link to the full photo
    const imageLinkElement = document.createElement("a");
    // Set attributes for the <a> element: href (link to full photo) and target (open in new tab)
    setAttributes(imageLinkElement, {
      href: photo.links.html,
      target: "_blank",
    });

    // Create an <img> element for the photo
    const imageElement = document.createElement("img");
    // Set attributes for the apiUrl<img> element: src (photo URL), alt (alternative text), and title (tooltip text)
    setAttributes(imageElement, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description,
    });

    // Create an <h1> element for the photo description
    const headingElement = document.createElement("h1");
    // Set the text content of the <h1> element to the photo's description
    headingElement.innerText = photo.alt_description;

    // Create a <p> element for the photo creator's information
    const paragraphElement = document.createElement("p");
    // Set the text content of the <p> element to the photo creator's name
    paragraphElement.innerText = `Created By: ${photo.user.first_name} ${photo.user.last_name}`;

    // Add an event listener to the <img> element to check when each image has finished loading
    imageElement.addEventListener("load", imageLoaded);

    // Append the <a> element to the imageContainer
    imageContainer.appendChild(imageLinkElement);

    // Append the <h1> element to the imageContainer
    imageContainer.appendChild(headingElement);
    // Append the <p> element to the imageContainer
    imageContainer.appendChild(paragraphElement);
    // Append the <img> element to the <a> element
    imageLinkElement.appendChild(imageElement);
  });
}

/*
async getPhotos function that would be responsible for fetching
 the photos from the Upsplash API and calls displayPhotos to show them on the page.
*/
async function getPhotos() {
  try {
    // Fetch data from the API
    const response = await fetch(apiUrl);

    // Check if the response is OK (status in the range 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Parse the JSON data from the response
    photosArray = await response.json();

    // Call displayPhotos to update the UI with the fetched photos
    displayPhotos();
  } catch (error) {
    // Log the error to the console for debugging
    console.error("Error fetching photos:", error);

    // Display an error message to the user (optional)
    const errorMessage = document.createElement("p");
    errorMessage.textContent =
      "Sorry, something went wrong while fetching photos. Please try again later.";
    errorMessage.style.color = "red";
    errorMessage.style.textAlign = "center";

    imageContainer.appendChild(errorMessage);

    loader.hidden = true;
  }
}

/*
 To load more photos as we scroll, we add an event listener to the window's scroll event.
 When we near the bottom of the page, it fetches more photos.
*/
// Add an event listener to the window object that listens for the 'scroll' event
window.addEventListener("scroll", () => {
  // Check if the user has scrolled close to the bottom of the page and if we are ready to load more content
  if (
    // check if the user has scrolled to within 1000 pixels of the bottom of the document. If this condition is true, and ready is also true, more content is loaded
    window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 &&
    ready
  ) {
    // If the condition is true, set ready to false to prevent multiple triggers
    ready = false;
    // Call the getPhotos function to load more content
    getPhotos();
  }
});

// On Load
getPhotos();
