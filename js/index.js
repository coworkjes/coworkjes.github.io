function initMap() {
  var myLatLng = {lat: 50.230121, lng: 17.204888};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: myLatLng
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'CoworkJes!'
  });
}
