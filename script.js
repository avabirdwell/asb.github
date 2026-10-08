
<!--For Explore Page--> 
 <!-- Leaflet JavaScript -->
    <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>

    <script>

        // Create the map
        const map = L.map('map').setView([20, 0], 2);

        // Add the map background
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; OpenStreetMap contributors'
        }).addTo(map);


        // Australia
        L.marker([-27.5, 153.0]).addTo(map)
            .bindPopup(`
                <h3>Australia</h3>
                <p>Study abroad, fieldwork, and marine adventures.</p>
                <a href="australia.html">Explore Australia →</a>
            `);


        // Maldives
        L.marker([3.2, 73.2]).addTo(map)
            .bindPopup(`
                <h3>Maldives</h3>
                <p>Whale shark research aboard a research vessel.</p>
                <a href="maldives.html">Explore the Maldives →</a>
            `);


        // Puerto Rico
        L.marker([18.2, -66.5]).addTo(map)
            .bindPopup(`
                <h3>Puerto Rico</h3>
                <p>Travel, salsa, and exploring Puerto Rican culture.</p>
                <a href="puerto-rico.html">Explore Puerto Rico →</a>
            `);


        // Maine
        L.marker([44.3, -69.8]).addTo(map)
            .bindPopup(`
                <h3>Maine</h3>
                <p>Marine conservation, Hurricane Island, and AmeriCorps.</p>
                <a href="maine.html">Explore Maine →</a>
            `);

    </script>
