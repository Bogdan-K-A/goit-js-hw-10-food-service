import galleryCardsTpl from '../templates/gallery-cards.hbs';
import menu from '../menu.json';
import '../styles.css';

const listOfDishes = document.querySelector('.js-menu');
const cardsMarkup = listMenuMarkup(menu);

listOfDishes.insertAdjacentHTML('beforeend', cardsMarkup);

function listMenuMarkup(menu) {
  return galleryCardsTpl(menu);
}
