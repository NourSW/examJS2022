const express = require('express');
const { readAllPLaces, addPlace } = require('../models/places');

const router = express.Router();

/* Read all the places from the PLACES
   GET /places?order=title : ascending order by title
   GET /places?order=-title : descending order by title
*/
router.get('/', (req, res) => {
  const orderByTitle = req?.query?.order?.includes('title')
    ? req.query.order
    : undefined;
  const allPlaces = readAllPLaces(orderByTitle);

  return res.json(allPlaces);
});

// Create a pizza to be added to the PLACES.
router.post('/', (req, res) => {
  const title = req?.body?.title?.length !== 0 ? req.body.title : undefined;
  const description = req?.body?.description?.length !== 0 ? req.body.description : undefined;

  if (!title || !description) return res.sendStatus(400); // error code '400 Bad request'

  const idPlace = addPlace(title, description);

  return res.json(idPlace);
});

module.exports = router;
