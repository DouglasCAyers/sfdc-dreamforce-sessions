var app = angular.module('dreamforceApp', []);

app.controller('SessionCtrl', function( $scope, $http ) {

    // To update the session data for Dreamforce 14, go to below URL
    // then save the contents into the sessionData.json file.
    // This is required when running this app from your local computer
    // due to browser security Cross-Origin Request Blocked (CORS).
    // http://www.salesforce.com/assets/js/filterSessions.jsp?eventId=a1Q30000002aJu6EAE

    // Info on using $http to get contents from static json file
    // http://stackoverflow.com/questions/16930473/angularjs-factory-http-get-json-file

    $scope.sessionData = {};

    $http.get('sessionData.json').success(function(data) {
        $scope.sessionData = data;
    });

});