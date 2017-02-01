// var map = require('./map.js')
const Makeday = function(){
    this.hotel = {};
    this.restaurants = {};
    this.activities = {};
};

Makeday.prototype.addHotel = function(hotelObj, marker){
    this.hotel[hotelObj.name] = [hotelObj, marker];
};

Makeday.prototype.addRestaurant = function(resObj, marker){
    this.restaurants[resObj.name] = [resObj, marker];
};

Makeday.prototype.addActivities = function(actObj, marker){
    this.activities[actObj.name] = [actObj, marker];
};

Makeday.prototype.removeMaker = function(name, type ) {
    var latlon = this[type][name].place.location;

};

Makeday.prototype.removeRestaurant = function(resName) {
  delete this.restaurants[resName];
};


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
      let restaurantObj = currentDay.restaurants;

      if(Object.keys(restaurantObj).length < 3 && !restaurantObj.hasOwnProperty(selectedRestaurant.name)) {
        let marker = drawMarker('restaurant', selectedRestaurant.place.location);
        currentDay.addRestaurant(selectedRestaurant, marker);
        $('#restaurant-list').append('<li>' + selectedRestaurant.name + '</li><button class="btn btn-xs btn-danger remove btn-circle">x</button>');
      }
    });

    $( "#restaurant-list" ).on( "click", "button", function( event ) {
    //event.preventDefault();
    var removedName = $(this).prev()[0].innerHTML;
    let removeMarker = currentDay.restaurants[removedName][1];
    removeMarker.setMap(null);
    currentDay.removeRestaurant(removedName);
    //console.log( , "logging" );

});


//activities
    $('#add-activity').click(function() {
      let activityIndex = $('#activity-choices option:selected').val() -1;
      let selectedActivity = activities[activityIndex];
      let activityObj = currentDay.activities;

      if(Object.keys(activityObj).length < 5 && !activityObj.hasOwnProperty(selectedActivity.name)) {
        let marker = drawMarker('activity', selectedActivity.place.location);
        currentDay.addActivities(selectedActivity, marker);
        $('#activity-list').append('<li>' + activityName + '</li>');
      }
    });


    //drawMarker('restaurant', [40.705137, -74.013940]);
});

// To add the marker to the map, call setMap();
// marker.setMap(map);
// map.drawMarker('restaurant', [40.705137, -74.013940]);
