/**
 * Created by Martin Nguyen.
 */
angular.module('ResumeService', [])
    .factory('resumeFactory', function($http, $resource){
        var url = 'https://api.myjson.com/bins/1rkhn';

        return $resource(url, {},
            {resumeQuery: {method: 'GET', params:{callback: 'JSON_CALLBACK'}, isArray: false} });
    });