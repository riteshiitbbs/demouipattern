var app = angular.module('myApp', []);
app.controller('mainCtrl', function($scope) {
    console.log('controller running !')
    $scope.tables = true;
    $scope.topography = false;
    $scope.activateTopography = function(){
    	$scope.hideAllTemplates();
    	$scope.topography = true;
    }

    $scope.activateTables = function(){
    	$scope.hideAllTemplates();
    	$scope.tables = true;
    }

    $scope.activateNavigation = function(){
    	$scope.hideAllTemplates();
    	$scope.navigation = true;
    }

    $scope.hideAllTemplates = function(){
    	$scope.tables = false;
    	$scope.topography = false;
    	$scope.navigation = false;
    }






});
