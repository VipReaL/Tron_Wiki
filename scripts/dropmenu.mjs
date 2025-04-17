import { itemDropmenu } from "./variables.mjs";

// Закрываем выпадающее меню, если кликнули не внём
function closeDropmenu(event) {
  const target = event.target;

  itemDropmenu.forEach(item => {
    const dropmenu = item;

    if (!dropmenu.parentNode.contains(target)) {
      dropmenu.classList.remove('is__open');
    }
  })
}

// Добавляем - удаляем класс 'is__open' выпадающего меню 
function toggleDropdown(dropmenu) {
  dropmenu.classList.toggle('is__open');  
}

export { closeDropmenu, toggleDropdown }