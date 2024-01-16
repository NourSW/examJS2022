import berlin from '../img/berlin.jpg';
import bruges from '../img/bruges.jpg';
import munich from '../img/munich.jpg';
import paris from '../img/paris.jpg';
import rome from '../img/rome.jpg';

// eslint-disable-next-line no-unused-expressions
const PHOTOS = [
  {
    id: 1,
    name: 'Berlin',
    image: berlin,
  },
  {
    id: 2,
    name: 'Bruges',
    image: bruges,
  },
  {
    id: 3,
    name: 'Munich',
    image: munich,
  },
  {
    id: 4,
    name: 'Paris',
    image: paris,
  },
  {
    id: 5,
    name: 'Rome',
    image: rome,
  },
];


const getPlaceWithId = (id) => PHOTOS.find(photo => photo.id === id);




// eslint-disable-next-line import/prefer-default-export
export{getPlaceWithId};