function deviceCurrentPosition() {
  const currentPosition = navigator.geolocation.getCurrentPosition(
    (position) => {
      const currentLocation = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&localityLanguage=en`;
      let data = currentLocationWeather(currentLocation);
      // data logs as a promise
      console.log(data)
      return {
        latitude: data.latitude,
        longitude: data.longitude,
        city: data.city,
        locality: data.locality,
        country: data.countryName
      };
    }
  );
}

async function currentLocationWeather(currentLocation) {
  const response = await fetch(currentLocation);
  const json = await response.json();
  console.log(json)
  document.querySelector("#userLocation").innerHTML = json.locality;
  return {

  };
}

function Location() {
  let city = document.querySelector("input[name=cityInput]").value;
  loadWeatherAPI(city);
}

async function loadWeatherAPI(location) {
  let link = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&daily&appid=1f4819738a1f7aaf2e1456e4866ae602`;


  const response = await fetch(link);
  const json = await response.json();

  // json logs as an object
  console.log(json);

  /* json.message.forEach(weatherCard => {
    const columnElement = document.createElement('div');
    columnElement.classList.add('column');
  }) 
  */
}


let data = deviceCurrentPosition();

