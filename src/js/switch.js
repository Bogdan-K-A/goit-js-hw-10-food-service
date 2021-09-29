import { DARK, LIGHT } from '../js/theme';

const refs = {
  switchBtn: document.querySelector('#theme-switch-toggle'),
  body: document.body,
};

refs.switchBtn.addEventListener('change', switchPosition);

/* ------------------------ Функции переключения темы ----------------------- */
function switchPosition(e) {
  e.target.checked
    ? changeThemeColor(DARK, LIGHT)
    : changeThemeColor(LIGHT, DARK);
}

function changeThemeColor(addColor, removeColor) {
  refs.body.classList.remove(removeColor);
  refs.body.classList.add(addColor);
  addThemeColorInLocalStorage(addColor);
}

function addThemeColorInLocalStorage(color) {
  localStorage.setItem('theme', color);
}

/* ----------------- Сохраняем тему при обновлении страницы ----------------- */
let saveSwitchPosition = localStorage.getItem('theme');

if (!saveSwitchPosition) {
  saveSwitchPosition = LIGHT;
  localStorage.setItem('theme', saveSwitchPosition);
}

refs.body.classList.add(saveSwitchPosition);
refs.switchBtn.checked = saveSwitchPosition === DARK;
