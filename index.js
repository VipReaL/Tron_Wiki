import { containerTimeline } from "./scripts/variables.mjs";
import { getCardInformation, getCardInformationJSON } from "./scripts/api.mjs";
import { createCard } from "./scripts/card.mjs";

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