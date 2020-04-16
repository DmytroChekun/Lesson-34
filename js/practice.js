let calcRoute = function(directionsService, directionsRenderer) {
    let start = $("input.start").val();
    let end = $("input.finish").val();
    directionsService.route( {
            origin: start,
            destination: end,
            travelMode: "DRIVING"
        },
        function (response, status) {
            if (status === "OK") {
                directionsRenderer.setDirections(response);
            }else {
                window.alert("Directions request failed due to" + status);
            }
        }
    )
};

let pos = {lat: 49.277175, lng: 16.997369};
let opt = {
  center: pos,
  zoom: 15,
};
let pos2 = {lat: 49.276175, lng: 16.997269};
function initMap() {
    let directionsService = new google.maps.DirectionsService();
    let directionsRenderer = new google.maps.DirectionsRenderer();
    
    let map = new google.maps.Map(document.getElementById('map'), {
        zoom: 8,
        center: {lat: 50.619480, lng: 26.249685}
        
      });
      let marker1 = new google.maps.Marker({
        position: pos,
        map: map,
        title: "o_O",
        icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
      });
      let marker2 = new google.maps.Marker({
        position: pos2,
        map: map,
        title: "o_O",
        icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
      });
    directionsRenderer.setMap(map);
    $("#confirm").on('click', function(){
        calcRoute(directionsService, directionsRenderer);
        
    });
    
  };




