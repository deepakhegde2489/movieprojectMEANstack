'use strict';

module.exports = function($scope, $http) {
  // $scope.city = 'city';

  var refresh = function () {
        $http.get('/city/getCity').success(function (response) {
            
            $scope.cityList = response;
            $scope.cit = "";
            console.log('READ IS SUCCESSFUL');
        });
    };

    refresh();

       $scope.addCity = function (cit) {
                          
                            // var cityObj={};
                            // cityObj[key] = response[key];
                            // console.log(cit);
                            // var serviceName = 'cit'                             
                            $http.post('/city/addCity', cit).success(function (response) {
                                 // $scope.addCity = cit;
                                console.log(response);
                                console.log("CREATE IS SUCCESSFUL");
                                refresh();
                            });
                           
                        
        //console.log($scope.contact);
       
    };


    $scope.removeCity = function (cit) {
        //console.log(id);
        $http.delete('/city/deleteCity/' + cit._id).success(function (response) {
            console.log(response);
            console.log('DELETED SUCCESSFULLY');
            refresh();
        });
    };

    $scope.editCity = function (cit) {
         $http.get('/city/getCity/' + cit._id).success(function (response) {
            $scope.city = response[0];
        });
    };

    $scope.updateCity = function () {
        console.log("REACHED UPDATE");
        console.log($scope.city._id);
        $http.put('/city/updateCity/' + $scope.cit._id, $scope.cit).success(function (response) {
            console.log(response);
            refresh();
        })
    }
};

