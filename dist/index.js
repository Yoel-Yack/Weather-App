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