// 4.	Movies
// Write a function that stores information about movies inside an array.
// The movie's object info must be name, director, and date. You can receive several types of input:
// •	"addMovie {movie name}" – add the movie
// •	"{movie name} directedBy {director}" – check if the movie exists and then add the director
// •	"{movie name} onDate {date}" – check if the movie exists and then add the date
// At the end print all the movies that have all the info (if the movie has no director, name, or date, don’t print it) in JSON format.

function movies(arr) {
  let movies = [];
  for (let el of arr) {
    if (el.includes("addMovie")) {
      let title = el.split(" ").slice(1).join(" ");
      let movie = {
        name: title,
      };
      movies.push(movie);
      continue;
    }

    let movieName = "";
    el = el.split(" ");

    if (el.includes("onDate")) {
      movieName = el.slice(0, el.indexOf("onDate")).join(" ");
      el = el.slice(el.indexOf("onDate"));
    } else {
      movieName = el.slice(0, el.indexOf("directedBy")).join(" ");
      el = el.slice(el.indexOf("directedBy"));
    }

    let index = movies.findIndex((movie) => movie.name === movieName);

    if (index >= 0) {
      let command = el.shift();
      if (command === "onDate") {
        movies[index]["date"] = el.join(" ");
      } else {
        movies[index]["director"] = el.join(" ");
      }
    }
  }

  for (const el of movies) {
    if (el.name && el.director && el.date) {
      console.log(JSON.stringify(el));
    }
  }
}

movies([
  "addMovie The Avengers",
  "addMovie Superman",
  "The Avengers directedBy Anthony Russo",
  "The Avengers onDate 30.07.2010",
  "Captain America onDate 30.07.2010",
  "Captain America directedBy Joe Russo",
]);
