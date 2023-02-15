const EcvCoords = {
  latitude: 44.861,
  longitude: -0.554,
};
const title = document.getElementById("title");

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
  title.innerText = "We could not define your position, sorry";
}

function success(pos) {
  const crd = pos.coords;
  let longitude = parseFloat(crd.longitude).toFixed(2);
  let latitude = parseFloat(crd.latitude).toFixed(2);

  let longECV = parseFloat(EcvCoords.longitude).toFixed(2);
  let latECV = parseFloat(EcvCoords.latitude).toFixed(2);
/* latitude of geoloc too precise, so the condition return false*/
console.log(latitude,latECV);
  if (longitude === longECV && latitude === latECV) {
      title.innerText = "You are in ecv";
  } else {
    title.innerText = "You are not in ecv";
  }
}
/* correction: test if geoloc is working
/* if ("geolocation" in navigator) { */
if (window.navigator.geolocation) {
 window.navigator.geolocation.getCurrentPosition(success, error);
 } 