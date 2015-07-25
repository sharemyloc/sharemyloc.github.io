var canvas = document.getElementById('map-canvas');
var uuid = location.search.substring(1);
var firebase = new Firebase('https://sharemyloc.firebaseio.com/sessions/' + uuid);
var map = null;
var marker = new google.maps.Marker();

firebase.on('value', function(snapshot) {
  var location = snapshot.val();
  if (!location) {
    canvas.innerHTML = '<h1>NOT FOUND</h1>';
  } else {
    location = {lat: location.latitude, lng: location.longitude};
    if (!map) {
      map = new google.maps.Map(canvas, {zoom: 15, center: location});
      marker.setMap(map);
    }
    marker.setPosition(location);
  }
});
