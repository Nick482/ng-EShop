angular.module('items', []).controller('items', function($scope){
    $scope.items = [];
    $scope.$on('gotResults', function(gotResults, data){
        $scope.items = data.data;
    });
    $scope.viewItem = function(){console.log("Opened")};
    $scope.addToCart = function(){console.log("Added")};
});