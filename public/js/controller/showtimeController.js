'use strict';

module.exports = function($scope, $http) {
  // $scope.city = 'city';

  var refresh = function () {
        $http.get('/showtime/getShowtime').success(function (response) {
            
            $scope.showtimeList = response;
            $scope.showtime = "";

            console.log('READ IS SUCCESSFUL');
        });
    };
     


    refresh();

       $scope.addShowtime = function (showtime) {
                          
                            // var cityObj={};
                            // cityObj[key] = response[key];
                            // console.log(cit);
                            // var serviceName = 'cit'  
                             // var x = document.getElementById("myTime").value;
                             //    document.getElementById("demo").innerHTML = x;
                           // var showtime1= showtime.showtimeTime | date:'HH:mm a';
                            $http.post('/showtime/addShowtime', showtime).success(function (response) {
                                 // $scope.addCity = cit;
                                console.log(response);
                                console.log("CREATE IS SUCCESSFUL");
                                refresh();
                            });
                           
                        
        //console.log($scope.contact);
       
    };


    $scope.removeShowtime = function (showtime) {
        //console.log(id);
        $http.delete('/showtime/deleteShowtime/' + showtime._id).success(function (response) {
            console.log(response);
            console.log('DELETED SUCCESSFULLY');
            refresh();
        });
    };

    // $scope.editShowtime = function (showtime) {
    //      $http.get('/city/getCity/' + showtime._id).success(function (response) {
    //         $scope.showtime = response[0];
    //     });
    // };

    // $scope.updateShowtime = function () {
    //     console.log("REACHED UPDATE");
    //     console.log($scope.cit._id);
    //     $http.put('/city/updateShowtime/' + $scope.showtime._id, $scope.showtime).success(function (response) {
    //         console.log(response);
    //         refresh();
    //     })
    // }
};

