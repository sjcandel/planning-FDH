import angular from 'angular';
var fdhModule = angular.module('fdhModule');
import moment from "moment";

fdhModule.controller('eventController', ['$scope', 'eventService', 'groupService',  function ($scope, eventService, groupService) {

    // récupère la liste des groupes pour la liste déroulante du formulaire
    groupService.getGroups()
        .then(function(groups) {            
            $scope.groups = groups;
        });

    // affiche la liste de tous les événements
    let getEvents = function() {
        eventService.getEvents()
        .then(function(events) {
           
            // change le format de la date
            events.forEach(function(elt) {
                let dateFromServer = moment(elt.date);
                elt.date = dateFromServer.format("DD/MM/YYYY");
                elt.time = dateFromServer.format("HH:mm");
            });
            $scope.events = events;
        });
    }
    getEvents();

    // création d'un nouvel événement
    $scope.createEvent = function(isValid) {
        $scope.submitted = true;
        // vérification du formulaire 
        if (isValid) { 
            eventService.createEvent($scope.createEventName, $scope.createEventDate, $scope.createEventLocation, $scope.createEventDuration, $scope.createEventGroup)
            .then(function(){
                getEvents();
                location.reload(true);
            }); 
        }        
    }
}]);

