angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal

})

.controller('TeamCtrl', function($scope) {
  $scope.roster = [
    { number: 8, name: 'Hampus Kristensson', pos: 'QB' },
    { number: 9, name: 'Fredrik Eklund', pos: 'WR' }
  ];
});
