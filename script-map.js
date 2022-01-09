var map;
function initMap() {
    var mapOptions = {
        center: {lat: -19.8157, lng:-43.9542},
        zoom: 8
    };
    map = new google.maps.Map(document.getElementById("map"), mapOptions);

}

