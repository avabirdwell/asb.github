
/* =====================================
   1. YOUR VISITED LOCATIONS
   Add new destinations to this list.
   ===================================== */

const adventures = [
    {
        name: "Gold Coast, Australia",
        latitude: -28.0167,
        longitude: 153.4000,
        description: "Study abroad and coastal adventures.",
        page: "australia.html"
    },
    {
        name: "Maldives",
        latitude: 3.2028,
        longitude: 73.2207,
        description: "Whale shark research aboard a research vessel.",
        page: "maldives.html"
    },
    {
        name: "San Juan, Puerto Rico",
        latitude: 18.4655,
        longitude: -66.1057,
        description: "Travel, salsa, and exploring Puerto Rican culture.",
        page: "puerto-rico.html"
    },
    {
        name: "Maine, USA",
        latitude: 44.3106,
        longitude: -69.7795,
        description: "Coastal conservation and island adventures.",
        page: "maine.html"
    }
];


/* =====================================
   2. CREATE THE MAP
   ===================================== */

// Start with a view of the world.
const map = L.map("map").setView([20, 0], 2);

// Add the world map background.
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


/* =====================================
   3. ADD A PIN FOR EACH DESTINATION
   ===================================== */

adventures.forEach(function(place) {

    // Create a marker at the destination's coordinates.
    const marker = L.marker([
        place.latitude,
        place.longitude
    ]).addTo(map);

    // Add a popup with the destination and its page link.
    marker.bindPopup(`
        <h3>${place.name}</h3>
        <p>${place.description}</p>
        <a href="${place.page}">Explore this adventure &rarr;</a>
    `);

});
