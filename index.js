import { containerTimeline, itemDropmenu } from "./scripts/variables.mjs";
import { getCardInformation, getCardInformationJSON } from "./scripts/api.mjs";
import { createCard } from "./scripts/card.mjs";
import { closeDropmenu, toggleDropdown } from "./scripts/dropmenu.mjs";

// Функция добавления карточек в разметку
function addCard(markupCard) {
  containerTimeline.append(markupCard);
}

// Создание карточек
getCardInformation()
  .then(res => JSON.parse(res))
  .then(data =>
    data.card.forEach(item => {
      const cardData = {
        name: item.title,
        link: item.href,
        timedate: item.time.datetime,
        timetext: item.time.text,
        imagesrc: item.img.src,
        imagealt: item.img.alt,
        caption: item.figcaption,
      }

      addCard(createCard(cardData));
    })
  )
  .catch((error) => {
    console.log(error);
  })

// TODO: Test start
// getCardInformationJSON()
//   .then(data =>
//     data.card.forEach(item => {
//       const cardData = {
//         name: item.title,
//         link: item.href,
//         timedate: item.time.datetime,
//         timetext: item.time.text,
//         imagesrc: item.img.src,
//         imagealt: item.img.alt,
//         caption: item.figcaption,
//       }

//       addCard(createCard(cardData));
//     })
//   )
//   .catch((error) => {
//     console.log(error);
//   })
// TODO: Test end

// Открываем - закрываем выпадающее меню
itemDropmenu.forEach(item => {
  const dropmenu = item;
  const button = item.querySelector('.button');

  button.addEventListener('click', function (event) {
    itemDropmenu.forEach(item => {
      if (!item.contains(event.target)) {
        item.classList.remove('is__open');
      }
    });
    toggleDropdown(dropmenu);
  });

  item.addEventListener('keydown', function (event) {
    if (event.code === 'Escape') {
      toggleDropdown(dropmenu);
    }
  });
});

// Закрываем выпадающее меню, если кликнули не внём
window.addEventListener('click', closeDropmenu);

// Год в footer
function year() {
  let year = document.querySelector("#year");
  year.innerText = new Date().getFullYear();
}

year();