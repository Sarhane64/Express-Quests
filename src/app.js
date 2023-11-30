require("dotenv").config();

const express = require("express");

const app = express();

app.use(express.json());

const movieControllers = require("./controllers/movieControllers");
const validateMovie = require("./middlewares/validateMovie");

app.get("/api/movies", movieControllers.getMovies);
app.get("/api/movies/:id", movieControllers.getMovieById);
app.get("/api/users", movieControllers.getUser);
app.get("/api/users/:id", movieControllers.getUserById);
app.post("/api/movies", movieControllers.postMovie);
app.post("/api/users", movieControllers.postUser);
app.put("/api/movies/:id", movieControllers.updateMovies);
app.put("/api/users/:id", movieControllers.updateUser);
app.post("/api/movies", validateMovie, movieControllers.postMovie);

module.exports = app;
