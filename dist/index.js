function positionTracker() {
  if (navigator.geolocation) {
    const currentPosition = navigator.geolocation.getCurrentPosition(
      (position) => {
        const api = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&localityLanguage=en`;
        getLocationAPI(api);
      },
      (err) => alert(err.message)
    );
  } else {
    alert("Geolocation is not supported in this browser");
  }
}

function getLocationAPI(api) {
  fetch(api)
    .then((res) => res.json())
    .then(
      (data) =>
        (document.querySelector("#userLocation").innerHTML = data.locality)
    );
}

function loadLocation() {
  let city = document.querySelector("input[name=cityInput]").value;
  loadWeatherAPI(city);
}

async function loadWeatherAPI(location) {
  let link = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&daily&appid=1f4819738a1f7aaf2e1456e4866ae602`;

  console.log(link);
  const response = await fetch(link);
  const json = await response.json();
  console.log(json)

  /* json.message.forEach(weatherCard => {
    const columnElement = document.createElement('div');
    columnElement.classList.add('column');
  }) 
  */
}

positionTracker();