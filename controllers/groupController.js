import angular from 'angular';
var fdhModule = angular.module('fdhModule');
import moment from "moment";

fdhModule.controller('groupController', ['$scope', 'groupService',function ($scope, groupService) {
    // affichage de tous les groupes
    let getGroups = function() {
        groupService.getGroups()
        .then(function(groups) { 

            // changement format de date
            groups.forEach(function(elt) {
                let date = elt.events;
                date.forEach(function(elt){
                    console.log(elt.date);
                    let dateFromServer = moment(elt.date);
                    elt.date = dateFromServer.format("DD/MM/YYYY");
                    elt.time = dateFromServer.format("HH:mm");
                })
            });
            $scope.groups = groups;
        });
    }
    getGroups();

    // création d'un groupe
    $scope.createGroup = function(isValid) {
        $scope.submitted = true;
        // validation du formulaire
        if( isValid) {
            groupService.createGroup($scope.createGroupName, $scope.createGroupCountry)
            .then(function(){
                getGroups();
                location.reload(true)
            });
        }
    }
}]);

