// var map = require('./map.js')
const Makeday = function(){
    this.hotel = {};
    this.restaurants = {};
    this.activities = {};
}

Makeday.prototype.addHotel = function(hotelObj, marker){
    this.hotel[hotelObj.name] = [hotelObj, marker];
};

Makeday.prototype.addRestaurant = function(resName, res, marker){
    this.restaurants[resName] = [res, marker];
};

Makeday.prototype.addActivities = function(actName, act, marker){
    this.activities[actName] = [act, marker];
};

Makeday.prototype.removeMaker = function(name,type ) {
    var latlon = this[type][name].place.location;

}

var dayOne = new Makeday();

var currentDay = dayOne;   //pointer

$(document).ready(function(){
//hotels
    $('#add-hotel').click(function() {
       let hotelIndex = $('#hotel-choices option:selected').val() - 1;
       let selectedHotel = hotels[hotelIndex];  // this gets all the obj data, from selected

       if(!Object.keys(currentDay.hotel).length){
        let marker = drawMarker('hotel', selectedHotel.place.location);
        currentDay.addHotel(selectedHotel,marker);
        $('#hotel-list').append( '<li>' + selectedHotel.name + '</li><button class="btn btn-xs btn-danger remove btn-circle">x</button>');
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
        $('#restaurant-list').append('<li>' + restaurantName + '</li><button class="btn btn-xs btn-danger remove btn-circle">x</button>');
      }
    });

    $( "#restaurant-list" ).on( "click", "button", function( event ) {
    //event.preventDefault();
    var removedName = $(this).prev()[0].innerHTML;

    //console.log( , "logging" );

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
