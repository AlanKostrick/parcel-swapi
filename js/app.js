import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import People from './components/People';
import Person from './components/Person';
import Films from './components/Films';
import '/css/style.css';
import apiActions from './api-actions/api';

buildPage();

function buildPage() {
    header();
    footer();
    navHome();
    navPeople();
    navFilms();
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
        apiActions.getRequest('https://swapi.dev/api/people', people => {
            app.innerHTML = People(people);
        });
        renderPersonInfo();
    });
}

function renderPersonInfo() {
    const app = document.querySelector('#app');
    app.addEventListener('click', () => {
        if (event.target.classList.contains('person-name')) {
            const personUrl = event.target.parentElement.querySelector('#personId')
                .value;
            apiActions.getRequest(personUrl, person => {
                app.innerHTML = Person(person);
            });
        }
    });
}

function navFilms() {
    const filmsLi = document.querySelector('.nav-list__films');
    filmsLi.addEventListener('click', () => {
        const app = document.querySelector('#app');
        apiActions.getRequest('https://swapi.dev/api/films', films => {
            app.innerHTML = Films(films);
        });
    });
}
