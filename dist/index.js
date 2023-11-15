const http = new XMLHttpRequest()
let userLocation = document.querySelector("#userLocation");

document.querySelector("#share").addEventListener("click", () => {myLocation})

function myLocation()
{
    if (navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition((position) => {
            const locationAPI = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&localityLanguage=en`;
            getAPI(locationAPI)
            console.log(location.locality)

    },
    (err) => {
        alert(err.message)
    })
    }   
    else
    {
        alert("Geolocation is not supported on this browser")
    }
}

function getAPI(locationAPI)
{
    http.open("GET", locationAPI)
    http.send()
    http.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            const results = JSON.parse(this.responseText)
            console.log(results);
            userLocation.innerHTML = results.locality;
            currentUsersLocation = results.locality;
        }
    }
}