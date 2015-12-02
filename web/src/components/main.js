angular.module('myApp', ['logo', 'search', 'menu', 'items'])
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
    $scope.$on('subSearch', function(subSearch, data){
        console.log(data);
    $http.post('/search/subCat', {"subCond": data}).then(
        function(data){
            $scope.$broadcast('gotResults', data)
        }
    )
    })
}
);