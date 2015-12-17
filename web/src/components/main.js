angular.module('myApp', ['ui.bootstrap', 'logo', 'filters', 'menu', 'items', 'bottom'])
    .service('variableBuffer', function ($http) {

        var menuList = {
            houseApp: ["Refrigerators", "Kettles", "TV", "Conditioners", "Washing machines"],
            pc: ["Motherboards", "GPU", "CPU", "HDD", "SSD", "PSU", "RAM"],
            furniture: ["Beds", "Chairs", "Tables"],
            cellphones: ["Nokia", "Apple", "Samsung", "HTC"]
        };


        return {
            getCategories: function () {
                var categories = Object.keys(menuList);
                return categories;
            },
            getMenuList: function(){
                return menuList;
            }
        };
    })
.controller('main', function($scope, $http) {
        $scope.originalItems = [];
        $scope.subCategory = "";

    $scope.$on('subSearch', function(subSearch, data){
        $scope.subCategory = data;
    $http.post('/search/subCat', {"subCond": data}).then(
        function(data){
            $scope.originalItems = data;
            $scope.$broadcast('gotResults', data);
            $scope.$broadcast('setFilters', data);
        }
    )
    });
    $scope.$on('filtered', function(filtered, data){
        $scope.$broadcast('gotResults', {data: data});
    });
    $scope.$on('genSearch', function(genSearch, data){
        $http.post('/search', {name: data}).then(
            function(data){
                $scope.$broadcast('gotResults', data);
                $scope.$broadcast('setFilters', data);
                $scope.originalItems = data;
            }
        )
    })
}
);