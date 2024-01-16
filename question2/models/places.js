/* eslint-disable no-shadow */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
const { v4: uuidv4 } = require('uuid');
const path = require('node:path');
const { serialize, parse } = require('../utils/json');

const jsonDbPath = path.join(__dirname, '/../data/places.json');

const PLACES = [
  {
    id: uuidv4(),
    title: 'Paris',
    description: 'Ville de merde',
  },
  {
    id: uuidv4(),
    title: 'Tunisie',
    description: 'Le Bled :)',
  },
];

/* Read all the places from the PLACES
   GET /places?order=title : ascending order by title
   GET /places?order=-title : descending order by title
*/
function readAllPLaces(orderByTitle) {
  let orderedPLACES;
  const places = parse(jsonDbPath, PLACES);
  if (orderByTitle) orderedPLACES = [...places].sort((a, b) => a.title.localeCompare(b.title));
  if (orderByTitle === '-title') orderedPLACES = orderedPLACES.reverse();

  return (orderByTitle ?? places);
}

function getWithTitle(title) {
  const places = parse(jsonDbPath, PLACES);
  const place = places.find((p) => p.title === title);

  return place;
}

// Create a pizza to be added to the PLACES.
function addPlace(title, description) {
  const places = parse(jsonDbPath, PLACES);

  const newPlace = {
    id: uuidv4(),
    title,
    description,
  };

  places.push(newPlace);

  serialize(jsonDbPath, places);

  return newPlace.id;
}

module.exports = {
  readAllPLaces,
  addPlace,
  getWithTitle,
};
