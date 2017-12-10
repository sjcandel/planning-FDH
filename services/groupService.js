import angular from 'angular';
var fdhModule = angular.module('fdhModule');

fdhModule.service('groupService', ['$http', function($http) {
    // affichage de la liste de tous les groupes
    this.getGroups = function() {
        return $http({
            method: 'GET',
            url: 'https://test.corentindesfarges.fr/candel_group'
        })
        .then(function(response) {
            return response.data;
        });
    };

    // création d'un groupe à partir du formulaire
    this.createGroup = function(createGroupName, createGroupCountry) {
        return $http ({
            method: 'POST',
            url: 'https://test.corentindesfarges.fr/candel_group',
            data: {
                name: createGroupName,
                country: createGroupCountry
            }
        }); 
    };
}]);


