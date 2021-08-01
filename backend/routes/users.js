const Router = require("express").Router();
let User = require("../models/users.model");

Router.route("/").get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("error" + err));
});

Router.route("/add").post((req, res) => {
  const username = req.body.username;
  const newUser = new User({ username });

  newUser
    .save()
    .then(() => res.json("User added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

Router.route("/:id").delete((req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(res.json("User Deleted"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = Router;
