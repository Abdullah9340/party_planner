const Router = require("express").Router();
const Party = require("../models/party.model");

Router.route("/").get((req, res) => {
  Party.find()
    .then((party) => res.json(party))
    .catch((err) => res.status(400).json("Error " + err));
});

Router.route("/add").post((req, res) => {
  const name = req.body.name;
  const code = req.body.code;
  const array = {};
  const newParty = new Party({ name, code, array });

  newParty
    .save()
    .then(() => res.json("Party added!"))
    .catch((err) => res.status(400).json("Error: " + err.message));
});

Router.route("/find/:id").get((req, res) => {
  const code = req.params.id;
  Party.findOne({ code: code })
    .then((party) => {
      res.json(party);
    })
    .catch((err) => {
      res.status(400).json("Error" + err);
    });
});

Router.route("/:id/addItem").post((req, res) => {
  const code = req.params.id;
  Party.findOne({ code: code })
    .then((party) => {
      if (party.items === null) {
        party.items = [req.body.item];
      } else {
        party.items.push(req.body.item);
      }
      party
        .save()
        .then(res.json(party))
        .catch((err) => res.status(400).json("Error" + err));
    })
    .catch((err) => {
      res.status(400).json("Error" + err);
    });
});

Router.route("/delete").delete((req, res) => {
  const code = req.body.code;
  Party.findOneAndDelete({ code: code })
    .then(res.json("Deleted Party"))
    .catch((err) => res.status(400).json("Error" + err));
});
Router.route("/deleteItem/:index").post((req, res) => {
  const code = req.body.code;
  Party.findOne({ code: code }).then((party) => {
    party.items.splice(req.params.index, 1);

    party
      .save()
      .then(res.json(party))
      .catch((err) => res.status(400).json("error" + err));
  });
});

module.exports = Router;
