// Функция создания карточки
function createCard(cardData) {
  const template = document.querySelector('#template__card').content;
  const templateElement = template.querySelector('.card').cloneNode(true);

  templateElement.href = cardData.link;
  const time = templateElement.querySelector('.time');
  time.dateTime = cardData.timedate;
  time.textContent = cardData.timetext;
  const image = templateElement.querySelector('.image');
  image.src = cardData.imagesrc;
  image.alt = cardData.imagealt;
  const caption = templateElement.querySelector('.caption').textContent = cardData.caption;

  return templateElement;
}

export { createCard }