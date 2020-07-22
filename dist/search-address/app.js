"use strict";
const consoleStyle = "background-color: black; font-weight: bold; color:white";
console.log("%c Search Address", consoleStyle);
const button = document.getElementById("button");
const input = document.getElementById("input");
const div = document.getElementById("map");
button.addEventListener("click", searchAddressHandler);
function searchAddressHandler(event) {
    event.preventDefault();
    const value = input.value;
    console.log("%c Fetching input: " + value, consoleStyle);
    const coordinates = { lat: 40.41, lng: -73.99 };
    new ol.Map({
        target: "map",
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM(),
            }),
        ],
        view: new ol.View({
            center: ol.proj.fromLonLat([coordinates.lat, coordinates.lng]),
            zoom: 4,
        }),
    });
    const view = document.getElementsByClassName("ol-viewport")[0];
}
