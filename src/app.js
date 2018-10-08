import { retrieveMovie } from "./imdb";
import { Movie } from "imdb-api";

//var data = JSON.parse(retrieveMovie);

retrieveMovie("The Toxic Avenger")
  .then(movie => {
    console.log(movie.title);
  })
  .catch(e => console.log(e));
