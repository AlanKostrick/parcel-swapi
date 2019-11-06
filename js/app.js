import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import People from './components/People';
import '/css/style.css';
import apiActions from './api-actions/api';

buildPage();

function buildPage() {
  header();
  footer();
  navHome();
  navPeople();
}

function header() {
  const headerElement = document.querySelector('.header');
  headerElement.innerHTML = Header();
}

function footer() {
  const footerElement = document.querySelector('.footer');
  footerElement.innerHTML = Footer();
}

function navHome() {
  const homeLi = document.querySelector('.nav-list__home');
  homeLi.addEventListener('click', () => {
    const app = document.querySelector('#app');
    app.innerHTML = Home();
  });
}

function navPeople() {
  const peopleLi = document.querySelector('.nav-list__people');
  peopleLi.addEventListener('click', () => {
    const app = document.querySelector('#app');
    apiActions.getRequest('https://swapi.co/api/people', people => {
      app.innerHTML = People(people);
    });
  });
}
