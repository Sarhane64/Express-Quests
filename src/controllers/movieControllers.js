const database = require("../../database.js");

const getMovies = (req, res) => {
  database
    .query("select * from movies")
    .then(([movies]) => {
      res.json(movies); // use res.json instead of console.log
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};
const getUser = (req, res) => {
  database
    .query("select * from users")
    .then(([users]) => {
      res.json(users);
      res.status(200);
    })
    .catch((err) => {
      console.error(err);
      res.status(500);
    });
};

const getMovieById = (req, res) => {
  const id = parseInt(req.params.id);

  database
    .query("select * from movies where id = ?", [id])
    .then(([movies]) => {
      if (movies[0] != null) {
        res.json(movies[0]);
      } else {
        res.sendStatus(404);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getUserById = (req, res) => {
  const id = parseInt(req.params.id);
  database.query("select * from users where id = ?", [id]).then(([users]) => {
    if (users[0] != null) {
      res.json(users[0]);
    } else {
      res.sendStatus(404);
    }
  });
};

module.exports = {
  getMovies,
  getMovieById,
  getUser,
  getUserById,
};
