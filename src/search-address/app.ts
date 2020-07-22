const consoleStyle = "background-color: black; font-weight: bold; color:white";
console.log("%c Search Address", consoleStyle);

declare var ol: any;

const button = document.getElementById("button")! as HTMLButtonElement;
const input = document.getElementById("input")! as HTMLInputElement;
const div = document.getElementById("map")! as HTMLDivElement;

button.addEventListener("click", searchAddressHandler);

function searchAddressHandler(event: Event) {
  event.preventDefault();
  const value = input.value;
  console.log("%c Fetching input: " + value, consoleStyle);
  //Using Dummy variables
  const coordinates = { lat: 40.41, lng: -73.99 };

  //div.innerHTML = "";
  new ol.Map({
    target: "map",
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM(),
      }),
    ],
    view: new ol.View({
      center: ol.proj.fromLonLat([coordinates.lat, coordinates.lng]),
      zoom: 16,
    }),
  });

  const view = document.getElementsByClassName(
    "ol-viewport"
  )[0] as HTMLDivElement;
}
