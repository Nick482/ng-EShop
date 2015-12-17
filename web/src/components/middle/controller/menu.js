angular.module('menu', []).controller('menu', function($scope, variableBuffer){
    $scope.categs = variableBuffer.getCategories();
    $scope.showConditions = {};
    $scope.setConditions = function(){
        for (var i = 0; i < $scope.categs.length; i++){
            $scope.showConditions[$scope.categs[i]] = false;
        }
    };
    $scope.setConditions();
    $scope.searchString = "";
    $scope.toggleSubs = function(category){
        $scope.showConditions[category] = !$scope.showConditions[category];
    };
    $scope.variableBuffer = variableBuffer;

    $scope.list = variableBuffer.getMenuList();

    $scope.catSearch = function(category){
        $scope.$emit('catSearch', category)
    };
    $scope.subSearch = function(sub){
        $scope.$emit('subSearch', sub)
    };
    $scope.genSearch = function(){
        if($scope.searchString.length != 0) {
            $scope.$emit('genSearch', $scope.searchString);
            $scope.searchString = "";
        }
    }
});