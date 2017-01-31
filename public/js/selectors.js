$('#add-hotel').click(function() {
  let hotelIndex = $('#hotel-choices option:selected').val() - 1;
  $('#hotel-list').text(hotels[hotelIndex].name);
});

$('#add-restaurant').click(function() {
  let restaurantIndex = $('#restaurant-choices option:selected').val() -1;
  $('#restaurant-list').append('<li>' + restaurants[restaurantIndex].name + '</li>');
});

$('#add-activity').click(function() {
  let activityIndex = $('#activity-choices option:selected').val() -1;
  $('#activity-list').append('<li>' + activities[activityIndex].name + '</li>');
});



//Google maps
var myLatlng = new google.maps.LatLng(-25.363882,131.044922);
var mapOptions = {
  zoom: 4,
  center: myLatlng
}
var map = new google.maps.Map(document.getElementById("map"), mapOptions);

var marker = new google.maps.Marker({
    position: myLatlng,
    title:"Hello World!"
});

// To add the marker to the map, call setMap();
marker.setMap(map);
