export default function (store) {
var mymap = L.map('mapid').setView(store.location, 13);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1IjoidmxhZHNlbWVuaWsiLCJhIjoiY2pydXJ4dWUyMmNsZjQ4azVoOG1qOXpjcyJ9.xGaRS5LWTTTV6IrQbUogFA'
    }).addTo(mymap);
    var marker = L.marker(store.location).addTo(mymap);
}