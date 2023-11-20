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

function loadLoaction() {
  let test = document.getElementsByName("input").value;
  Node.addEvenListener("keyup", function (event) {
    if (event.key === "Enter") {
      loadWeatherAPI(test);
    }
  });
}

function loadWeatherAPI(location) {
  let link =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    location +
    "&units=metric&daily&appid=1f4819738a1f7aaf2e1456e4866ae602";

  fetch(link)
    .then((res) => res.json())
    .then((weather) => {
      //Where you generate the data
    });
}

loadWeatherAPI(Stockholm);
