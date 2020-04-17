console.log('Map Box API Exercises.');

// mapboxgl.accessToken = MAP_KEY;
// var map = new mapboxgl.Map({
//         container: 'map',
//         style: 'mapbox://styles/mapbox/streets-v9',
//         center: [-96.8057, 32.7787],
//         zoom: 16
// });

// geocode("terilli's", mapboxToken).then(function(result) {
//     console.log(result);
//     var map = new mapboxgl.Map({
//         container: 'map',
//         style: 'mapbox://styles/mapbox/streets-v9',
//         center: result,
//         zoom: 15
//     });
//
//     var markerOptions = {
//     color: "teal",
//     draggable: true
// };
// var marker = new mapboxgl.Marker(markerOptions)
//     .setLngLat([-96.770177, 32.823175])
//     .addTo(map);
//
//     var popup = new mapboxgl.Popup()
//     .setHTML("<h1>Terilli's</h1>Terilli's is a family-owned and family-operated restaurant. " +
//         "Our passion for quality recipes and flavors are what set us ahead of the rest. " +
//         "Don't just take our word for it. Let our amazing menu do the talking.")
//     .addTo(map);
//
// marker.setPopup(popup);
//
// });
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    zoom: 8
});
    geocode("4757 W Park Blvd, Plano, TX 75093", mapboxToken).then(function(result) {
            console.log(result);
            map.setCenter(result)


        var markerOptions = {
            color: "teal",
            draggable: true
        };

        var popup = new mapboxgl.Popup({ offset: 25 }).setHTML("<h1>Blue Goose</h1>TEarly 80s…Two successful " +
                        "business-types from the airline industry, Bob and Scott, " +
                        "decided there weren’t any great local spots around Dallas " +
                        "to hang out for busy guys like themselves. All they wanted " +
                        "was a place they could have a nice meal, a well-made drink " +
                        "and be around some cool people at the same time. Being the " +
                        "assertive gentlemen they were, they simply decided to make one. " +
                        "The idea that started Blue Goose Cantina was born and one of building " +
                        "blocks of the Dallas restaurant scene was created."

        );

        new mapboxgl.Marker(markerOptions)
            .setLngLat([-96.78991, 33.02706])
            .setPopup(popup) // sets a popup on this marker
            .addTo(map);

});

geocode("terilli's", mapboxToken).then(function(result) {
    console.log(result);
    map.setCenter(result)


    var markerOptions = {
        color: "teal",
        draggable: true
    };
    var marker = new mapboxgl.Marker(markerOptions)
        .setLngLat([-96.770177, 32.823175])
        .addTo(map);

    var popup = new mapboxgl.Popup({ offset: 25 }).setHTML("<h1>Terilli's</h1>Terilli's is a family-owned and family-operated restaurant. " +
                    "Our passion for quality recipes and flavors are what set us ahead of the rest. " +
                    "Don't just take our word for it. Let our amazing menu do the talking."

    );

    new mapboxgl.Marker(markerOptions)
        .setLngLat([-96.770177, 32.823175])
        .setPopup(popup) // sets a popup on this marker
        .addTo(map);

});

geocode("velvet taco", mapboxToken).then(function(result) {
    console.log(result);
    map.setCenter(result)


    var markerOptions = {
        color: "teal",
        draggable: true
    };
    var marker = new mapboxgl.Marker(markerOptions)
        .setLngLat([-96.785457, 32.821735])
        .addTo(map);

    var popup = new mapboxgl.Popup()
        .setHTML("<h1>Velvet Taco</h1>We’ve made it our mission to deliver" +
            " a fresh take on the ubiquitous taco – to elevate this humble food " +
            "to something more. We use a tortilla as a canvas to make our art. " +
            "The result is over twenty different taco varieties featuring globe-trotting " +
            "flavors using in-house preparation methods. See our gallery of tacos to find" +
            " what flavors await. We assure you that you’ve never had a taco like this.")
        .addTo(map);

    marker.setPopup(popup);

});


