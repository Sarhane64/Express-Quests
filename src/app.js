require("dotenv").config();

const express = require("express");

const app = express();

const movieControllers = require("./controllers/movieControllers");

app.get("/api/movies", movieControllers.getMovies);
app.get("/api/movies/:id", movieControllers.getMovieById);
app.get("/api/users", movieControllers.getUser);
app.get("/api/users/:id", movieControllers.getUserById);

module.exports = app;
