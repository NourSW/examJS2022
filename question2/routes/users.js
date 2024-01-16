/* eslint-disable consistent-return */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
const express = require('express');
const { readAllUSERS, addUser, addFavoris } = require('../models/users');
const { getWithTitle } = require('../models/places');

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
  res.json({ users: [{ name: 'e-baron' }] });
});

router.get('/read', (req, res) => {
  const allPlaces = readAllUSERS();
  return res.json(allPlaces);
});

// Create a pizza to be added to the PLACES.
router.post('/', (req, res) => {
  const name = req?.body?.name?.length !== 0 ? req.body.name : undefined;
  const email = req?.body?.email?.length !== 0 ? req.body.email : undefined;

  if (!name || !email) return res.sendStatus(400); // error code '400 Bad request'

  const idPlace = addUser(name, email, []);
  if (idPlace === false) return res.sendStatus(400);
  return res.json(idPlace);
});

router.post('/addFav', (req, res) => {
  const name = req?.body?.name?.length !== 0 ? req.body.name : undefined;
  const place = req?.body?.place?.length !== 0 ? req.body.place : undefined;
  if (!name) return res.sendStatus(400); // error code '400 Bad request'

  const placee = getWithTitle(place);
  addFavoris(name, placee);
});

module.exports = router;
