angular.module('menu', []).controller('menu', function($scope, variableBuffer){
    $scope.variableBuffer = variableBuffer;
    $scope.catSearch = function(category){
        $scope.$emit('catSearch', category)
    };
    $scope.subSearch = function(sub){
        $scope.$emit('subSearch', sub)
    };
});