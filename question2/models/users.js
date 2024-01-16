/* eslint-disable no-trailing-spaces */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
const { v4: uuidv4 } = require('uuid');
const path = require('node:path');
const { serialize, parse } = require('../utils/json');

const jsonDbPath = path.join(__dirname, '/../data/users.json');

const USERS = [
  {
    id: uuidv4(),
    name: 'nour',
    email: 'nounou.fr@louk',
    places: [],
  },
  {
    id: uuidv4(),
    name: 'hamza',
    email: 'ham@ourlook.ve',
    places: [],
  },
];

function readAllUSERS() {
  const users = parse(jsonDbPath, USERS);
  return (users);
}

function addUser(name, email, places) {
  const users = parse(jsonDbPath, USERS);
  
  const newUser = {
    id: uuidv4(),
    name,
    email,
    places,
  };
  if (users.find((user) => user.email === email)) return false;
  users.push(newUser);
  
  serialize(jsonDbPath, users);
  
  return newUser.id;
}

function addFavoris(name, place) {
  const users = parse(jsonDbPath, USERS);
  const user = users.find((u) => u.name === name);
  user.places.push(place);
      
  serialize(jsonDbPath, users);
}

module.exports = {
  addUser,
  readAllUSERS, 
  addFavoris,
};
