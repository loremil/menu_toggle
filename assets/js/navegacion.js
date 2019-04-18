banchileApp.controller('menuRouteCrtl-empresas',
    ['$scope', '$location', function ($scope, $location){
        $scope.currentNavItem = 'atom';
        $scope.template = $scope.template1;
        $scope.nombreSeccion = "pages"

        $scope.changeMenu = function (template, name, location) {
            $scope.template = template;
            $scope.nombreSeccion = name;
            $location.path(ion);
            e.currentNavItem = location;
        }
    }]);

banchileApp.config(function ($routeProvider) { $routeProvider

        //molecula
        .when('/molecule', {
            templateUrl: 'pages/molecule.html',
        })
        //home
        .when('/atom', {
            templateUrl: 'pages/atom.html',
        })
        //home
        .when('/organism', {
            templateUrl: 'pages/organism.html',
        })
        .when('/template', {
            templateUrl: 'pages/template.html',
        })

        .otherwise({
            redirectTo: '/atom'
        });
});


// var banchileApp = angular.module ('menuRouteCrtl-code' ['ngRoute', 'ngMaterial', 'ngMessages', 'ngRoute', 'ngAnimate', 'wt.responsive', 'angular-parallax', 'ksSwiper', 'ngScrollbar', 'matchMedia', 'dragularModule', 'hl.sticky', 'angular-svg-round-progressbar', 'timer']).
//
// banchileApp.config (['$routeProvider', '$locationProvider') function ('$routeProvider', '$locationProvider') {
// $routeProvider.when ('/scrollbar1', {templateUrl: 'code_html/organism_html/scrollbar1.html'});
// $routeProvider.otherwise ({redirectTo: '//scrollbar1'});
//
// $locationProvider.html5mode ({enabled:true, requireBase: False});
//
//
//
// }]);




banchileApp.controller('menuRouteCrtl-personas',
    ['$scope', '$location', function ($scope, $location){
        $scope.currentNavCode = 'organism';
        $scope.template = $scope.template1;
        $scope.nombreSeccion = "pages"
  //       $scope.changeMenu = function (template, name, location) {
  //           $scope.template = template;
  //           $scope.nombreSeccion = name;
  //           $location.path(ion);
  // e.currentNavCode = location;
  //       }
    }]);

banchileApp.config(function ($routeProvider) {$routeProvider

        //molecula
        .when('/scrollbar1', {
            templateUrl: 'code_html/organism_html/scrollbar1.html',
        })

        .otherwise({
            redirectTo: '/atom'
        });
});
