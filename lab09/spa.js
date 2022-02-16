var app = angular.module('myApp', [], ['ui.bootstrap']);
var app = angular.module('myApp', ['ngRoute']);
app.config(function($routeProvider) {
    $routeProvider

        .when('/', {
        templateUrl: 'aboutus.html',
        controller: 'FirstController'
    })

    .when('/manipulate', {
        templateUrl: 'manipulate.html',
        controller: 'SecondController'
    })

    .when('/mechanicdata', {
        templateUrl: 'mechanicdata.html',
        controller: 'ThirdController'
    })

    .otherwise({
        redirectTo: '/'
    });
});


app.controller('FirstController', function($scope) {
    $scope.message = 'Welcome to train management';
    $scope.message2 = 'We are here to support you';
});


app.controller('SecondController', function($scope, $http) {
    $http.get('https://alwinvishal.github.io/2147211_wsd/lab08/lab08.json')
        .success(function(response) {
            $scope.names = response.employees;
        });
});

app.controller('ThirdController', function($scope, $http) {
    $http.get('https://alwinvishal.github.io/2147211_wsd/lab08/lab08.json')
        .success(function(response) {
            $scope.names = response.employees;
            $scope.rowlimit = 10;
        });
});