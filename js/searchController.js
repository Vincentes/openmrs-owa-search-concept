var app = angular.module('searchController', []);
var apiBaseUrl;
var manifest = jQuery.getJSON( "manifest.webapp", function( json ) {
    apiBaseUrl = json.activities.openmrs.href + "/ws/rest/v1/";
});

app.controller('SearchConceptCtrl', function($scope, $http) {
	$scope.query = "";
	$scope.showing = "";

	$scope.searchConcept = function() {
		$http({ method: 'GET', url: apiBaseUrl + 'concept?q=' + $scope.query + '&v=custom:(uuid,name,description)' }).
			success(function (data, status, headers, config) {
		    	$scope.concepts = data.results;
		    	$scope.showing = $scope.query;
		    	console.log('REST success');
		  	}).
		  	error(function (data, status, headers, config) {
		   		alert('Could not search through concepts!');
		  	});
		};
});