/**
 * Created by Hinh Martin Nguyen
 */
angular.module('ViewCtrl', [])
    .controller('viewCtrl',function($scope, resumeFactory){
        $scope.message = "Hello from inside the view Controller"

        $scope.resume = resumeFactory.resumeQuery();

    });