angular.module('items', ['ui.bootstrap']).controller('items', function($scope){

    $scope.$on('gotResults', function(gotResults, data){
        $scope.currentPage = 1;
        $scope.numPerPage = 18;
        $scope.maxSize = 5;
        $scope.allItems = data.data;
        $scope.totalItems = $scope.allItems.length;

        $scope.$watch('allItems', function() {

            var begin = (($scope.currentPage - 1) * $scope.numPerPage)
                , end = begin + $scope.numPerPage;

            $scope.items = $scope.allItems.slice(begin, end);
            return $scope.numPage = Math.ceil($scope.totalItems / $scope.numPerPage);
        });
        $scope.$watch('currentPage', function(){
            var begin = (($scope.currentPage - 1) * $scope.numPerPage)
                , end = begin + $scope.numPerPage;

            $scope.items = $scope.allItems.slice(begin, end);
            return $scope.numPage = Math.ceil($scope.totalItems / $scope.numPerPage);
        });
    });

    $scope.viewItem = function(){console.log("Opened")};
    $scope.addToCart = function(){console.log("Added")};
});