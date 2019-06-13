console.log('Hello')

if ("geolocation" in navigator) {
  const button = document.querySelector('#find-me');
  const display = document.querySelector('#coords-Display')

  button.addEventListener('click', findCoords);

  function findCoords() {
    console.log("PLEASE")
    navigator.geolocation.getCurrentPosition(yay, boo);


    function yay(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      display.innerHTML = "Latitude: " + latitude + ' '+ " Longitude: " + longitude;
    }

    function boo() {
      display.innerHTML = "Your GPS location could not be found..."
    }
  }



}

 else {

 }
