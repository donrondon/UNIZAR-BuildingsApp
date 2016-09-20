// Ionic Starter App
// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js

var UZCampusWebMapApp = angular.module(
            'UZCampusWebMapApp',
            //['ionic', 'starter.controllers', 'starter.services', 'angularSlideables','ngResource','ngRoute']
            ['ionic', 'angularSlideables','ngResource','ngRoute','ngCordova']
    );

UZCampusWebMapApp.run(function($ionicPlatform) {
      $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (typeof(cordova) != 'undefined' && cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
      });
    })
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/:type/:ciudad', {
            templateUrl: "templates/mapa.html"
        });
    }])
    //.config(function($stateProvider, $urlRouterProvider,$routeProvider) {
    .config(function($stateProvider, $urlRouterProvider) {
      $stateProvider
          .state('app', {
            url: "/app",
            abstract: true,
            templateUrl: "templates/menu.html",
            controller: 'AppCtrl'
          })
          .state('splash', {
            url: "/app/splash",
            templateUrl: "templates/splash.html",
            controller: 'AppCtrl'
          })
          .state('app.home', {
            url: "/home",
            template: "templates/home.html",
            controller: 'AppCtrl',
            views: {
              'menuContent':{
                templateUrl: "templates/home.html",
                controller: 'AppCtrl'
              }
            }
          })
          .state('app.busqueda', {
            url: "/busqueda",
            views: {
              'menuContent':{
                templateUrl: "templates/busqueda.html",
                controller: 'SearchCtrl'
              }
            }
          })
          .state('app.busquedaavanzada', {
              url: "/busquedaavanzada",
              views: {
                  'menuContent':{
                      templateUrl: "templates/busquedaavanzada.html",
                      controller: 'SearchCtrl'
                  }
              }
          })
          .state('app.favoritos', {
            url: "/favoritos",
            views: {
              'menuContent':{
                templateUrl: "templates/favoritos.html",
                controller: 'AppCtrl'
              }
            }
          })
          .state('app.ajustes', {
            url: "/ajustes",
            views: {
              'menuContent':{
                templateUrl: "templates/ajustes.html",
                controller: 'AppCtrl'
              }
            }
          })
          .state('app.plano', {
              url: "/plano",
              views: {
                  'menuContent':{
                      templateUrl: "templates/plano.html",
                      controller: 'PlanCtrl'
                  }
              }
          })
          .state('app.roomDetails', {
              url: "/roomDetails",
              views: {
                  'menuContent':{
                      templateUrl: "templates/roomDetails.html",
                      controller: 'RoomDetailsCtrl'
                  }
              }
          })
          .state('app.photos', {
              url: "/photos",
              views: {
                  'menuContent':{
                      templateUrl: "templates/photos.html",
                      controller: 'PhotosCtrl'
                  }
              }
          })
          .state('app.mapa', {
              url: "/mapa",
              template: "templates/mapa.html",
              controller: 'MapCtrl',
              views: {
                  'menuContent':{
                      templateUrl: "templates/mapa.html",
                      controller: 'MapCtrl'
                  }
              }
          });

          // if none of the above states are matched, use this as the fallback
          $urlRouterProvider.otherwise('/app/home');

    });
    /*.config(['$routeProvider', function($routeProvider) {
        $routeProvider.
            when('/:type/:ciudad', {
                templateUrl: "templates/mapa.html"
            });
    }]);*/