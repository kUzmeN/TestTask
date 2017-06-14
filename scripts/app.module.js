var testTaskApp = angular.module('testTask', ['ngRoute']);

testTaskApp.config(['$routeProvider' , function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'templates/calculator.html'
        })
        .otherwise({
            redirectTo: '/'
        });

}]);

testTaskApp.run(['$templateCache', function ( $templateCache ) {
    $templateCache.removeAll(); }]);

