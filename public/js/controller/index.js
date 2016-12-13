'use strict';

var app = require('angular').module('movieApp');

app.controller('BookingController', require('./bookingController'));
app.controller('CancellationController', require('./cancellationController'));
app.controller('HomeController', require('./homeController'));
app.controller('CityController', require('./cityController'));
app.controller('ShowtimeController', require('./showtimeController'));
app.controller('TheatreController', require('./theatreController'));
app.controller('AssignController', require('./assignController'));

