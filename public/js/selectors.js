// var map = require('./map.js')

$(document).ready(function(){

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



    drawMarker('restaurant', [40.705137, -74.013940]);
});

// To add the marker to the map, call setMap();
// marker.setMap(map);
// map.drawMarker('restaurant', [40.705137, -74.013940]);
