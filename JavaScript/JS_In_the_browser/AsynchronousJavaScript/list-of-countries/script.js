// API URL https://restcountries.com/v3.1/all

const API_URL = "https://restcountries.com/v3.1/all";
document.addEventListener("DOMContentLoaded", () => {
  const countriesList = document.querySelector(".countries-list");

  //   Fetch data from the REST Countries API
  fetch(API_URL)
    .then((response) => response.json())
    .then((data) => {
      // console.log("da", data)
      data.forEach((country) => {
        // console.log("country", country);
        const {
          name,
          capital,
          population,
          languages,
          flags,
          maps,
          borders,
          independent,
          landlocked,
        } = country;
        // console.log("name", name);
        // console.log("capital", capital);
        // console.log("population", population);
        // console.log("languages", languages);bis
        // console.log("flags", flags);
        // console.log("maps", maps);
        // console.log("languages", Object.values(languages).join(", "));

        const countryDiv = document.createElement("div");
        countryDiv.classList.add("country");

        if (!country.languages || !country.borders) return;

        // Populate the inner HTML of the country div with country information
        countryDiv.innerHTML = `
        <div class="country-info">
            <div>
                <h2>${name.common}</h2>
                <p><strong>Capital:</strong> ${capital}</p>
                <p><strong>Population:</strong> ${population}</p>
                <p><strong>Languages:</strong>${Object.values(languages).join(
                  ", "
                )}</p>
                <p>
                <strong>Borders: </strong> ${Object.values(borders).join("- ")}
                </p>
                <p>
                <strong>Independent: </strong> ${independent ? "Yes" : "No"}
                </p>
                <p>
                  <strong>Landlocked: </strong> ${landlocked ? "Yes" : "No"}
                </p>
                <p>
                      <a href=${
                        maps.googleMaps
                      } target="_blank">Take me to Google Maps</a>
                </p>
               <p>
                <a href=${
                  maps.openStreetMaps
                } target="_blank">Take me to Open Street Maps</a>
               </p>
            </div>
            <img src="${flags.png}" alt="${flags.alt ?? name.common}"
        </div>
        `;

        countriesList.appendChild(countryDiv);
      });
    });
});
