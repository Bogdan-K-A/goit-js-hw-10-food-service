import { DARK, LIGHT } from '../js/theme';

const refs = {
  switchBtn: document.querySelector('#theme-switch-toggle'),
};

refs.switchBtn.addEventListener('change', switchPosition);

/* ------------------------ Функция переключения темы ----------------------- */
function switchPosition(e) {
  /* ------------------- Фиксируем ключ темы в localStorage ------------------- */
  let switchValue = e.target.checked;
  console.log(switchValue);
  switchValue
    ? localStorage.setItem('theme', DARK)
    : localStorage.setItem('theme', LIGHT);

  /* -------------- Меняем цвет темы при нажатии на переключатель ------------- */
  if (switchValue === true) {
    localStorage.setItem('theme', DARK);
    document.querySelector('body').classList.add(DARK);
    document.querySelector('body').classList.remove(LIGHT);
  } else {
    localStorage.setItem('theme', LIGHT);
    document.querySelector('body').classList.add(LIGHT);
    document.querySelector('body').classList.remove(DARK);
  }
}

/* ----------------- Сохраняем тему при обновлении страницы ----------------- */
let saveSwitchPosition = localStorage.getItem('theme');

if (!saveSwitchPosition) {
  saveSwitchPosition = LIGHT;
  localStorage.setItem('theme', saveSwitchPosition);
}
document.querySelector('body').classList.add(saveSwitchPosition);
refs.switchBtn.checked = saveSwitchPosition === LIGHT ? false : true;
