var app = angular.module('searchController', []);
var baseUrl;
var manifest = jQuery.getJSON( "manifest.webapp", function( json ) {
    baseUrl = json.activities.openmrs.href;
});

app.controller('SearchConceptCtrl', function($scope, $http, $window) {
	$scope.query = "";
	$scope.showing = "";

	$scope.searchConcept = function() {
		$http({ method: 'GET', url: baseUrl + "/ws/rest/v1/" + 'concept?q=' + $scope.query + '&v=custom:(id,name,description)' }).
			success(function (data, status, headers, config) {
		    	$scope.concepts = data.results;
		    	$scope.showing = $scope.query;
		    	console.log('REST success');
		  	}).
		  	error(function (data, status, headers, config) {
		   		console.log('REST failure');
		  	});
	};

	$scope.redirectToDictionary = function(id) {
	    $window.open(baseUrl + '/dictionary/concept.htm?conceptId=' + id, '_blank');
	};
});