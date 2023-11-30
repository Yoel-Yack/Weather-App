async function deviceCurrentPositionWeather() {
  const currentPosition = navigator.geolocation.getCurrentPosition(
    async (position) => {
      let link = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&daily&appid=1f4819738a1f7aaf2e1456e4866ae602`;
      const response = await fetch(link);
      const json = await response.json();
      console.log(json);
      document.querySelector("#userLocation").innerHTML = json.name;
    }
  );
}

// gets the weather for the current users location and puts relevant info on left half of page
deviceCurrentPositionWeather()

// TBD will take location typed into the box and get the weather and display in right half of page

// searchWeather()