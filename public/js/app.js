'use strict';


var angular = require('angular');
require('angular-route');

var app = angular.module('movieApp', [ 'ngRoute' ]);

require('../css/app.scss');

require('./controller');

app.config(function($routeProvider) {

  $routeProvider.when('/home', {
    templateUrl: 'views/home.html',
    controller: 'HomeController',
  })
  .when('/booking', {
    templateUrl: 'views/booking.html',
    controller: 'BookingController',
  })
  .when('/cancellation', {
    templateUrl: 'views/cancellation.html',
    controller: 'CancellationController',
  })
  .when('/city', {
    templateUrl: 'views/city.html',
    controller: 'CityController',
  })
  .when('/showtime', {
    templateUrl: 'views/showtime.html',
    controller: 'ShowtimeController',
  })
  .when('/theatre', {
    templateUrl: 'views/theatre.html',
    controller: 'TheatreController',

  })
  .when('/assign', {
    templateUrl: 'views/assign.html',
    controller: 'AssignController',

  })
  .otherwise({
    redirectTo: '/home',
  });
});
