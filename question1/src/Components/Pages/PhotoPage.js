/* eslint-disable prefer-const */
/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
import Navigate from '../Router/Navigate';
import { clearPage } from '../../utils/render';
import { getPlaceWithId } from '../../utils/places';


const main = document.querySelector('main');
const div = document.createElement('div');
div.style.textAlign = "center";
const divImage = document.createElement('div');
const divName = document.createElement('div');
const divButton = document.createElement('div');

const PhotoPage = () => {
  clearPage();
  // renderGoBackHomeButton();
  getPhotosPage();
};


// eslint-disable-next-line prefer-const
let numberOfVillage = 3;
function getPhotosPage() {
  
  const place = getPlaceWithId(numberOfVillage);

  divImage.innerHTML = `<img src="${place.image}">`
  divName.innerHTML = `${place.name}`;

  divButton.innerHTML = `
  <button type="submit" id="btnBefore">Pevious</button>
  <button type="submit" id="btnAfter">After</button>`;

  
  div.appendChild(divButton);
  div.appendChild(divImage);
  div.appendChild(divName);
  main.appendChild(div);

  console.log(numberOfVillage);

  const buttonBefore = document.querySelector('#btnBefore');
  const buttonAfter = document.querySelector('#btnAfter');

  if(numberOfVillage === 1){
   buttonBefore.disabled = true; 
  };

  if(numberOfVillage === 5){
    console.log('NOUS Y EST')
    buttonAfter.disabled = true;
  }

  console.log(buttonBefore);
  console.log(buttonAfter);
  
    buttonBefore.addEventListener('click', () => {
      numberOfVillage--;
      getPhotosPage();
    });
  


    buttonAfter.addEventListener('click', () => {
      numberOfVillage++;
      getPhotosPage();
    });
  
  

}















// eslint-disable-next-line no-unused-vars
/* function renderGoBackHomeButton() {
  const main = document.querySelector('main');
  const submit = document.createElement('input');
  submit.value = 'Go back to HomePage';
  submit.className = 'btn btn-secondary mt-3';
  submit.addEventListener('click', () => {
    Navigate('/');
  });

  main.appendChild(submit);
}

*/

export default PhotoPage;
