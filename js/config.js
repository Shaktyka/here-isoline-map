// Нужно подставить значения APP_ID и API_KEY, чтобы карта заработала
// Получить можно на сайте Here

const HERE_APP_ID = ``;
const HERE_API_KEY = ``;

const center = {
   lat: 52.5159,
   lng: 13.3777,
   text: 'Berlin, Germany'
};

const hereCredentials = {
   id: HERE_APP_ID,
   apikey: HERE_API_KEY,
};

export { center, hereCredentials };
