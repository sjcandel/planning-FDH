import angular from 'angular';
import ngRoute from 'angular-route';
import ngStorage from 'ngstorage';

var app = angular.module('fdhApp', ['fdhModule']);
var fdhModule = angular.module('fdhModule', ['ngStorage', 'ngRoute']);

////////////////////////////////////////////////////////////
// ROUTING
////////////////////////////////////////////////////////////
fdhModule.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
    .when('/group', {
        templateUrl: 'views/group.html',
        controller: 'groupController'
    })
    .when('/event', {
        templateUrl: 'views/event.html',
        controller: 'eventController'
    })
    .otherwise({redirectTo: '/group'})
}]);