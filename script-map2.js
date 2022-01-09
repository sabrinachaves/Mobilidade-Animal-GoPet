function initMap() {
    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: {lat: -19.90879, lng: -43.96529 },
    });
  
    directionsService.route({
      origin: { lat: -19.90879, lng: -43.96529 },
      destination: { lat: -19.85271, lng: -43.99379 },
      travelMode: google.maps.TravelMode.DRIVING
    })
  
  }
  
