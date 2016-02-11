angular.module('filters', []).controller('filters', function($scope, variableBuffer){
    $scope.showPrice = false;

    $scope.$on('setFilters', function(setFilters, data){
        var received = data.data,
            priceTemp = [];
        $scope.received = received;
        $scope.filterTypes = received.reduce(
            function(ob, element){
                ob.price.push(element.price);
                ob.maker.push(element.maker);
                return ob;
            }, {price: [], maker: []}
        );
        $scope.filterTypes.maker = $scope.filterTypes.maker.filter(
            function(element, index, self){
                return self.indexOf(element) == index;
            }
        );

    $scope.filterTypes.price.sort();
    priceTemp = [$scope.filterTypes.price[0], $scope.filterTypes.price[$scope.filterTypes.price.length - 1]];
    delete $scope.filterTypes.price;
    $scope.priceFilter = priceTemp;
    $scope.showPrice = true;
    });
    $scope.funPrice1 = function(){
        if (!$scope.price2) {return $scope.price1}
        return Math.min($scope.price1, $scope.price2) || 0;
    };
    $scope.funPrice2 = function(){
        if (!$scope.price1) {return $scope.price2}
        return Math.max($scope.price1, $scope.price2) || 0;
    };
    $scope.filterByPrice = function(from, to){
        var filteredItems = [];
        for (var i = 0; i < $scope.received.length; i++) {
            if($scope.received[i].price >= from && $scope.received[i].price <= to){
                filteredItems.push($scope.received[i])
            }
        }
        $scope.$emit('filtered', filteredItems);
    }
});