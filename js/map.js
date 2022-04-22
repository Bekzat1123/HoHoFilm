var map;

DG.then(function () {
    map = DG.map('map', {
        center: [42.858916, 74.603985],
        zoom: 13
    });
    DG.marker([42.858916, 74.603985]).addTo(map).bindPopup('Адрес');
});