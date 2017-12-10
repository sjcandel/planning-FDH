import angular from 'angular';
var fdhModule = angular.module('fdhModule');

fdhModule.service('eventService', ['$http', function($http) {
    // Affichage de la liste des événements
    this.getEvents = function() {
        return $http({
            method: 'GET',
            url: 'https://test.corentindesfarges.fr/candel_event'
        })
        .then(function(response) {
            return response.data;
        });
    };

    // création d'un événement à partir du formulaire
    this.createEvent = function(createEventName, createEventDate, createEventLocation, createEventDuration, createEventGroup) {
        return $http ({
            method: 'POST',
            url: 'https://test.corentindesfarges.fr/candel_event',
            data: {
                name: createEventName,
                date: createEventDate,
                location: createEventLocation,
                duration: createEventDuration,
                group: createEventGroup
            }
        }); 
    };
}]);