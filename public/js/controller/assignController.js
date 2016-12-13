'use strict';

module.exports = function($scope, $http) {
  $scope.booking = 'booking';

  var refresh = function () {
        $http.get('/assign/getAssign').success(function (response) {
            console.log('READ IS SUCCESSFUL');
            $scope.assignList = response;
            $scope.assign = "";
        });
    };

    refresh();
       

    $scope.addAssign = function (assign) {
          
                            
                           

                                 var  t= document.getElementById("assignTSelect");
                                var t1 = t.options[t.selectedIndex].text;
                                assign.theatreName = t1;

                            var cty = document.getElementById("assignSelect");
                                var cty1 = cty.options[cty.selectedIndex].text;
                                assign.movieName = cty1;


                       
                             $http.post('/assign/addAssign', assign).success(function (response) {
                                
                                
                                console.log(response);
                                console.log("CREATE IS SUCCESSFUL");
                                refresh();
                            });
                           
                        
        
       
    };

    $scope.removeAssign = function (assign) {
        //console.log(id);
        $http.delete('/assign/deleteAssign/' + assign._id).success(function (response) {
            console.log(response);
            console.log('DELETED SUCCESSFULLY');
            refresh();
        });
    };

    // $scope.editAssign = function (assign) {
    //      $http.get('/assign/getTheatre/' + theatre._id).success(function (response) {
    //         $scope.theatre = response[0];
    //     });
    // };

    // $scope.updateAssign = function () {
    //     console.log("REACHED UPDATE");
    //     console.log($scope.theatre._id);
    //     $http.put('/assign/updateAssign/' + $scope.theatre._id, $scope.theatre).success(function (response) {
    //         console.log(response);
    //         refresh();
    //     })
    // }
};

