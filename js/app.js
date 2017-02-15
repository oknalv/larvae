var app = angular.module("larvaeApp", ["larvae-directive"]);
app.controller("larvaeController", ["$scope", function($scope){
    $scope.texts = {
        "English": "js/en.json",
        "español": "js/es.json"
    }
    $scope.langs = Object.keys($scope.texts);
    $scope.defaultLang = "English";
}]);