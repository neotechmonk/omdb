"use strict";

var _imdb = require("./imdb");

var _imdbApi = require("imdb-api");

//var data = JSON.parse(retrieveMovie);

(0, _imdb.retrieveMovie)("The Toxic Avenger").then(function (movie) {
  console.log(movie.title);
}).catch(function (e) {
  return console.log(e);
});
//# sourceMappingURL=app.js.map