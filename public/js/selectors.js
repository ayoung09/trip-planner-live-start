// var map = require('./map.js')
let dayCollection = {
  'day1': {
    'hotel': [],
    'restaurants': [],
    'activities': []
  },
  'day2': {
    'hotel': [],
    'restaurants': [],
    'activities': []
  },
  'day3': {
    'hotel': [],
    'restaurants': [],
    'activities': []
  }
};

var currentDay = 'day1';

$(document).ready(function(){

    $('#add-hotel').click(function() {
       let hotelIndex = $('#hotel-choices option:selected').val() - 1;
       let selectedHotel = hotels[hotelIndex];
       let hotelName = selectedHotel.name;
       let hotelArray = dayCollection[currentDay].hotel;

       if(!hotelArray.length){
            hotelArray.push(selectedHotel);
           drawMarker('hotel', selectedHotel.place.location);
           $('#hotel-list').text(selectedHotel.name);
       }
    });

    $('#add-restaurant').click(function() {
      let restaurantIndex = $('#restaurant-choices option:selected').val() -1;
      let selectedRestaurant = restaurants[restaurantIndex];
      let restaurantName = selectedRestaurant.name;
      let restaurantArray = dayCollection[currentDay].restaurants;


      if(restaurantArray.length < 3) {
        restaurantArray.push(selectedRestaurant);
        $('#restaurant-list').append('<li>' + restaurantName + '</li><button class="btn btn-xs btn-danger remove btn-circle">x</button>');
        drawMarker('restaurant', selectedRestaurant.place.location);
      }
    });


    $('#add-activity').click(function() {
      let activityIndex = $('#activity-choices option:selected').val() -1;
      let selectedActivity = activities[activityIndex];
      let activityName = selectedActivity.name;
      let actvityArray = dayCollection[currentDay].activities;

      if(actvityArray.length < 5) {
        actvityArray.push(selectedActivity);
        $('#activity-list').append('<li>' + activities[activityIndex].name + '</li>');
        drawMarker('activity', selectedActivity.place.location);
      }
    });


    //drawMarker('restaurant', [40.705137, -74.013940]);
});

// To add the marker to the map, call setMap();
// marker.setMap(map);
// map.drawMarker('restaurant', [40.705137, -74.013940]);
