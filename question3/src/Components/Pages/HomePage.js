/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
import { clearPage } from '../../utils/render';

const HomePage = () => {
  clearPage();
  renderHomePage();
};

async function renderHomePage() {
  const response = await fetch('https://places-exam-api.azurewebsites.net/places');
  if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);

  const places = await response.json();

  const main = document.querySelector('main');
  const h1 = document.createElement('h1');
  h1.innerText = `TOUT LES PLACES`;
  main.appendChild(h1);

  places.forEach((p) => {
    const div = document.createElement('div');
    div.innerHTML = `<div>${p.name}<div>`;
    div.style.textAlign = 'center';
    main.appendChild(div);
  });
}

async function renderHomePageRecommondedPlace() {
  const response = await fetch('https://places-exam-api.azurewebsites.net/recommended');

  if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);

  const place = await response.json();
  const main = document.querySelector('main');
  const h1 = document.createElement('h1');
  h1.innerText = `Lieu recommendé`;
  main.appendChild(h1);
  const div = document.createElement('div');
  div.innerHTML = `<div> ${place.name} </div>`;
  main.appendChild(div);
}
export default HomePage;
