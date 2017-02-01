// var map = require('./map.js')
let dayCollection = {
  'day1': {
    'hotel': {},
    'restaurants': {},
    'activities': {}
  },
  'day2': {
    'hotel': {},
    'restaurants': {},
    'activities': {}
  },
  'day3': {
    'hotel': {},
    'restaurants': {},
    'activities': {}
  }
};

var currentDay = 'day1';

$(document).ready(function(){

//hotels
    $('#add-hotel').click(function() {
       let hotelIndex = $('#hotel-choices option:selected').val() - 1;
       let selectedHotel = hotels[hotelIndex];
       let hotelName = selectedHotel.name;
       let hotelObj = dayCollection[currentDay].hotel;

       if(!Object.keys(hotelObj).length){
        let marker = drawMarker('hotel', selectedHotel.place.location);
        hotelObj[hotelName] = [selectedHotel, marker];
        $('#hotel-list').text(selectedHotel.name);
       }
    });


//restaurants
    $('#add-restaurant').click(function() {
      let restaurantIndex = $('#restaurant-choices option:selected').val() -1;
      let selectedRestaurant = restaurants[restaurantIndex];
      let restaurantName = selectedRestaurant.name;
      let restaurantObj = dayCollection[currentDay].restaurants;

      if(Object.keys(restaurantObj).length < 3 && !restaurantObj.hasOwnProperty(restaurantName)) {
        let marker = drawMarker('restaurant', selectedRestaurant.place.location)
        restaurantObj[restaurantName] = [selectedRestaurant, marker];
        $('#restaurant-list').append('<li>' + restaurantName + '</li><button class="btn btn-xs btn-danger remove btn-circle">x</button>');;
      }
    });


//activities
    $('#add-activity').click(function() {
      let activityIndex = $('#activity-choices option:selected').val() -1;
      let selectedActivity = activities[activityIndex];
      let activityName = selectedActivity.name;
      let activityObj = dayCollection[currentDay].activities;

      if(Object.keys(activityObj).length < 5 && !activityObj.hasOwnProperty(activityName)) {
        let marker = drawMarker('activity', selectedActivity.place.location);
        activityObj[activityName] = [selectedActivity, marker];
        $('#activity-list').append('<li>' + activityName + '</li>');

      }
    });


    //drawMarker('restaurant', [40.705137, -74.013940]);
});

// To add the marker to the map, call setMap();
// marker.setMap(map);
// map.drawMarker('restaurant', [40.705137, -74.013940]);
