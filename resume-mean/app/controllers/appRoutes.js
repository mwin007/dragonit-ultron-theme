angular.module('AppRoutes', [])
    .config(function($stateProvider, $urlRouterProvider){

        $stateProvider
            .state('bio',{
                url: '/bio',
                templateUrl:'app/partials/partial-bio.html',
                controller:'viewCtrl'
            })
            .state('education',{
                url: '/education',
                templateUrl:'app/partials/partial-education.html'
            })
            .state('experience',{
                url:'/experience',
                templateUrl:'app/partials/partial-experience.html'
            })
            .state('skills',{
                url:'/detail',
                templateUrl: 'app/partials/partial-skills.html'
            });

        $urlRouterProvider.otherwise('bio');
    });