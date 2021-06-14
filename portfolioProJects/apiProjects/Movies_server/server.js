// * BACK-END API

const express = require("express");
const app = express();

const $fetch = require("node-fetch");

app.use(express.static("public"));

// * require the keys from config.js as an object
const keys = require("./config/keys");

// * render index.ejs on GET
app.get("/", (req, res) => {
  res.render("index.ejs");
});

const baseUrl = `https://api.themoviedb.org/3`;

// * when user clicks the submit button is sens a GET to /search
app.get("/search", (req, res) => {
  // * make an endpoint out of baseurl and the keys
  let endpoint = `${baseUrl}/movie/now_playing?api_key=${keys.tmdb_key}`;
  // * node fetch the endpoint
  $fetch(endpoint)
    .then((response) => {
      if (!response.ok) {
        // TODO: toggle the bang to simulate a fetch error
        throw Error(response.statusText);
      }
      // * parse the json
      return response.json();
    })
    // * render the results page with the data.results
    .then((data) => res.render("results.ejs", { data: data.results }))
    .catch((error) => console.error("Error from network: ", error));
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
