let express = require('express');
let router = express.Router();

/* CRUD contacts listing. */
module.exports = knex => {
  router.get('/', function(req, res, next) {
    knex
      .select('*')
      .from('contacts')
      .then(result => {
        res.json(result);
      })
      .catch(error => {
        console.log(error);
      });
  });

  router.put("/:id", function(req, res, next) {
    knex("contacts")
      .where({ id: req.params.id })
      .update(req.body.contacts)
      .then(result => {
        res.json(result);
      })
      .catch(error => console.log(error));
  });

  router.post("/", function(req, res, next) {
    knex("contacts")
      .insert(req.body.contacts, ["id"])
      .then(result => {
        res.json(result);
      })
      .catch(error => console.log(error));
  });

  router.delete("/:id", function(req, res, next) {
    knex("contacts")
      .where({ id: req.params.id })
      .del()
      .then(result => {
        res.json(result);
      })
      .catch(error => console.log(error));
  });

  return router;
};