import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import '/css/style.css';

buildPage();

function buildPage() {
  header();
  footer();
  home();
}

function header() {
  const headerElement = document.querySelector('.header');
  headerElement.innerHTML = Header();
}

function footer() {
  const footerElement = document.querySelector('.footer');
  footerElement.innerHTML = Footer();
}

function home() {
  const homeLi = document.querySelector('.nav-list__home');
  homeLi.addEventListener('click', () => {
    const app = document.querySelector('#app');
    app.innerHTML = Home();
  });
}
