const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";
const search = document.querySelector(".search");
const suggest = document.querySelector(".suggestions");

var cities = fetch(endpoint)
  .then((val) => {
    if (!val.ok) {
      return "An error occured";
    }
    return val.json();
  })
  .then((value) => {
    cities = value;
    console.log("Data fetched");
  });

/**
 * @param {*} place - The word to look for.
 * @param {Array} data - The database in the form of a Array.
 */
const filter_array = function (place, data) {
  return data.filter((value) => {
    const regex = new RegExp(place, "gi");
    return value.city.match(regex) || value.state.match(regex);
  });
};

const addcomma = function (digit) {
  for (let place in digit) {
    if (place % 3 == 0) {
    }
  }
  return digit.toLocaleString();
};


const displaysuggestion = function () {
  let city = new RegExp(this.value, "gi");
  suggest.innerHTML = "";
  const matches = filter_array(city, cities);
  let html = matches
    .map((data) => {
      let pattern = new RegExp(this.value, "gi");
      let city = data.city.replace(
        pattern,
        `<span class="hl">${this.value}</span>`
      );
      let state = data.state.replace(
        pattern,
        `<span class="hl">${this.value}</span>`
      );
      let population = parseInt(data.population).toLocaleString();
      return `<li>
                <p>${city}, ${state}</p>
                <p class="population">${population}</p>
            </li>`;
    })
    .join("");
  suggest.innerHTML = html;
};

search.addEventListener("change", displaysuggestion);
search.addEventListener("keyup", displaysuggestion);
