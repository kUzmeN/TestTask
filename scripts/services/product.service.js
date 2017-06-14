angular.module("testTask")
    .service("productService", ['$http', function ($http) {
        return {
            getProducts:function () {
                return $http.get('/products.json');
            }
        }
    }]);
