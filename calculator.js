angular.module('foodCalc', [])
.controller('calcCtrl', ['$scope', function($scope) {

  $scope.authorized = false;

  $scope.calcNutrition = function () {
    $scope.carbContent = 100-$scope.minCrudeProtein-$scope.minCrudeFat-$scope.maxCrudeFiber-$scope.moisture-$scope.maxAsh;
    $scope.calsProtein = 3.5 * $scope.minCrudeProtein;
    $scope.calsFat = 8.5 * $scope.minCrudeFat;
    $scope.calsCarb = 3.5 * (100-$scope.minCrudeProtein-$scope.minCrudeFat-$scope.maxCrudeFiber-$scope.moisture-$scope.maxAsh);
    $scope.totalCals = $scope.calsProtein + $scope.calsFat + $scope.calsCarb;
    $scope.proteinPercent = (($scope.calsProtein/$scope.totalCals)*100).toFixed(2) + "%";
    $scope.fatPercent = (($scope.calsFat/$scope.totalCals)*100).toFixed(2) + "%";
    $scope.carbPercent = (($scope.calsCarb/$scope.totalCals)*100).toFixed(2) + "%";
    $scope.resultsTitle = "Nutritional Analysis";
    $scope.proteinTitle = "Protein";
    $scope.fatTitle = "Fat";
    $scope.carbTitle = "Carbohydrates";
    $scope.minCrudeProtein = "";
    $scope.minCrudeFat = "";
    $scope.maxCrudeFiber = "";
    $scope.moisture = "";
    $scope.maxAsh = ""; 
    $scope.authorized = true;
  };

  $scope.flipSwitch = function () {
    $scope.authorized = false;
  };

}]);
