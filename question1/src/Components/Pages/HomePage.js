/* eslint-disable no-unused-vars */
import { clearPage } from '../../utils/render'
import Navigate from '../Router/Navigate';



const HomePage = () => {
  // const main = document.querySelector('main');
  // main.innerHTML = 'Deal with the content of your HomePage';
  clearPage();
  getHomePage();
};

function getHomePage(){
  const main = document.querySelector('main');
  const div = document.createElement('div');
  const title = document.createElement('h1');
  const divBerlin = document.createElement('div');
  const divBruges = document.createElement('div');
  const divMunich = document.createElement('div');
  const divParis = document.createElement('div');
  const divRome = document.createElement('div');

  title.innerText = "Places to visit!";

  divBerlin.innerText = "Berlin";

  



  div.appendChild(title);
  div.appendChild(divBerlin);
  div.appendChild(divBruges);
  div.appendChild(divMunich);
  div.appendChild(divParis);
  div.appendChild(divRome);

  div.style.textAlign = "center";
  main.appendChild(div);

}

export default HomePage;
