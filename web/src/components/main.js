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
            },
            setVariable: function(variable, value) {
                variable = value;
            }
        };
    })
.controller('main', function($scope, $http) {
        $scope.subCategory = "";
        $scope.filteredItems = [];

    $scope.$on('subSearch', function(subSearch, data){
        $scope.subCategory = data;
    $http.post('/search/subCat', {"subCond": data}).then(
        function(data){
            $scope.$broadcast('gotResults', data);
            $scope.filteredItems = data;
        }
    )
    });
    $scope.$on('genSearch', function(genSearch, data){
        $http.post('/search', {name: data}).then(
            function(data){
                $scope.$broadcast('gotResults', data);
                $scope.filteredItems = data;
            }
        )
    })


}
);