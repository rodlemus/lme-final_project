// Initialize and add the map
let map;

async function initMap() {
  // The location of Cinemark La gran vía

  const position = { lat: 13.676746900226256, lng: -89.25471536457081 };
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerView } = await google.maps.importLibrary("marker");

  map = new Map(document.getElementById("map"), {
    zoom: 15,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  const marker = new AdvancedMarkerView({
    map: map,
    position: position,
    title: "Cinéfilos",
  });
}

initMap();
