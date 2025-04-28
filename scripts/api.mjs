function getResponseData(res) {
  if (!res.ok) {
    return Promise.reject(`Ошибка: ${res.status}`);
  }
  return res.json();
}

// Загрузка информации о карточках с сервера
const getCardInformation = (URL, OPTIONS) => {
  return fetch(URL, OPTIONS)
    .then(res => getResponseData(res))
}

// Загрузка информации о карточках для теста с server/tron_api.json
const getCardInformationJSON = () => {
  return fetch(`./server/tron_api.json`)
    .then(res => getResponseData(res))
}

export { getCardInformation, getCardInformationJSON }