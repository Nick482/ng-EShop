angular.module('filters', []).controller('filters', function($scope, variableBuffer){
    $scope.excludedFilters = ["id", "name", "group", "subgroup", "image", "code", "remaining", "createdAt", "updatedAt"];
    $scope.filterTypes = {};
    $scope.$on('gotResults', function(gotResults, data){
        $scope.filterTypes = {};
        var received = data.data;
        console.log(received);
        var tempArray = [];
        for (var i = 0; i < received.length; i++) {
            if (tempArray.indexOf(Object.keys(received[i])) == -1 &&
                $scope.excludedFilters.indexOf(Object.keys(received[i])) == -1){
                    tempArray.push(Object.keys(received[i]))
                }
        }
        for (i = 0; i < tempArray.length; i++) {
            for(var j = 0; j < tempArray[i].length; j++) {
                if ($scope.excludedFilters.indexOf(tempArray[i][j]) == -1){
                    $scope.filterTypes[tempArray[i][j]] = [];
                }
            }
        }

        for(i = 0; i < Object.keys($scope.filterTypes).length; i++){
            for(j = 0; j < received.length; j++){
                for(var k = 0; k < Object.keys(received[j]).length; k++) {
                    if (Object.keys($scope.filterTypes)[i] == Object.keys(received[j])[k] &&
                        $scope.filterTypes[Object.keys($scope.filterTypes)[i]].indexOf(received[j][Object.keys(received[j])[k]]) == -1) {
                        $scope.filterTypes[Object.keys($scope.filterTypes)[i]].push(received[j][Object.keys(received[j])[k]])
                    }
                }
            }
        }
    $scope.filterTypes.price.sort();
    })
});