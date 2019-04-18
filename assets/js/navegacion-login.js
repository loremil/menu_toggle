
banchileApp.config(function ($routeProvider) {

    $routeProvider
        //LOGIN
        .when('/login', {
            templateUrl: 'login/login.html',
        })
        .when('/bienvenida', {
            templateUrl: 'login/bienvenida.html',
        })
        .when('/contrato', {
            templateUrl: 'login/contrato-empresas.html',
        })

        .otherwise({
            redirectTo: '/login'
        });
});
