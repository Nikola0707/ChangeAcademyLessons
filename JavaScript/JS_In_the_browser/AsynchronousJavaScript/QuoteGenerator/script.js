const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote");
const refetchQuotes = document.getElementById("refetch-quotes");
const loader = document.getElementById("loader");

// Array to store the quotes we fetch from API
let apiQuotes = [];

function showLoadingSpinner() {
  loader.hidden = false; //Display the loading spinner
  quoteContainer.hidden = true; // Hide the quote container
}

function removeLoadingSpinner() {
  if (!loader.hidden) {
    quoteContainer.hidden = false; // Display the quote container
    loader.hidden = true; // Hide the loading spinner
  }
}

// Function to fetch quotes from the API asynchronously
async function qetQuotes() {
  showLoadingSpinner(); //Display the loading spinner while fetching quotes
  const apiUrl = "https://jacintodesign.github.io/quotes-api/data/quotes.json";

  try {
    const response = await fetch(apiUrl); //Fetch data from API

    if (!response.ok) {
      throw new Error("Failed to fetch quotes"); // Throw an erro if fetching fails
    }

    apiQuotes = await response.json(); // Parse JSON response into apiQuotes array
    newQuote(); // Display a new quote once quotes are fetched
  } catch (error) {
    console.error("Faild to fetch quotes:", error.message);
    // Display an error message to the user, iffetching quotes fails
    quoteText.textContent = "Failed to fetch quotes. Plese try again later.";
    authorText.textContent = "";
  } finally {
    removeLoadingSpinner(); // Hide loading spinner after fetch operation completes
  }
}

// Function to display a new random quote
function newQuote() {
  showLoadingSpinner(); // Display loading spinner while generating new quote
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

  // Display 'Unknown' if author is missing
  authorText.textContent = quote.author ? quote.author : "Unknown";

  // Adjust styling based on quote length
  if (quote.text.length > 120) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }
  //  Set quote text and hide loading spinner
  quoteText.textContent = quote.text; // Display quote text
  removeLoadingSpinner(); // Hide loading spinner after displaying quote
}

// Fetch qoutes from the API when the page loads
qetQuotes();

// Event listener for thenew quote button
newQuoteBtn.addEventListener("click", newQuote);

// Event lister for the refetch button
refetchQuotes.addEventListener("click", qetQuotes);
