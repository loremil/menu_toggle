// Var app es quien inicializa la aplicacién de angular
var banchileApp = angular.module('banchileApp', ['ngMaterial', 'ngMessages', 'ngRoute', 'ngAnimate', 'wt.responsive', 'angular-parallax', 'ksSwiper', 'ngScrollbar', 'matchMedia', 'dragularModule', 'hl.sticky', 'angular-svg-round-progressbar', 'timer']);

banchileApp.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('altTheme')
    .primaryPalette('green')
    .accentPalette('purple');
});

// LISTADO BENEFICIARIOS
banchileApp.controller('tablaBeneficiarios', function ($scope) {

    $scope.sort = '+tipo';
    $scope.benef = [

        {
            tipo: "Nacional",
            nombre: "Francisco Pacheco",
            alias: "Proveedor de Semillas",
            pais: "República Dominicana ",
            direccion: "Merced 657",
            creacion: "02/12/2016",
            bancoNombre: "Banco de Chile",
            bancoPais: "Chile",
            bancoDireccion: "Huérfanos 670",
            bancoCuenta: "003746",
            bancoMoneda: "Dólar",
            bancoSwift: "883349",
            bancoAba: "Aba 89234-2424",
            bancoIban: "12313 IBAN"

        }, {
            tipo: "Internacional",
            nombre: "María Soledad Iturra",
            alias: "Vendedor de Plásticos",
            pais: "Bolivia",
            direccion: "Agustinas 238",
            creacion: "02/12/2016",
            bancoNombre: "Banco de Chile",
            bancoPais: "Chile",
            bancoDireccion: "Huérfanos 670",
            bancoCuenta: "003746",
            bancoMoneda: "Dólar",
            bancoSwift: "883349",
            bancoAba: "Aba 89234-2424",
            bancoIban: "12313 IBAN"
        }, {
            tipo: "Internacional",
            nombre: "Francisco Javier Prado",
            alias: "Empresa de Riquelme",
            pais: "Estados Unidos",
            direccion: "Moneda 100",
            creacion: "02/12/2016",
            bancoNombre: "Banco de Chile",
            bancoPais: "Chile",
            bancoDireccion: "Huérfanos 670",
            bancoCuenta: "003746",
            bancoMoneda: "Dólar",
            bancoSwift: "883349",
            bancoAba: "Aba 89234-2424",
            bancoIban: "12313 IBAN"
        }, {
            tipo: "Nacional",
            nombre: "Xiang Lee",
            alias: "Riego Empresa",
            pais: "Chile",
            direccion: "Agustinas 345",
            creacion: "02/12/2016",
            bancoNombre: "Banco de Chile",
            bancoPais: "Chile",
            bancoDireccion: "Huérfanos 670",
            bancoCuenta: "003746",
            bancoMoneda: "Dólar",
            bancoSwift: "883349",
            bancoAba: "Aba 89234-2424",
            bancoIban: "12313 IBAN"

        }, {
            tipo: "Nacional",
            nombre: "Francisco Pacheco",
            alias: "Proveedor de Semillas",
            pais: "República Dominicana ",
            direccion: "Miraflores 300",
            creacion: "02/12/2016",
            bancoNombre: "Banco de Chile",
            bancoPais: "Chile",
            bancoDireccion: "Huérfanos 670",
            bancoCuenta: "003746",
            bancoMoneda: "Dólar",
            bancoSwift: "883349",
            bancoAba: "Aba 89234-2424",
            bancoIban: "12313 IBAN"

        }, {
            tipo: "Internacional",
            nombre: "María Soledad Iturra",
            alias: "Vendedor de Plásticos",
            pais: "Bolivia",
            direccion: "Huérfanos 680",
            creacion: "02/12/2016",
            bancoNombre: "Banco de Chile",
            bancoPais: "Chile",
            bancoDireccion: "Huérfanos 670",
            bancoCuenta: "003746",
            bancoMoneda: "Dólar",
            bancoSwift: "883349",
            bancoAba: "Aba 89234-2424",
            bancoIban: "12313 IBAN"
        }, {
            tipo: "Internacional",
            nombre: "Francisco Javier Prado",
            alias: "Empresa de Riquelme",
            pais: "Estados Unidos",
            direccion: "San Ignacio 279",
            creacion: "02/12/2016",
            bancoNombre: "Banco de Chile",
            bancoPais: "Chile",
            bancoDireccion: "Huérfanos 670",
            bancoCuenta: "003746",
            bancoMoneda: "Dólar",
            bancoSwift: "883349",
            bancoAba: "Aba 89234-2424",
            bancoIban: "12313 IBAN"
        }, {
            tipo: "Nacional",
            nombre: "Xiang Lee",
            alias: "Riego empresa",
            pais: "Chile",
            direccion: "Huérfanos 290",
            creacion: "02/12/2016",
            bancoNombre: "Banco de Chile",
            bancoPais: "Chile",
            bancoDireccion: "Huérfanos 670",
            bancoCuenta: "003746",
            bancoMoneda: "Dólar",
            bancoSwift: "883349",
            bancoAba: "Aba 89234-2424",
            bancoIban: "12313 IBAN"

        }, {
            tipo: "Internacional",
            nombre: "María Soledad Iturra",
            alias: "Vendedor de Plásticos",
            pais: "Bolivia",
            direccion: "Merced 690",
            creacion: "02/12/2016",
            bancoNombre: "Banco de Chile",
            bancoPais: "Chile",
            bancoDireccion: "Huérfanos 670",
            bancoCuenta: "003746",
            bancoMoneda: "Dólar",
            bancoSwift: "883349",
            bancoAba: "Aba 89234-2424",
            bancoIban: "12313 IBAN"
        }, {
            tipo: "Internacional",
            nombre: "Francisco Javier Prado",
            alias: "Empresa de Riquelme",
            pais: "Estados Unidos",
            direccion: "Marcoleta 201",
            creacion: "02/12/2016",
            bancoNombre: "Banco de Chile",
            bancoPais: "Chile",
            bancoDireccion: "Huérfanos 670",
            bancoCuenta: "003746",
            bancoMoneda: "Dólar",
            bancoSwift: "883349",
            bancoAba: "Aba 89234-2424",
            bancoIban: "12313 IBAN"
        },

    ];
});


// Controlador de listado de Usuarios
banchileApp.controller('tablaUsuarios', function ($scope) {

    $scope.sort = '+nombres';
    $scope.usuar = [

        {
            nombres: "Javier Ignacio",
            apellidoPaterno: "Muñoz",
            apellidoMaterno: "Parada",
            rut: "17.777.333-3",
            rol: "Digitador",
            producto: "Banchile Pay",
            creacion: "01/05/2016 13:50:00",
        }, {
            nombres: "Antonio Manuel",
            apellidoPaterno: "Duarte",
            apellidoMaterno: "López",
            rut: "12.333.333-4",
            rol: "Visador",
            producto: "Banchile Pay",
            creacion: "03/05/2016 17:44:00",
        }, {
            nombres: "Santiago Luis",
            apellidoPaterno: "Montenegro",
            apellidoMaterno: "Araneda",
            rut: "8.322.333-3",
            rol: "Digitador",
            producto: "Fondo Mutuo Cash",
            creacion: "15/06/2016 08:45:33",
        }
    ];
});
// Controlador de listado de Usuarios
//Editar Beneficiario
banchileApp.controller('EditarBeneficiarioCtrl', function ($scope) {

    $scope.beneficiario = {
        alias: 'Proveedor de Metales',
        nombre: 'Juan Pérez',
        pais: '2',
        direccion: 'Huérfanos 670',

        nombreBanco: 'Banco de Chile',
        direccionBanco: 'Huérfanos 670',
        paisBanco: '2',
        cuenta: '232133',
        monedaBanco: '1',
        codigoSwiftBanco: '882349',
        codigoAbaBanco: 'Aba 89234-2424',
        codigoIbanBanco: '12313 IBAN',

        nombreBanco2: 'Banco de Perú',
        direccionBanco2: 'Avenida 670',
        paisBanco2: '1',
        cuenta2: '232133',
        monedaBanco2: '2',
        codigoSwiftBanco2: '882349',
        codigoAbaBanco2: 'Aba 89234-2424',
        codigoIbanBanco2: '12313 IBAN',

        nombreBancoIntermediario: 'Banco de Chile',
        direccionBancoIntermediario: 'Huérfanos 670',
        paisBancoIntermediario: '2',
        cuentaIntermediario: '232133',
        codigoSwiftBancoIntermediario: '882349',
        codigoAbaBancoIntermediario: 'Aba 89234-2424',
        codigoIbanBancoIntermediario: '12313 IBAN',

        nombreBancoIntermediario2: 'Banco de Perú',
        direccionBancoIntermediario2: 'Avenida 670',
        paisBancoIntermediario2: '1',
        cuentaIntermediario2: '232133',
        codigoSwiftBancoIntermediario2: '882349',
        codigoAbaBancoIntermediario2: 'Aba 89234-2424',
        codigoIbanBancoIntermediario2: '12313 IBAN',
    };
});

banchileApp.controller('formularioCtrl', function ($scope) {
    var active = false;

    $scope.user = {
        monto: '460.000',
        monto2: '20.000',
        alaCartera: 'Cartera Controlada E',
        total: '480.080',
        total2: '620.000',
        total3: '320.000',
        usar: '462.020',
        alias: 'Pago a proveedor 1',
        pesos: '403.323',
        pesos2: '10.000.000',
        dolar2: '14.773,00',
        total0: '0',
        usd: 'USD',
    };
    $scope.setButton = function () {
        if (active == true) {
            active = false;
        } else {
            active = true;
        }
    }
    $scope.getState = function () {
        if (active) {
            return true;
        } else {
            return false;
        }
    }
    $scope.isActive = function () {
        if ($scope.pagarDesde == "2") {
            return true;
        } else {
            return false;
        }
    }

});

banchileApp.controller('SelectEmpresaCtrl', function ($scope) {

    $scope.select = {
        empresa: '1',
        cuenta: '2'
    };
});

//CONTROLADORES INSTRUCCIONES
// LISTADOS
banchileApp.controller('InstruccionesCtrl', function ($scope) {

    $scope.sort = '+servicio';
    $scope.instruccion = [

        {
            producto: "Banchile Pay",
            operacion: "Pago al exterior",
            fecha: "01/01/2016",
            id: "181871",
            monto: "$ 222.332",
            origen: "FM Cash serie a 003-1",
            destino: "Master Grow",
            fondo: "Internacional 009 (USD)",
            banco: "Banco de Perú 005667890-9",
            concepto: "20009 - Futura Transferencia",
            digitador: "Camilo Henríquez",
            estado: "Ejecutada"
        }, {
            producto: "Banchile Pay",
            operacion: "Pago al exterior",
            fecha: "01/03/2016",
            id: "332345",
            monto: "$ 15.247.001",
            origen: "FM Cash serie a 003-1",
            destino: "Proveedor de Telas",
            fondo: "Internacional 029 (USD)",
            banco: "Banco de Chile 016167809",
            concepto: "20009 - Futura Transferencia",
            digitador: "Camilo Henríquez",
            estado: "Por Autorizar"
        }, {
            producto: "Banchile Pay",
            operacion: "Pago al exterior",
            fecha: "01/04/2016",
            id: "218765",
            monto: "$ 1.854.290",
            origen: "FM Cash serie a 003-1",
            destino: "Master Grow",
            fondo: "Internacional 009 (USD)",
            banco: "Banco de Perú 005667890-9",
            concepto: "20009 - Futura Transferencia",
            digitador: "Camilo Henríquez",
            estado: "Por Autorizar"
        }, {
            producto: "Banchile Pay",
            operacion: "Pago al exterior",
            fecha: "01/06/2016",
            id: "181873",
            monto: "$ 1.247.001",
            origen: "FM Cash serie a 003-1",
            destino: "Master Grow",
            fondo: "Internacional 009 (USD)",
            banco: "Banco de Aus 678908",
            concepto: "20009 - Futura Transferencia",
            digitador: "Camilo Henríquez",
            estado: "Ejecutada"
        }, {
            producto: "Banchile Pay",
            operacion: "Pago al exterior",
            fecha: "21/06/2016",
            id: "218536",
            monto: "$ 822.332",
            origen: "FM Cash serie a 003-1",
            destino: "Maderas bosque",
            fondo: "Internacional 009 (USD)",
            banco: "Banco de Perú 005667890-9",
            concepto: "20009 - Futura Transferencia",
            digitador: "Camilo Henríquez",
            estado: "Por Autorizar"
        }, {
            producto: "Banchile Pay",
            operacion: "Pago al exterior",
            fecha: "01/08/2016",
            id: "218765",
            monto: "$ 16.247.001",
            origen: "FM Cash serie a 003-1",
            destino: "Proveedor de Telas",
            fondo: "Internacional 009 (USD)",
            banco: "Banco de Chile 00456678909",
            concepto: "20009 - Futura Transferencia",
            digitador: "Camilo Henríquez",
            estado: "Rechazada"
        }, {
            producto: "Banchile Pay",
            operacion: "Pago al exterior",
            fecha: "11/08/2016",
            id: "332345",
            monto: "$ 671.854.290",
            origen: "FM Cash serie a 003-1",
            destino: "Master Grow",
            fondo: "Internacional 009 (USD)",
            banco: "Banco de Perú 005667890-9",
            concepto: "20009 - Futura Transferencia",
            digitador: "Camilo Henríquez",
            estado: "Ejecutada"
        }, {
            producto: "Banchile Pay",
            operacion: "Pago al exterior",
            fecha: "31/08/2016",
            id: "218737",
            monto: "$ 1.247.001",
            origen: "FM Cash serie a 003-1",
            destino: "Maderas bosque",
            fondo: "Internacional 009 (USD)",
            banco: "Banco de Perú 005667890-9",
            concepto: "20009 - Futura Transferencia",
            digitador: "Camilo Henríquez",
            estado: "Por Autorizar"
        }, {
            producto: "Banchile Pay",
            operacion: "Pago al exterior",
            fecha: "01/09/2016",
            id: "332345",
            monto: "$ 21.247.001",
            origen: "FM Cash serie a 003-1",
            destino: "Maderas bosque",
            fondo: "Internacional 009 (USD)",
            banco: "Banco de Perú 005667890-9",
            concepto: "20009 - Futura Transferencia",
            digitador: "Camilo Henríquez",
            estado: "En Proceso"
        }, {
            producto: "Banchile Pay",
            operacion: "Pago al exterior",
            fecha: "01/10/2016",
            id: "181689",
            monto: "$ 4.222.332",
            origen: "FM Cash serie a 003-1",
            destino: "Proveedor de Telas",
            fondo: "Internacional 009 (USD)",
            banco: "Banco de Perú 005667890-9",
            concepto: "20009 - Futura Transferencia",
            digitador: "Camilo Henríquez",
            estado: "En Proceso"
        }
    ];
});

banchileApp.controller('EditarUsuarioCtrl', function ($scope, $filter) {

    var active = false;
    $scope.usuario = {
        apellidoMaterno: 'Parada',
        apellidoPaterno: 'Muñoz',
        beneficiotributario: 'No',
        cantidad: '544',
        cantidad2: '100',
        cartera: 'Agresiva',
        comision: '$46.000',
        comisionIva: '$20.000',
        cuentaCartera: '243566',
        cuentadelFondo: '14-1',
        destino: 'Cuenta Corriente',
        destino2: 'Retiro Casa Matriz',
        email: 'javier@gmail.com',
        estado: 'Asignado',
        estado2: 'Aprobado',
        fecha: '25/04/2017',
        fechaCobro: '25/04/2017',
        fechaSolicitud: '25/04/2017',
        fechaCurse: '25/04/2017',
        fechaSolicitud: '24/04/2017',
        fechaSolicitud2: '24/04/2017 11:15:00',
        fondo: 'Retorno Accionario Largo Plazo',
        mercado: 'Nacional',
        moneda: 'Dólar',
        nombre: 'Gonzalo Ahumada G.',
        nombres: 'Javier Ignacio',
        noperacion: '535547',
        numerocuotas: '12,0022',
        origen: 'Caja Internet',
        origen2: 'Botón de pago',
        plan: 'No',
        precio: '$35.976',
        precio2: '$644,00',
        remuneracion: 'No',
        rut: '17.777.333-3',
        serie: 'CCU',
        numero: '0991234567',
        monto: '313,0022',
        numberopcional: '0284567654'
      };

    var self = this;
    self.contacts1 = [{
        'id': 1,
        'fullName': 'Administrador',
        'lastName': 'Administrador: Encargado de la configuración del uso del Canal.',
        isDisabled: true
    }, {
        'id': 2,
        'fullName': 'Digitador',
        'lastName': 'Digitador: Su función es dar V.B. a las operaciones ingresadas por el Digitador.',
        isDisabled: false
    }, {
        'id': 3,
        'fullName': 'Visador',
        'lastName': 'Visador: Su función es autorizar pagos a tercero. Autoriza la transferencia de pago a proveedores.',
        isDisabled: false
    }, {
        'id': 4,
        'fullName': 'Autorizador',
        'lastName': 'Autorizador: Su función es registar las distintas operaciones en Canal.',
        isDisabled: false
    }];
    self.selectedId1 = 4;
    self.selectedUser1 = function () {
        return $filter('filter')(self.contacts1, {
            id: self.selectedId1
        })[0].lastName;
    };

    $scope.setButton = function () {
        if ($scope.active == true) {
            $scope.active = false;
        } else {
            $scope.active = true;
        }
    }

    $scope.getState = function () {
        if ($scope.active) {
            return true;
        } else {
            return false;
        }
    }
    $scope.data = {
      'cb1': 'Activo',
      isDisabled: true
    };

});

/// Controlador de listado de beneficiarios
// Controlador de  Empresa
// menu expandible
banchileApp.controller('expandCollapseCtrl', function ($scope) {
    $scope.active = true;
    $scope.active1 = true;
    $scope.active2 = true;
    $scope.active3 = true;
    $scope.active4 = true;
    $scope.active5 = true;
    $scope.active6 = true;
});
// fin menu expandible
banchileApp.controller('tablaEmpresas', function ($scope) {

    $scope.sort = '+nombre';
    $scope.empresa = [

        {
            nombre: "Agrícola Campo Lindo Ltda.",
            rut: "17.777.333-3",
            cuentaCorriente: "31233",
            creacion: "02/12/2016",
        }, {
            nombre: "Spa y Hoteles Buena Vida S.A.",
            rut: "32.333.693-4",
            cuentaCorriente: "31233",
            creacion: "02/12/2016",
        }, {
            nombre: "Shuang Lee Importaciones",
            rut: "24.553.366-6",
            cuentaCorriente: "456733",
            creacion: "04/06/2016",
        }, {
            nombre: "Casa del Músico Ltda.",
            rut: "14.783.789-2",
            cuentaCorriente: "400633",
            creacion: "02/06/2016",
        }, {
            nombre: "Mochi Constructores",
            rut: "09.180.009-4",
            cuentaCorriente: "146773",
            creacion: "02/06/2016",
        }, {
            nombre: "Pesquera Fish Corp.",
            rut: "54.482.127-9",
            cuentaCorriente: "4567226",
            creacion: "02/02/2016",
        }
    ];
});
// Editar Empresa
banchileApp.controller('EditarEmpresaCtrl', function ($scope) {

    $scope.empresa = {
        nombre: 'Agrícola Campo Lindo Ltda.',
        rut: '17.777.333-3',
        cuenta: '31233',
    };
});
// Buscador por fecha en listados (tablas)
banchileApp.controller('BuscaListadoCtrl', function ($scope) {

    $scope.miTexto = false;
    $scope.expanded = false;
    $scope.expanded2 = false;

    $scope.texto = function (event) {
        $scope.miTexto = !($scope.miTexto);
        $scope.expanded = !$scope.expanded;
        $scope.expanded2 = !$scope.expanded2;
        event.stopPropagation();
        $scope.miFecha = false;
        if ($scope.expanded = true) {
             return true;
        } else {
             return false;
        }
    };

    $scope.expander = function () {
        $scope.expanded = !$scope.expanded;
        $scope.expanded2 = false;

    };

    $scope.miFecha = false;
    $scope.fecha = function (event) {
        $scope.miFecha = !($scope.miFecha);
        event.stopPropagation();
        $scope.miTexto = false;
    };

});

//formularios Banchile Pay - pasos 1-2-3
banchileApp.controller('formularioCtrlDuplicado', function ($scope) {
    $scope.user = {

        monto: '$460.000',
        cartera: '$20.223.332',
        comision: '$0,25',
        alaCartera: 'Cartera Controlada E',
        monto2: '$2.000',
        total: '$480.080',
        total2: '$620.000',
        total3: '$320.000',
        usar: '$480.080',
        alias: 'Pago a proveedor 1',
        clave: '******',
        pesos: 'CLP  $403.323.206',
        pesos2: 'CLP  $10.000.000',
        dolar2: 'USD  $14.773,00',
        total0: '0',
        usd: 'USD',
    };


});
// FIN - Banchile Pay
// CONTROLADORES DE MODALES
banchileApp.controller('modalesCrtl', function ($scope, $mdDialog, $mdMedia) {
    $scope.status = '  ';
    $scope.customFullscreen = $mdMedia('xs') || $mdMedia('sm');
    $scope.showRechazado = function (ev) {
        var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
        $mdDialog.show({
            controller: DialogController,
            templateUrl: 'modales/error.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true,
            fullscreen: useFullScreen
        })

        $scope.$watch(function () {
            return $mdMedia('xs') || $mdMedia('sm');
        }, function (wantsFullScreen) {
            $scope.customFullscreen = (wantsFullScreen === true);
        });
    };
    $scope.showAdvertencia = function (ev) {
        var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
        $mdDialog.show({
            controller: DialogController,
            templateUrl: 'modales/advertencia.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true,
            fullscreen: useFullScreen
        })

        $scope.$watch(function () {
            return $mdMedia('xs') || $mdMedia('sm');
        }, function (wantsFullScreen) {
            $scope.customFullscreen = (wantsFullScreen === true);
        });
    };
    $scope.showAutorizado = function (ev) {
        var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
        $mdDialog.show({
            controller: DialogController,
            templateUrl: 'modales/exito.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true,
            fullscreen: useFullScreen
        })

        $scope.$watch(function () {
            return $mdMedia('xs') || $mdMedia('sm');
        }, function (wantsFullScreen) {
            $scope.customFullscreen = (wantsFullScreen === true);
        });
    };
    $scope.showInversionRealizada = function (ev) {
        var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
        $mdDialog.show({
            controller: DialogController,
            templateUrl: 'modales/InversionRealizada.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true,
            fullscreen: useFullScreen
        })

        $scope.$watch(function () {
            return $mdMedia('xs') || $mdMedia('sm');
        }, function (wantsFullScreen) {
            $scope.customFullscreen = (wantsFullScreen === true);
        });
    };
    $scope.showDatosRegistrados = function (ev) {
        var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
        $mdDialog.show({
            controller: DialogController,
            templateUrl: 'modales/DatosRegistrados.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true,
            fullscreen: useFullScreen
        })

        $scope.$watch(function () {
            return $mdMedia('xs') || $mdMedia('sm');
        }, function (wantsFullScreen) {
            $scope.customFullscreen = (wantsFullScreen === true);
        });

        $scope.answer = function(answer) {
          $mdDialog.hide(answer);
        };
    };
    $scope.showDatosActualizados = function (ev) {
        var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
        $mdDialog.show({
            controller: DialogController,
            templateUrl: 'modales/DatosActualizados.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true,
            fullscreen: useFullScreen
        })

        $scope.$watch(function () {
            return $mdMedia('xs') || $mdMedia('sm');
        }, function (wantsFullScreen) {
            $scope.customFullscreen = (wantsFullScreen === true);
        });

        $scope.answer = function(answer) {
          $mdDialog.hide(answer);
        };
    };
    $scope.showFirmaContrato = function (ev) {
        var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
        $mdDialog.show({
            controller: DialogController,
            templateUrl: 'modales/FirmaContrato.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true,
            fullscreen: useFullScreen
        })

        $scope.$watch(function () {
            return $mdMedia('xs') || $mdMedia('sm');
        }, function (wantsFullScreen) {
            $scope.customFullscreen = (wantsFullScreen === true);
        });

        $scope.answer = function(answer) {
          $mdDialog.hide(answer);
        };
    };
    $scope.showDatosCompletar = function (ev) {
        var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
        $mdDialog.show({
            controller: DialogController,
            templateUrl: 'modales/DatosCompletar.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true,
            fullscreen: useFullScreen
        })

        $scope.$watch(function () {
            return $mdMedia('xs') || $mdMedia('sm');
        }, function (wantsFullScreen) {
            $scope.customFullscreen = (wantsFullScreen === true);
        });

        $scope.answer = function(answer) {
          $mdDialog.hide(answer);
        };
        $scope.doTheBack = function() {
          window.history.back();
        };
    };
    $scope.showAutorizarBeneficiario = function (ev) {
        var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
        $mdDialog.show({
            controller: DialogController,
            templateUrl: 'modales/AutorizarBeneficiario.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true,
            fullscreen: useFullScreen
        })

        $scope.$watch(function () {
            return $mdMedia('xs') || $mdMedia('sm');
        }, function (wantsFullScreen) {
            $scope.customFullscreen = (wantsFullScreen === true);
        });

        $scope.answer = function(answer) {
          $mdDialog.hide(answer);
        };
        $scope.doTheBack = function() {
          window.history.back();
        };
    };
    $scope.showFondosDisponiblesAporte = function (ev) {
        var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
        $mdDialog.show({
            controller: DialogController,
            templateUrl: 'modales/FondosDisponiblesAporte.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true,
            fullscreen: useFullScreen
        })
        $scope.$watch(function () {
            return $mdMedia('xs') || $mdMedia('sm');
        }, function (wantsFullScreen) {
            $scope.customFullscreen = (wantsFullScreen === true);
        });
    };
    $scope.showFondosDisponiblesRescate = function (ev) {
        var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
        $mdDialog.show({
            controller: DialogController,
            templateUrl: 'modales/FondosDisponiblesRescate.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true,
            fullscreen: useFullScreen
        })
        $scope.$watch(function () {
            return $mdMedia('xs') || $mdMedia('sm');
        }, function (wantsFullScreen) {
            $scope.customFullscreen = (wantsFullScreen === true);
        });
    };
    $scope.showTodasCarteras = function (ev) {
        var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
        $mdDialog.show({
            controller: DialogController,
            templateUrl: 'modales/TodasCarteras.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true,
            fullscreen: useFullScreen
        })

        $scope.hideCartera = function () {
            $mdDialog.hide();
          }

        $scope.$watch(function () {
            return $mdMedia('xs') || $mdMedia('sm');
        }, function (wantsFullScreen) {
            $scope.customFullscreen = (wantsFullScreen === true);
        });
    };
    $scope.showBotonPago = function (ev) {
        var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
        $mdDialog.show({
            controller: DialogController,
            templateUrl: 'modales/BotonPago.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true,
            fullscreen: useFullScreen
        })

        $scope.hideCaja = function () {
           $mdDialog.hide();
         }

        $scope.$watch(function () {
            return $mdMedia('xs') || $mdMedia('sm');
        }, function (wantsFullScreen) {
            $scope.customFullscreen = (wantsFullScreen === true);
        });
    };
});
function DialogController($scope, $mdDialog) {
    $scope.hide = function () {
        $mdDialog.hide();
    };
    $scope.cancel = function () {
        $mdDialog.cancel();
    };
    $scope.answer = function (answer) {
        $mdDialog.hide(answer);
    };

}
//TOGGLE
banchileApp.controller('instruccionesVentanaCtrl', function ($scope) {


    $scope.btnAutorizacion = true;
    $scope.btnConfirmacion = false;
    $scope.cancelar = function (event) {
        $scope.autorizar = false;
        $scope.btnConfirmacion = false;
        $scope.rechazar = false;
        $scope.btnAutorizacion = true;
        event.stopPropagation();
    };

    $scope.autorizadores = false;
    $scope.verAutorizadores = function (event) {
        $scope.autorizadores = !($scope.autorizadores);
        event.stopPropagation();
    };

    $scope.verRemuneracion = function (event) {
        $scope.remuneracion = !($scope.remuneracion);
        event.stopPropagation();
    };

    $scope.autorizadores = false;
    $scope.verMejoresofertas = function (event) {
        $scope.mejoresofertas = !($scope.mejoresofertas);
        event.stopPropagation();
    };



    $scope.autorizar = false;
    $scope.verForAutorizar = function (event) {
        $scope.btnAutorizacion = false;
        $scope.btnConfirmacion = true;
        $scope.autorizar = !($scope.autorizar);
        event.stopPropagation();
    };


    $scope.rechazar = false;
    $scope.verForRechazar = function (event) {
        $scope.btnAutorizacion = false;
        $scope.btnConfirmacion = true;
        $scope.rechazar = !($scope.rechazar);
        event.stopPropagation();
    };
});

/// INICIO Patrimonio
banchileApp.controller('tablaPatrim', function ($scope) {

    $scope.sort = '+';
    $scope.patrimonio = [

        {
            producto: "90% Fondos Mutuos en CLP",
            monto: "$36.000.000"
        }, {
            producto: "5% Fondos Mutuos en USD",
            monto: "USD $5.000,00"
        }, {
            producto: "5% Fondos Mutuos en EUR",
            monto: "€ 30.000,00"
        }
    ];
    $scope.acciones = [

        {
            porcent: "35%",
            producto: "MICROSOFT",
            monto: "$18.000.000"
        },
    ];
    $scope.rentaf = [

        {
            porcent: "15%",
            producto: "Renta Fija en CLP",
            monto: "$6.000.000"
        }

    ];
    $scope.totalclp1 = [

        {
            producto: "Fondos Mutuos",
            monto: "$36.000.000"
        }

    ];
    $scope.totalclp2 = [

        {
            producto: "Acciones",
            monto: "$18.000.000"
        }

    ];
    $scope.totalclp3 = [

        {
            producto: "Renta Fija",
            monto: "$6.000.000"
        }

    ];
    $scope.fondom = [

        {
            porcent: "1%",
            producto: "Balanceado",
            monto: "$12.600.000"
        }, {
            porcent: "1%",
            producto: "Deuda de Largo Plazo",
            monto: "$5.400.000"
        }, {
            porcent: "0,5%",
            producto: "Deuda de Largo Plazo",
            monto: "$7.200.000"
        }, {
            porcent: "0,5%",
            producto: "Money Market",
            monto: "$10.800.000"
        }

    ];

});

banchileApp.controller('tablaFondoMutuos', function ($scope) {

    $scope.sort = '+';
    $scope.fondom = [

        {
            porcent: "0,1%",
            product: "Retorno Accionario",
            mont: "$12.600.000"
        }, {
            porcent: "0,3%",
            product: "Renta Futura D",
            mont: "$5.400.000"
        }, {
            porcent: "0,1%",
            product: "Asiático Accionario",
            mont: "$7.200.000"
        }

    ];
});

banchileApp.controller('tablaInterior', function ($scope) {

    $scope.sort = '+';
    $scope.fondom = [

        {
            porcent: "0,1%",
            product: "Renta Futura D",
            mont: "$0"
        }, {
            porcent: "0,3%",
            product: "Renta Futura D",
            mont: "$5.400.000"
        }, {
            porcent: "0,1%",
            product: "Asiático Accionario C",
            mont: "$7.200.000"
        }

    ];
});

banchileApp.controller('tablaPatrimonio', function ($scope) {

    $scope.sort = '+porcent';
    $scope.patrim = [{
        porcent: "50%",
        nemo: "Retorno Accionario Largo Plazo C",
        vcuota: "$307.985",
        ncuenta: "14.601",
        ncuotas: "76-3",
        variac: "76-3",
        monto: "$18.000.000",

    }, {
        porcent: "35%",
        nemo: "Renta Futura D",
        vcuota: "$307.985",
        ncuenta: "14-1 ",
        ncuotas: "$138.434",
        variac: "76-3",
        monto: "$12.603345345000"
    }, {
        porcent: "15%",
        nemo: "Asiático Accionario C",
        vcuota: "$307.985",
        ncuenta: "12-5",
        ncuotas: "$138.434",
        variac: "76-3",
        monto: "$5.400.000"
    }];
    $scope.accin = [{
        porcent: "50%",
        familia: "Aple",
        precio: "$1.350.758",
        dispon: "$307.985",
        garant: "$767.543",
        bloq: "$414.601",
        variac: "0,52%",
        monto: "$18.000.000",
        color: "red"
    }, {
        porcent: "35%",
        familia: "Microsoft",
        precio: "$1.350.758",
        dispon: "$307.985",
        garant: "$767.543",
        bloq: "$123.345",
        variac: "0,23%",
        monto: "$12.600.000"
    }, {
        porcent: "15%",
        familia: "LAN",
        precio: "$1.350.758",
        dispon: "$307.985",
        garant: "$767.543",
        bloq: "$376.543",
        variac: "0,14%",
        monto: "$5.400.000"
    }];

});

//solicitud aporte fondos mutuos
banchileApp.controller('solicFondoM', function ($scope) {
    $scope.sort = '+';
    $scope.solicfm = [{
        fondo: "Disponible",
        ncuenta: "$30.985,0979",
        moneda: "Pesos Chilenos",
        monto: "No tiene"
    }];
    $scope.descargarCartola = function (event){



    }


});

banchileApp.controller('VerCaja', function ($scope) {

    $scope.verdeposito = false;
    $scope.deposito = function (event) {
        $scope.verdeposito = !($scope.verdeposito);
        event.stopPropagation();
        $scope.verretiro = false;
    };

    $scope.verretiro = false;
    $scope.retiro = function (event) {
        $scope.verretiro = !($scope.verretiro);
        event.stopPropagation();
        $scope.verdeposito = false;
    };
});
//Fondos Mutuos PERSONAS
banchileApp.controller('tablaFFMMpersonas', function ($scope) {

  $scope.isDisabled = true;

    $scope.sort = '+';
    $scope.fondom = [

        {
            porcent: "",
            producto: "Europeo Estructurado Nivel 90",
            dias: "0,33%",
            ano: "0,33%",
            riesgo: "R4",
            cuota: "$30.985",
            monto: "$2.005.000"
        }, {
            porcent: "",
            producto: "Inversionista Calificado Acciones Nacionales",
            dias: "0,67%",
            ano: "0,67%",
            riesgo: "R5",
            cuota: "$24.678",
            monto: "$233.324.000"
        }

    ];
    $scope.fondomRecomend = [

        {
            porcent: "",
            producto: "Europeo Estructurado Nivel 90",
            dias: "0,33%",
            ano: "0,33%",
            riesgo: "R4",
            cuota: "",
            monto: ""
        }, {
            porcent: "",
            producto: "Inversionista Calificado Acciones Nacionales",
            dias: "0,67%",
            ano: "0,67%",
            riesgo: "R5",
            cuota: "",
            monto: ""
        }

    ];
    $scope.cartera = [

        {
            porcent: "15%",
            producto: "Capital efectivo",
            cuenta: "14-1",
            dias: "0,33%",
            ano: "0,33%",
            riesgo: "R4",
            cuota: "$30.985",
            cantidad: "14.601",
            monto: "$600.000"
        }, {
            porcent: "15%",
            producto: "Cash Serie C",
            cuenta: "14-1",
            dias: "0,33%",
            ano: "0,33%",
            riesgo: "R4",
            cuota: "$30.985",
            cantidad: "14.601",
            monto: "$600.000"
        }, {
            porcent: "15%",
            producto: "Europa Desarrollada nivel 10",
            cuenta: "14-1",
            dias: "0,33%",
            ano: "0,33%",
            riesgo: "R4",
            cuota: "$30.985",
            cantidad: "14.601",
            monto: "$600.000"
        }
    ];

    $scope.carteraActiva = [{
            producto: "Cartera Protegida",
            dias: "0,33%",
            monto: ""
        }, {
            producto: "Cartera Defensiva",
            dias: "0,33%",
            monto: ""
        },
        {
            producto: "Cartera Moderada",
            dias: "0,33%",
            monto: "",
        },
        {
            producto: "Cartera Equilibrada",
            dias: "0,33%",
            monto: "",
        },
        {
            producto: "Cartera Potenciada",
            dias: "0,33%",
            monto: "",
        },
    ];
    $scope.carteraActivaCuenta = [{
        producto: "Cartera Agresiva",
        dias: "0,33%",
        monto: "$100.117.000.000",
    }];

    $scope.cuentaActiva = [{
            cuenta: "Cuenta 11-2",
            dias: "",
            monto: "$17.000.000"
        }, {
            cuenta: "Cuenta 14-2",
            dias: "",
            monto: "$100.000.000"
        },

    ];

    $scope.MiCartera = [{
            producto: "Cartera Controlada",
            dias: "0,33%",
            monto: "$117.000.000",
        },

    ];
    $scope.todosFondos = [

        {
            porcent: "",
            producto: "Europeo Estructurado Nivel 90",
            dias: "0,33%",
            ano: "0,33%",
            riesgo: "R4",
            cuota: "$30.985"
        }, {
            porcent: "",
            producto: "Inversionista Calificado Acciones Nacionales",
            dias: "0,67%",
            ano: "0,67%",
            riesgo: "R5",
            cuota: "$24.678"
        }

    ];

});
// FFMM Ayuda a encontrar fondos
banchileApp.controller('VerAyudaFFMM', function ($scope, $mdDialog) {
   $scope.mostrarProducto=true;
   $scope.mostrarSeleccion = function () {
      angular.element($("#formularioCtrl")).scope().mostrarProducto = true;
      $mdDialog.hide();

   };

    $scope.verFondos = false;
    $scope.todosFondos = function (event) {
        $scope.verFondos = !($scope.verFondos);
        event.stopPropagation();
        $scope.ayudaFondos = false;
    };

    $scope.ayudaFondos = true;
    $scope.ayuda = function (event) {
        $scope.ayudaFondos = !($scope.ayudaFondos);
        event.stopPropagation();
        $scope.verFondos = false;
    };

    $scope.hideExitoEmpresa = function () {
      $mdDialog.hide();
    }

    $scope.hidecarteraActiva = function () {
      $mdDialog.hide();
    }

    $scope.hideCaja = function () {
      $mdDialog.hide();
    }


    $scope.isActive = function () {
      if ($scope.pagarDesde == "1") {
           return true;
      } else {
           return false;
      }
  }
  $scope.isActive = function () {
     if ($scope.pagarDesde == "2") {
          return true;
     } else {
          return false;
     }
}
  $scope.isActive = function () {
     if ($scope.pagarDesde == "3") {
          return true;
     } else {
          return false;
     }
}


});

banchileApp.controller('origendeFondos', function($scope){
   $scope.show = false;
   $scope.text = "";
   $scope.test = function (){
      $scope.show = true;

   };
});


// boton favoritos

// todos los FFMMs
// LISTADO BENEFICIARIOS
banchileApp.controller('tablaUsuariosnew', function ($scope) {

    $scope.sort = '+nombre';
    $scope.benef = [

        {
            nombres: "Javier Ignacio",
            apellidoPaterno: "Muñoz",
            apellidoMaterno: "Parada",
            rut: "17.777.333-3",
            telefono: "02-4322411",
            email: "e.herniquez@banchile.cl",
            creacion: "01/12/2016",
        },
        {
            nombres: "Matías",
            apellidoPaterno: "Cuevas",
            apellidoMaterno: "Retamales",
            rut: "12.345.678-0",
            telefono: "02-2233224",
            email: "matias.cuevas@banchile.cl",
            creacion: "02/12/2016",
        },
        {
            nombres: "Camilo",
            apellidoPaterno: "Cienfuegos",
            apellidoMaterno: "Rivas",
            rut: "8.765.432-1",
            telefono: "02-7444666",
            email: "c.cienfuegos@banchile.cl",
            creacion: "03/12/2016",
        },
        {
            nombres: "Antonio",
            apellidoPaterno: "Fernandez",
            apellidoMaterno: "Olmos",
            rut: "9.765.432-1",
            telefono: "02-9300222",
            email: "antonio.gernandez@banchile.cl",
            creacion: "04/12/2016",
        },
        {
            nombres: "Julia",
            apellidoPaterno: "Matamala",
            apellidoMaterno: "Rios",
            rut: "8.765.432-5",
            telefono: "02-4234423",
            email: "j.matamala@banchile.cl",
            creacion: "05/12/2016",
        },
        {
            nombres: "Antonia",
            apellidoPaterno: "Sierra",
            apellidoMaterno: "Campos",
            rut: "17.656.354-5",
            telefono: "02-2233666",
            email: "antonia.campos@banchile.cl",
            creacion: "06/12/2016",
        },


    ];
});
//CONTROLADOR SWIPER & GRAFICO EN WIDGET PATRIMONIO
banchileApp.directive('hcChart', function () {
    Highcharts.setOptions({
        lang: {
            months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
            shortMonths: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
            weekdays: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
            contextButtonTitle: "Menu",
            downloadJPEG: "Descargar imagen JPEG",
            downloadPDF: "Descargar documento PDF",
            downloadPNG: "Descargar imagen PNG ",
            downloadSVG: "Descargar imagen SVG",
            drillUpText: "Volver a {series.name}",
            loading: "Cargando...",
            noData: "No exites datos",
            printChart: "Imprimir Gráfico",
            resetZoom: "Restablecer zoom",
            resetZoomTitle: "Restablecer zoom nivel 1:1"
        },
        credits: {
            enabled: false
        }
    });

    return {
        restrict: 'E',
        template: '<div></div>',
        scope: {
            options: '=options'
        },
        link: function (scope, element) {

            scope.$watch('options', function () {
                var options = scope.options;
                Highcharts.chart(element[0], options);

            });
        }
    };

})
banchileApp.controller('graficoWidgetPatrimonio', function ($scope, $timeout, $window) {

    var w = angular.element($window);

    $scope.parametrosWidgetPatrimonio = {

        slidesPerView: 1,
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationClickable: true,
        scrollContainer: true,
        freeMode: false,


    };

    //EVENTOS SWIPER
    $scope.swiper = {};
    $scope.onReadySwiper = function (swiper) {

        $timeout(function () {
            $scope.visibilidadGrafico = true;
        }, 100);

        $scope.swiper = swiper;
        var tipoDispositivo = '';
    };



    //DATA GRAFICOS & SWIPER
    $scope.slider = {};
    $scope.productos = {};


    var nombreProductos = [
        "Fondos Mutuos",
        "Acciones",
        "Pactos",
        "Simultáneas",
        "Pershing"
    ];

    var montosProductos = [
        "3.123.678",
        "2.888.980",
        "7.990.009",
        "6.008.334",
        "4.001.113",
    ];

    var porcentajeProductos = [
        "40%",
        "55%",
        "35%",
        "67%",
        "34%",
    ];

    var fechaProductos = [
        "08/11/2016",
        "08/11/2016",
        "08/11/2016",
        "08/11/2016",
        "08/11/2016",
    ];

    var data = [];

    for (var i = 0; i < 5; i++) {

        var opcionesGrafico = {

            chart: {
                spacingBottom: 0,
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie',
                height: 220,
                width: 260,
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                stroke: 'rgba(255, 255, 255, 0.1)',

            },


            title: {
                text: ''
            },

            subTitle: {
                text: ''
            },


            tooltip: {
                enabled: true,
                followPointer: true,
                followTouchMove: true,
                useHTML: true,
                headerFormat: '<div class="tooltip--headerFormat">{point.key}</div>',
                pointFormat: '<b class="tooltip--headerFormat">{point.y}</b>',
                valueSuffix: ' %',
                shared: true,
                backgroundColor: '#FFFFFF',
                style: {
                    opacity: 1
                }
            },

            title: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            plotOptions: {
                pie: {
                    shadow: false,
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    center: ['50%', '50%'],

                },

                series: {

                    line: {
                        animation: false
                    },

                    states: {
                        hover: {
                            enabled: false
                        }
                    }
                }
            },

            credits: {
                enabled: false
            },

            series: [{
                type: 'pie',
                name: 'Porcentaje',
                size: '95%',
                innerSize: '94%',
                data: [{
                        name: 'Fondos Mutuos',
                        color: '#5BABBF',
                        y: 50,

                    },

                    {
                        name: '',
                        color: '#E6E9EE',
                        y: 20,

                    }

                ]
            }]

        };





        opcionesGrafico.chart.title = Math.floor((Math.random() * 100) + 1) + '%';

        var producto = {
            idProducto: i, //REEMPLAZAR POR UN ID VALIDO
            nombre: nombreProductos[i],
            monto: montosProductos[i],
            porcentaje: porcentajeProductos[i],
            fecha: fechaProductos[i],
            opcionesGrafico: opcionesGrafico,

        };

        data.push(producto);
    }
    $scope.productos = data;

});

banchileApp.controller('contenedorScrollme', function ($scope, screenSize, $timeout) {

    $scope.isMobile = screenSize.on('xs, sm', function (isMatch) {
        $scope.isMobile = isMatch;
    });


    $scope.productoScroll = [{
            "nombre": "FONDOS MUTUOS",
            "monto": "3.123.678",
            "porcentaje": "40%",
            "barra": $scope.progressval
        }
        // {
        //     "nombre": "ACCIONES",
        //     "monto": "3.123.678",
        //     "porcentaje": "35%",
        //     "barra": $scope.progressval
        // },
        // {
        //     "nombre": "CARTERA ACTIVA",
        //     "monto": "3.123.678",
        //     "porcentaje": "15%",
        //     "barra": $scope.progressval
        // },
        // {
        //     "nombre": "CAJA INTERNET",
        //     "monto": "3.123.678",
        //     "porcentaje": "10%",
        //     "barra": $scope.progressval
        // },
        // {
        //     "nombre": "FONDOS MUTUOS",
        //     "monto": "3.123.678",
        //     "porcentaje": "40%",
        //     "barra": $scope.progressval
        // },
        // {
        //     "nombre": "FONDOS MUTUOS",
        //     "monto": "3.123.678",
        //     "porcentaje": "40%",
        //     "barra": $scope.progressval
        // },
        // {
        //     "nombre": "FONDOS MUTUOS",
        //     "monto": "3.123.678",
        //     "porcentaje": "40%",
        //     "barra": $scope.progressval
        // },
        // {
        //     "nombre": "FONDOS MUTUOS",
        //     "monto": "3.123.678",
        //     "porcentaje": "40%",
        //     "barra": $scope.progressval
        // },
        // {
        //     "nombre": "FONDOS MUTUOS",
        //     "monto": "3.123.678",
        //     "porcentaje": "40%",
        //     "barra": $scope.progressval
        // },
    ];



    $timeout(function () {
        $scope.$broadcast("rebuild:me");
    }, 1000);

});
// añadido por gonzalo graficos cartera
banchileApp.controller('contenedorScrollme2', function ($scope, screenSize, $timeout) {

    $scope.isMobile = screenSize.on('xs, sm', function (isMatch) {
        $scope.isMobile = isMatch;
    });

    $scope.productoScroll = [{
            "nombre": "Ahorro Serie E",
            "familia": "Money Market",
            "porcentaje": "22,55%",
            "barra": $scope.progressval
        },
        {
            "nombre": "Depósito Serie E",
            "familia": "Deuda",
            "porcentaje": "22,55%",
            "barra": $scope.progressval
        },
        {
            "nombre": "Deuda Estatal UF 3-5 años..",
            "familia": "Deuda",
            "porcentaje": "4,95%",
            "barra": $scope.progressval
        },
    ];

    $scope.productoScroll2 = [

        {
            "nombre": "Horizonte Serie E",
            "familia": "Deuda",
            "porcentaje": "24,22%",
            "barra": $scope.progressval

        },
        {
            "nombre": "Retorno LP UF Serie E",
            "familia": "Balanceado",
            "porcentaje": "7,27%",
            "barra": $scope.progressval
        },
        {
            "nombre": "Utilidades Serie E",
            "familia": "Accionario",
            "porcentaje": "10,94%",
            "barra": $scope.progressval
        },
    ];

    $timeout(function () {
        $scope.$broadcast("rebuild:me");
    }, 1000);

});

banchileApp.controller('progress', function ($scope, $interval) {


    $scope.progressval = 0;
    $scope.stopinterval = null;

    $scope.updateProgressbar = function () {
        startprogress();
    }

    function startprogress() {
        $scope.progressval = 0;

        if ($scope.stopinterval) {
            $interval.cancel($scope.stopinterval);
        }

        $scope.stopinterval = $interval(function () {
            $scope.progressval = $scope.progressval + 5;
            if ($scope.progressval >= 40) {
                $interval.cancel($scope.stopinterval);
                return;
            }
        }, 100);
    }
    startprogress();
});

banchileApp.controller('barraGraficoAsesoria', function ($scope) {

    Highcharts.chart('barraGraficoAsesoria', {
        chart: {
            type: 'bar',
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            height: 50,
            spacingBottom: 0,
            spacingTop: 0,
            spacingLeft: 0,
            spacingRight: 0,

        },


        title: {
            text: ''
        },



        subTitle: {
            text: ''
        },


        tooltip: {
            enabled: false,
            followPointer: false,
            followTouchMove: false,
        },


        exporting: {
            enabled: false
        },



        yAxis: {
            gridLineWidth: 0,
            minorGridLineWidth: 0,
            min: 0,
            max: 100,
            useHTML: true,
            showInLegend: false,




        },

        xAxis: {
            floor: 0,
            ceiling: 100,
            categories: [''],
            gridLineWidth: 0,
            minorGridLineWidth: 0,
            useHTML: true,
            width: 2,
            showInLegend: false,



        },


        legend: {
            reversed: false
        },

        plotOptions: {
            series: {
                stacking: 'normal',
                showInLegend: false,
                animation: {
                    duration: 2000
                }


            }



        },


        series: [

            {
                data: [100],
                color: '#E6E9EE',
                showInLegend: false,
                animation: false,
                borderWidth: 0,

                states: {
                    hover: {
                        enabled: false
                    }
                }


            },


            {
                data: [20],
                animation: {
                    duration: 1000
                },
                color: '#EAA000',
                showInLegend: false,
                borderWidth: 0,
                states: {
                    hover: {
                        enabled: false
                    }
                }
            },


            {

                data: [30],
                animation: {
                    duration: 500
                },
                color: '#69B4C5',
                showInLegend: false,
                borderWidth: 0,
                states: {
                    hover: {
                        enabled: false
                    }
                }
            },

        ]
    });
});
banchileApp.controller('swipeWidgetRecomendacion', function ($scope) {

    var swiper = new Swiper('#swipeWidgetRecomendacion--swiper-container', {
        pagination: '#swipeWidgetRecomendacion-pagination',
        paginationClickable: true,
        slidesPerView: 1,
        spaceBetween: 50,

    });

});
banchileApp.controller('graficoGeneralWidgetPatrimonio', function ($scope) {
    Highcharts.chart('graficoGeneralWidgetPatrimonio', {
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          type: 'pie',
          height: 220,
          width: 220,
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          stroke: 'rgba(255, 255, 255, 0.1)',
          marginBottom: 1,
          marginLeft: 0,
          marginRight: 0,
          marginTop: 0,
          paddingBottom: 1,
          paddingLeft: 0,
          paddingRight: 0,
          paddingTop: 0,
        },
        title: {
            text: ''
        },

        subTitle: {
            text: ''
        },


        tooltip: {
            enabled: true,
            followPointer: true,
            followTouchMove: true,
            useHTML: true,
            headerFormat: '<div class="tooltip--headerFormat">{point.key}</div>',
            pointFormat: '<b class="tooltip--headerFormat">{point.y}</b>',
            valueSuffix: ' %',
            shared: true,
            backgroundColor: '#FFFFFF',
            style: {
                opacity: 1
            }
        },

        title: {
            enabled: false
        },

        exporting: {
            enabled: false
        },

        plotOptions: {
            pie: {
                shadow: false,
                allowPointSelect: false,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false,


                },
                center: ['50%', '50%'],

            },

            series: {

                animation: {
                    duration: 1000,
                    easing: 'easeOutBounce'
                },

                states: {
                    hover: {
                        enabled: false
                    }
                }
            }
        },

        credits: {
            enabled: false
        },

        series: [{
            type: 'pie',

            size: '95%',
            innerSize: '94%',


            data: [


                {
                    name: 'Fondos Mutuos',
                    color: '#5BABBF',
                    y: 60,
                    borderWidth: 0,
                },

                {
                    name: 'Acciones',
                    color: '#336A9B',
                    y: 20,
                    borderWidth: 0,

                },


                {
                    name: 'Pactos',
                    color: '#EAA000',
                    y: 10,
                    borderWidth: 0,

                },


                {
                    name: 'Simultáneas',
                    color: '#babaa4',
                    y: 9,
                    borderWidth: 0,

                },


                {
                    name: 'Otros',
                    color: '#4A4A4A',
                    y: 1,
                    borderWidth: 0,

                },

            ]
        }]

    });
    //EVENTOS SWIPER
    $scope.swiper = {};
    $scope.onReadySwiper = function (swiper) {
        $timeout(function () {
            $scope.visibilidadGrafico = true;
        }, 100);
        $scope.swiper = swiper;
        var tipoDispositivo = '';
    };
});

banchileApp.controller('graficoPatrimonio', function ($scope, $timeout, $window) {
    var w = angular.element($window);
    $scope.parametrosPatrimonio = {

        slidesPerView: 5,
        autoResize: true,
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationClickable: true,
        scrollContainer: true,
        freeMode: false,
        breakpoints: {
            727: {
                slidesPerView: 1,
                spaceBetween: 1,

            },

            991: {
                slidesPerView: 3,
                spaceBetween: 1,

            },

            1199: {
                slidesPerView: 4,
                spaceBetween: 0,

            },


        }


    };
    //EVENTOS SWIPER
    $scope.swiper = {};
    $scope.onReadySwiper = function (swiper) {
        $timeout(function () {
            $scope.visibilidadGrafico = true;
        }, 100);
        $scope.swiper = swiper;
        var tipoDispositivo = '';
    };
    //DATA GRAFICOS & SWIPER
    $scope.slider = {};
    $scope.productos = {};

    var nombreProductos = [
        "Fondos Mutuos",
        "Acciones",
        "Pactos",
        "Simultáneas",
        "Pershing"
    ];

    var montosProductos = [
        "3.123.678",
        "2.888.980",
        "7.990.009",
        "6.008.334",
        "4.001.113",
    ];

    var porcentajeProductos = [
        "40%",
        "55%",
        "35%",
        "67%",
        "34%",
    ];

    var fechaProductos = [
        "08/11/2016",
        "08/11/2016",
        "08/11/2016",
        "08/11/2016",
        "08/11/2016",
    ];

    var data = [];

    for (var i = 0; i < 5; i++) {
        var opcionesGrafico = {

            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                type: 'pie',
                height: 220,
                width: 220,
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                stroke: 'rgba(255, 255, 255, 0.1)',
                marginBottom: 1,
                marginLeft: 0,
                marginRight: 0,
                marginTop: 0,
                paddingBottom: 1,
                paddingLeft: 0,
                paddingRight: 0,
                paddingTop: 0,


            },


            title: {
                text: ''
            },

            subTitle: {
                text: ''
            },


            tooltip: {
                enabled: false,
                followPointer: false,
                followTouchMove: false,
            },

            title: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            plotOptions: {
                pie: {
                    shadow: false,
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },


                },

                series: {

                    line: {
                        animation: false
                    },

                    states: {
                        hover: {
                            enabled: false
                        }
                    }
                }
            },

            credits: {
                enabled: false
            },


            series: [{
                type: 'pie',
                name: 'Porcentaje',
                size: '95%',
                innerSize: '94%',
                data: [{

                        name: 'Fondos Mutuos',
                        color: '#5BABBF',
                        y: 50,

                    },

                    {
                        name: '',
                        color: '#E6E9EE',
                        y: 20,

                    }

                ]
            }]

        };


        opcionesGrafico.chart.title = Math.floor((Math.random() * 100) + 1) + '%';

        var producto = {
            idProducto: i, //REEMPLAZAR POR UN ID VALIDO
            nombre: nombreProductos[i],
            monto: montosProductos[i],
            porcentaje: porcentajeProductos[i],
            fecha: fechaProductos[i],
            opcionesGrafico: opcionesGrafico,

        };

        data.push(producto);
    }
    $scope.productos = data;

});
//informes
banchileApp.controller('BuscaNEWListadoCtrl', function ($scope) {

    $scope.miTextoNEW = false;
    $scope.textoNEW = function (event) {
        $scope.miTextoNEW = !($scope.miTextoNEW);
        event.stopPropagation();

    };

    $scope.miFecha = false;
    $scope.fecha = function (event) {
        $scope.miFecha = !($scope.miFecha);
        event.stopPropagation();
        $scope.miTextoNEW = false;
    };


});
banchileApp.controller('lateralMenu', function ($scope, $timeout, $mdSidenav) {
    $scope.toggleLeft = buildToggler('left');
    $scope.toggleRight = buildToggler('right');

    function buildToggler(componentId) {
        return function () {
            $mdSidenav(componentId).toggle();
        };
    }
});
banchileApp.controller('FavoritosCtrl', function ($scope, $http, $element, dragularService, $filter, $mdDialog, $mdMedia) {

    $scope.palabraClave = "";

    $scope.init = function () {

        $scope.consultaTipoIndicador();

        $scope.consultaIndicador();

    };

    $scope.tipoInd = new Array();

    $scope.tipoIndM = new Array();

    $scope.tipoIndSel = new Object();

    $scope.tipoIndMSel = new Object();

    $scope.consultaTipoIndicador = function () {

        var parameters = {
            req: "{}"
        };

        var config = {
            params: parameters
        };

        $http.get("./assets/json/tipoIndicador.json", config)
            .success(function (data, status, headers, config) {

                $scope.tipoInd.length = 0;

                var tipoInd = new Object();

                tipoInd.item = -1;
                tipoInd.nombre = "Todas";
                tipoInd.tipo = "";
                tipoInd.hide = true;

                $scope.tipoIndM.push(tipoInd);


                if (data.estadoOperacion.codigoOperacion == "000") {

                    for (var i = 0; i < data.tipo.length; i++) {

                        var tipoInd = new Object();

                        tipoInd.item = data.tipo[i].idTipo;
                        tipoInd.nombre = data.tipo[i].descripcion;
                        tipoInd.tipo = data.tipo[i].codTipo;
                        tipoInd.hide = false;

                        $scope.tipoIndM.push(tipoInd);
                        $scope.tipoInd.push(tipoInd);

                    }

                } else {
                    console.log("Error al ejecutar servicio Tipo de Indicador");
                }

                $scope.tipoIndSel = $scope.tipoInd[0];
                $scope.tipoIndMSel = $scope.tipoIndM[0];

            })
            .error(function (data, status, header, config) {
                console.log("Error al ejecutar servicio Tipo de Indicador");
            });

    };

    $scope.indicadores = new Array();

    $scope.consultaIndicador = function () {

        var parameters = {
            req: "{}"
        };

        var config = {
            params: parameters
        };

        $http.get("./assets/json/indicadores.json", config)
            .success(function (data, status, headers, config) {

                $scope.indicadores.length = 0;

                if (data.estadoOperacion.codigoOperacion == "000") {

                    for (var i = 0; i < data.nemo.length; i++) {

                        var ind = new Object();

                        ind.item = i;
                        ind.tipo = data.nemo[i].codTipo;
                        ind.tipoNombre = ($filter('filter')($scope.tipoInd, {
                            tipo: data.nemo[i].codTipo
                        })[0]).nombre;
                        ind.nombre = data.nemo[i].nemotecnico;
                        ind.hide = false;
                        ind.idNemotecnico = data.nemo[i].idNemotecnico;

                        $scope.indicadores.push(ind);

                    }

                } else {
                    console.log("Error al ejecutar servicio Consulta Indicador");
                }

            })
            .error(function (data, status, header, config) {
                console.log("Error al ejecutar servicio Consulta Indicador");
            });

    };

    $scope.indDest = new Array();

    for (var i = 0; i < 5; i++) {

        var itemIndDest = new Object();

        itemIndDest.nombre = "Disponible";
        itemIndDest.tipo = "";
        itemIndDest.tipoNombre = "";
        itemIndDest.item = i;
        itemIndDest.hide = true;

        $scope.indDest.push(itemIndDest);
    }


    $scope.menu = new Array();

    for (var i = 0; i < 3; i++) {

        var menuItem = new Object();

        if (i == 0) {

            menuItem.nombre = "Consultar";
            menuItem.subMenu = new Array();

            for (var j = 0; j < 3; j++) {

                var sunbMenuItem = new Object();

                if (j == 0) {
                    sunbMenuItem.nombre = "Resumen";
                    sunbMenuItem.item = j;
                    sunbMenuItem.icono = "banicon-resumen indicadoresFavoritos--iconoLista";
                    sunbMenuItem.flagCheck = false;
                } else if (j == 1) {
                    sunbMenuItem.nombre = "Patrimonio";
                    sunbMenuItem.item = j;
                    sunbMenuItem.icono = "banicon-patrimonio indicadoresFavoritos--iconoLista";
                    sunbMenuItem.flagCheck = false;
                } else if (j == 2) {
                    sunbMenuItem.nombre = "Movimiento";
                    sunbMenuItem.item = j;
                    sunbMenuItem.icono = "banicon-movimientos indicadoresFavoritos--iconoLista";
                    sunbMenuItem.flagCheck = false;
                }


                menuItem.subMenu.push(sunbMenuItem);
            }

            $scope.menu.push(menuItem);

        } else if (i == 1) {

            menuItem.nombre = "Invertir";
            menuItem.subMenu = new Array();

            var sunbMenuItem = new Object();
            sunbMenuItem.nombre = "Banchile Pay";
            sunbMenuItem.icono = "banicon-banchile_pay indicadoresFavoritos--iconoLista";
            sunbMenuItem.item = 1;
            sunbMenuItem.flagCheck = false;

            menuItem.subMenu.push(sunbMenuItem);

            $scope.menu.push(menuItem);

        } else if (i == 2) {

            menuItem.nombre = "Definir";
            menuItem.subMenu = new Array();

            for (var j = 0; j < 4; j++) {

                var sunbMenuItem = new Object();

                if (j == 0) {
                    sunbMenuItem.nombre = "Empresas";
                    sunbMenuItem.item = j;
                    sunbMenuItem.icono = "banicon-empresa indicadoresFavoritos--iconoLista";
                    sunbMenuItem.flagCheck = false;
                } else if (j == 1) {
                    sunbMenuItem.nombre = "Usuarios";
                    sunbMenuItem.item = j;
                    sunbMenuItem.icono = "banicon-avatar indicadoresFavoritos--iconoLista";
                    sunbMenuItem.flagCheck = false;
                } else if (j == 2) {
                    sunbMenuItem.nombre = "Beneficiarios";
                    sunbMenuItem.item = j;
                    sunbMenuItem.icono = "banicon-beneficiarios indicadoresFavoritos--iconoLista";
                    sunbMenuItem.flagCheck = false;
                } else if (j == 3) {
                    sunbMenuItem.nombre = "Favoritos";
                    sunbMenuItem.item = j;
                    sunbMenuItem.icono = "banicon-marcador_favoritos indicadoresFavoritos--iconoLista";
                    sunbMenuItem.flagCheck = false;
                }


                menuItem.subMenu.push(sunbMenuItem);
            }

            $scope.menu.push(menuItem);

        }

    }

    var containerLeft = document.querySelector('#origenDrag');
    var containerRight = document.querySelector('#destinoDrag');

    function accepts(el, target, source) {
        if (source === containerLeft || source === target) {
            return true;
        }
    }
    //dragularService([containerLeft], {
    //	copy: true,
    //move only from left to right
    //accepts: accepts
    //});

    dragularService([containerRight], {
        removeOnSpill: false,
        boundingBox: containerRight,
        //move only from left to right
        //accepts: accepts
        moves: function (el, container, handle) {

            console.log(el);
            console.log(container);
            console.log(handle);
            console.log(el.id + "-" + el.id.substr(7));

            var flag = true;

            if (el.id.substr(7) == "true")
                flag = false;

            console.log(flag);

            return flag;
        },
        scope: $scope
    });

    $scope.eliminarIndicador = function (event, itemInd) {

        var idDivSel = event.target.parentNode.parentNode.parentNode.parentNode.id;
        var itemSel = idDivSel.substr(5, 1);

        var containerRight = document.querySelector('#destinoDrag');

        var indexArray = new Array();

        angular.forEach(containerRight.childNodes, function (value, key) {

            if (value.tagName == "DIV") {
                console.log(key + ': ' + value.tagName + ': ' + value.id);

                indexItem = new Object();
                indexItem.item = Number(value.id.substr(5, 1));
                indexItem.hide = ("true" == value.id.substr(7));

                indexArray.push(indexItem);

            }

        });

        console.log("Lista 1:");
        console.log(JSON.stringify(indexArray));

        for (var i = 0; i < indexArray.length; i++) {

            if (indexArray[i].item == itemSel) {
                indexArray[i].hide = true;
            }
        }

        console.log("Lista 2:");
        console.log(JSON.stringify(indexArray));

        var indDestSel = new Array();
        var indDestDisp = new Array();

        for (var i = 0; i < indexArray.length; i++) {

            if (indexArray[i].hide == false)
                indDestSel.push(indexArray[i]);
            else
                indDestDisp.push(indexArray[i]);
        }

        indexArray.length = 0;

        Array.prototype.push.apply(indexArray, indDestSel);
        Array.prototype.push.apply(indexArray, indDestDisp);

        console.log(indexArray);

        var arrayAux = $scope.indDest.slice(0);

        console.log(arrayAux);

        $scope.indDest.length = 0;

        for (var i = 0; i < indexArray.length; i++) {

            var itemFilter = $filter('filter')(arrayAux, {
                item: indexArray[i].item
            })[0];

            var itemIndDest = new Object();

            itemIndDest.item = i;
            itemIndDest.hide = indexArray[i].hide;

            if (indexArray[i].hide == true) {
                itemIndDest.nombre = "Disponible";
                itemIndDest.categoria = "";
            } else {
                itemIndDest.nombre = itemFilter.nombre;
                itemIndDest.categoria = itemFilter.categoria;
            }

            $scope.indDest.push(itemIndDest);
        }

        console.log($scope.indDest);

    };

    $scope.agregarIndicador = function (ev, itemInd) {

        var flagAgregar = false;

        for (var i = 0; i < 5; i++) {

            if ($scope.indDest[i].hide == true) {
                flagAgregar = true;
                break;
            }

        }

        if (!flagAgregar) {

            $scope.msgContent = "Solo puede seleccionar 5 Indicadores";
            $scope.showNoAutorizado(ev, "idForm");

            return;
        }

        itemInd.hide = true;

        for (var i = 0; i < 5; i++) {

            if ($scope.indDest[i].hide == true) {
                $scope.indDest[i].tipo = itemInd.tipo;
                $scope.indDest[i].tipoNombre = itemInd.tipoNombre;
                $scope.indDest[i].nombre = itemInd.nombre;
                $scope.indDest[i].hide = false;
                break;
            }

        }

    };

    $scope.$on('dragulardragend', function (e, el) {

        var containerRight = document.querySelector('#destinoDrag');

        var indexArray = new Array();

        angular.forEach(containerRight.childNodes, function (value, key) {

            if (value.tagName == "DIV") {
                console.log(key + ': ' + value.tagName + ': ' + value.id);

                indexItem = new Object();
                indexItem.item = Number(value.id.substr(5, 1));
                indexItem.hide = ("true" == value.id.substr(7));

                indexArray.push(indexItem);

            }

        });

        var indDestSel = new Array();
        var indDestDisp = new Array();

        for (var i = 0; i < indexArray.length; i++) {

            if (indexArray[i].hide == false)
                indDestSel.push(indexArray[i]);
            else
                indDestDisp.push(indexArray[i]);
        }

        indexArray.length = 0;

        Array.prototype.push.apply(indexArray, indDestSel);
        Array.prototype.push.apply(indexArray, indDestDisp);

        console.log(indexArray);

        var arrayAux = $scope.indDest.slice(0);

        console.log(arrayAux);

        $scope.indDest.length = 0;

        for (var i = 0; i < indexArray.length; i++) {

            var itemFilter = $filter('filter')(arrayAux, {
                item: indexArray[i].item
            })[0];

            var itemIndDest = new Object();

            itemIndDest.item = i;
            itemIndDest.hide = indexArray[i].hide;

            if (indexArray[i].hide == true) {
                itemIndDest.nombre = "Disponible";
                itemIndDest.tipo = "";
                itemIndDest.tipoNombre = "";
            } else {
                itemIndDest.nombre = itemFilter.nombre;
                itemIndDest.tipo = itemFilter.tipo;
                itemIndDest.tipoNombre = itemFilter.tipoNombre;
            }

            $scope.indDest.push(itemIndDest);
        }

        console.log($scope.indDest);

        $scope.$apply();

    });

    $scope.favList = new Array();

    $scope.agregarFavorito = function (ev, itemInd) {

        console.log("Val:" + itemInd.nombre);
        console.log("Check:" + itemInd.flagCheck);

        if (!itemInd.flagCheck) {

            if ($scope.favList.length < 5) {

                itemInd.flagCheck = true;

                var itemFav = new Object();

                itemFav.nombre = itemInd.nombre;
                itemFav.item = itemInd.item;
                itemFav.icono = itemInd.icono;

                $scope.favList.push(itemFav);

            } else {
                itemInd.flagCheck = false;
                $scope.msgContent = "Solo puede seleccionar 5 Favoritos";
                $scope.showNoAutorizado(ev, "idForm");
            }

        } else {

            itemInd.flagCheck = false;

            var lenList = $scope.favList.length;

            for (var i = 0; i < lenList; i++) {
                if ($scope.favList[i].nombre == itemInd.nombre) {
                    $scope.favList.splice(i, 1);
                    break;
                }
            }

        }


    };


    $scope.msgContent = "";

    $scope.showNoAutorizado = function (ev, idForm) {

        var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;

        $mdDialog.show({
            templateUrl: 'noAutorizado.tmpl.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true,
            fullscreen: useFullScreen,
            locals: {
                msg: $scope.msgContent
            },
            controller: ['$scope', '$mdDialog', 'msg', NoAutorizadoCtrl]
        })

        $scope.$watch(function () {

            return $mdMedia('xs') || $mdMedia('sm');

        }, function (wantsFullScreen) {

            $scope.customFullscreen = (wantsFullScreen === true);

        });

        function NoAutorizadoCtrl($scope, $mdDialog, msg) {

            $scope.msg = msg;

            $scope.closeDialog = function () {
                $mdDialog.hide();
            };

            $scope.aceptar = function () {
                $mdDialog.hide();
            };

        };

    };

    $scope.showBuscarInd = function (ev) {

        //var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
        var useFullScreen = true;

        $mdDialog.show({
            templateUrl: 'buscarInd.tmpl.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            escapeToClose: false,
            clickOutsideToClose: false,
            fullscreen: useFullScreen,
            locals: {
                tipoIndM: $scope.tipoIndM,
                tipoInd: $scope.tipoInd,
                indicadores: $scope.indicadores,
                tipoIndMSel: $scope.tipoIndMSel,
                palabraClave: $scope.palabraClave,
            },
            controller: ['$scope', '$mdDialog', 'tipoIndM', 'tipoInd', 'indicadores', 'tipoIndMSel', 'palabraClave', BuscarIndicadorCtrl],
            scope: $scope,
            preserveScope: true
        })


        $scope.$watch(function () {

            if (!($mdMedia('xs') || $mdMedia('sm')))
                $mdDialog.hide();

            return $mdMedia('xs') || $mdMedia('sm');

        }, function (wantsFullScreen) {

            $scope.customFullscreen = (wantsFullScreen === true);

        });

        function BuscarIndicadorCtrl($scope, $mdDialog, tipoIndM, tipoInd, indicadores, tipoIndMSel, palabraClave) {

            $scope.tipoIndM = tipoIndM;
            $scope.tipoInd = tipoInd;
            $scope.indicadores = indicadores;
            $scope.tipoIndMSel = tipoIndMSel;
            $scope.palabraClave = palabraClave;

            $scope.closeDialog = function () {
                $mdDialog.hide();
            };

            $scope.aceptar = function () {
                $mdDialog.hide();
            };

        };

    };

    $scope.changeTipo = function (ev) {

        var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'));

        if (useFullScreen) {
            $scope.showBuscarInd(ev);
        }

    }

    $scope.changePalabraClave = function (ev) {

        var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'));

        if (useFullScreen && $scope.palabraClave) {
            $scope.showBuscarInd(ev);
        }

    }

});
//actualizacion de datos
banchileApp.controller('ActualizacionController', function ($scope) {
    $scope.show = false;
    $scope.toggleClick = function () {

        if ($scope.show) {
            $scope.show = false;
            ($scope.class === "h--borde__datos")
            $scope.class = "h--cborde";

        } else {
            $scope.show = true;
            $scope.class = "h--borde__datos";
        }
    }
    $scope.isActive = function () {
        if ($scope.pagarDesde == "1") {
            return true;
        } else {
            return false;
        }
    }
    $scope.isActive = function () {
        if ($scope.invertirPactos) {
            return true;
        } else {
            return false;
        }
    }
    $scope.demo = {
      showTooltip: false,
    };
});

banchileApp.controller("active--bloque01", function ($scope) {
    $scope.changeIndex = function (index) {
        $scope.selected = index;
    }
});
//NUEVO MOVIMIENTOS
// LISTADO DE MOVIMIENTOS Aporte a fondos mutuos
banchileApp.controller('tablaCartola', function ($scope) {

    $scope.sort = '+producto';
    $scope.cartola = [

        {
            fecha: "01/01/2016",
            producto: "Fondos Mutuos",
            transaccion: "Aporte",
            instrumento: "Retorno Accionario Largo Plazo",
            cantidad: "$10.000.460",
            precio: "$6.000.460",
            monto: "$10.000.460"
        }

    ]
    $scope.cartola2 = [

        {
            fecha: "01/01/2016",
            producto: "Fondos Mutuos",
            transaccion: "Rescate",
            instrumento: "Retorno Accionario Largo Plazo",
            cantidad: "$10.000.460",
            precio: "$6.000.460",
            monto: "$10.000.460"
        }

    ]
    $scope.cartola3 = [

        {
            fecha: "01/01/2016",
            producto: "Cartera Activa",
            transaccion: "Aporte",
            instrumento: "Retorno Accionario Largo Plazo",
            cantidad: "$460.000",
            precio: "$460,0000",
            monto: "$460.000"
        }

    ]
    $scope.cartola4 = [

        {
            fecha: "01/01/2016",
            producto: "Cartera Activa",
            transaccion: "Rescate",
            instrumento: "Retorno Accionario Largo Plazo",
            cantidad: "$460.000",
            precio: "$460,0000",
            monto: "$460.000"
        }

    ]
    $scope.cartola5 = [

        {
            fecha: "01/01/2016",
            producto: "Acciones",
            transaccion: "Compra",
            instrumento: "Retorno Accionario Largo Plazo",
            cantidad: "$460.000",
            precio: "$460,0000",
            monto: "$460.000"
        }

    ]
    $scope.cartola6 = [

        {
            fecha: "01/01/2016",
            producto: "Moneda Extranjera",
            transaccion: "Compra",
            instrumento: "Dólar",
            cantidad: "$460.000",
            precio: "$460,0000",
            monto: "$460.000"
        }

    ]
    $scope.cartola7 = [

        {
            fecha: "01/01/2016",
            producto: "Moneda Extranjera",
            transaccion: "Venta",
            instrumento: "Dólar",
            cantidad: "$460.000",
            precio: "$460,0000",
            monto: "$460.000"
        }

    ]
    $scope.cartola8 = [

        {
            fecha: "01/01/2016",
            producto: "Caja Internet",
            transaccion: "Abono",
            instrumento: "",
            cantidad: "$460.000",
            precio: "$460,0000",
            monto: "$460.000"
        }

    ]
    $scope.cartola8 = [

        {
            fecha: "01/01/2016",
            producto: "Caja Internet",
            transaccion: "Abono",
            instrumento: "",
            cantidad: "$460.000",
            precio: "$460,0000",
            monto: "$460.000"
        }

    ]
    $scope.cartola9 = [

        {
            fecha: "01/01/2016",
            producto: "Caja Internet",
            transaccion: "Retiro",
            instrumento: "",
            cantidad: "$460.000",
            precio: "$460,0000",
            monto: "$460.000"
        }

    ];
});
//listado movimientos Compra deAcciones
banchileApp.controller('CartolaCompracciones', function ($scope) {

    $scope.sort = '+producto';
    $scope.cartola = [

        {
            fecha: "01/01/2016",
            producto: "Fondos Mutuos",
            transaccion: "Aporte",
            instrumento: "Retorno Accionario Largo Plazo",
            cantidad: "$10.000.460.000",
            precio: "$6.000.460,0000",
            monto: "$10.000.460.000"
        }

    ];
});
//listado movimientos Compra de Acciones
banchileApp.controller('CartolaVentaacciones', function ($scope) {

    $scope.sort = '+producto';
    $scope.cartola = [

        {
            fecha: "01/01/2016",
            producto: "Fondos Mutuos",
            transaccion: "Aporte",
            instrumento: "Retorno Accionario Largo Plazo",
            cantidad: "$10.000.460.000",
            precio: "$6.000.460,0000",
            monto: "$10.000.460.000"
        }

    ];
});
//listado movimientos Compra de Modeda Extranjera
banchileApp.controller('CartolaMonedaextranj', function ($scope) {

    $scope.sort = '+producto';
    $scope.cartola = [

        {
            fecha: "01/01/2016",
            producto: "Fondos Mutuos",
            transaccion: "Aporte",
            instrumento: "Retorno Accionario Largo Plazo",
            cantidad: "$10.000.460.000",
            precio: "$6.000.460,0000",
            monto: "$10.000.460.000"
        }

    ];
});
//listado movimientos Compra de Modeda Extranjera
banchileApp.controller('CartolaMonedaextranj', function ($scope) {

    $scope.sort = '+producto';
    $scope.cartola = [

        {
            fecha: "01/01/2016",
            producto: "Fondos Mutuos",
            transaccion: "Aporte",
            instrumento: "Retorno Accionario Largo Plazo",
            cantidad: "$10.000.460.000",
            precio: "$6.000.460,0000",
            monto: "$10.000.460.000"
        }

    ];
});
//listado movimientos Venta de Modeda Extranjera
banchileApp.controller('CartolaVentaMonedaextranj', function ($scope) {

    $scope.sort = '+producto';
    $scope.cartola = [

        {
            fecha: "01/01/2016",
            producto: "Fondos Mutuos",
            transaccion: "Aporte",
            instrumento: "Retorno Accionario Largo Plazo",
            cantidad: "$10.000.460.000",
            precio: "$6.000.460,0000",
            monto: "$10.000.460.000"
        }

    ];
});
//listado movimientos Abono a caja Internet
banchileApp.controller('CartolaAbonoCaja', function ($scope) {

    $scope.sort = '+producto';
    $scope.cartola = [

        {
            fecha: "01/01/2016",
            producto: "Fondos Mutuos",
            transaccion: "Aporte",
            instrumento: "Retorno Accionario Largo Plazo",
            cantidad: "$10.000.460.000",
            precio: "$6.000.460,0000",
            monto: "$10.000.460.000"
        }

    ];
});
//listado movimientos Retiro a caja Internet
banchileApp.controller('CartolaRetiroCaja', function ($scope) {

    $scope.sort = '+producto';
    $scope.cartola = [

        {
            fecha: "01/01/2016",
            producto: "Fondos Mutuos",
            transaccion: "Aporte",
            instrumento: "Retorno Accionario Largo Plazo",
            cantidad: "$10.000.460.000",
            precio: "$6.000.460,0000",
            monto: "$10.000.460.000"
        }

    ];
});
// FIN NUEVO MOVIMIENTOS
///// CONTROLADORES DEL MENU DE NAVEGACION PRIVADO Y PUBLICO, HOME, RESUMEN THIAGO SOARES //////
banchileApp.controller('menuLoginCtrl', function ($scope, $mdPanel) {
    $scope.active6 = false;
    $scope._mdPanel = $mdPanel;
    $scope.showMenuLogin = function (event) {
        // var position = $scope._mdPanel.newPanelPosition()
        //      .relativeTo('.menuLogin--despliegue')
        //      .addPanelPosition($scope._mdPanel.xPosition.ALIGN_START, // $scope._mdPanel.yPosition.BELOW);
        var position = $scope._mdPanel.newPanelPosition()
            .absolute()
            .right('-300px')
            .top();
        var animation = $scope._mdPanel.newPanelAnimation();
        animation.withAnimation({
            open: 'login--open',
            close: 'login--close '
        });
        var config = {
            attachTo: angular.element(document.body),
            templateUrl: 'menuLogin.tmpl.html',
            position: position,
            animation: animation,
            clickOutsideToClose: true,
            escapeToClose: true,
            focusOnOpen: false,
            zIndex: 200,
            controller: MenuLoginPopUpCtrl
        };
        $scope._mdPanel.open(config);
    };

    function MenuLoginPopUpCtrl($scope) {
        $scope.active1 = true;
        $scope.active2 = true;
        $scope.active3 = true;
        $scope.clickMenu = function (itemMenu) {
            if (itemMenu == 1) {
                $scope.active1 = !$scope.active1;
                $scope.active2 = true;
                $scope.active3 = true;
            } else if (itemMenu == 2) {
                $scope.active1 = true;
                $scope.active2 = !$scope.active2;
                $scope.active3 = true;
            } else if (itemMenu == 3) {
                $scope.active1 = true;
                $scope.active2 = true;
                $scope.active3 = !$scope.active3;
            }
        };
    };
});
banchileApp.controller('menuPublicoMobil', function ($scope, $mdPanel) {
    $scope.active6 = false;
    $scope._mdPanel = $mdPanel;
    $scope.showMenuPublicoMobil = function (event) {
        // var position = $scope._mdPanel.newPanelPosition()
        //      .relativeTo('.menuLogin--despliegue')
        //      .addPanelPosition($scope._mdPanel.xPosition.ALIGN_START, // $scope._mdPanel.yPosition.BELOW);
        var position = $scope._mdPanel.newPanelPosition()
            .absolute()
            .left('-300px')
            .top();
        var animation = $scope._mdPanel.newPanelAnimation();
        animation.withAnimation({
            open: 'menuPublicoMobil--open',
            close: 'menuPublicoMobil--close '
        });

        var config = {
            attachTo: angular.element(document.body),
            templateUrl: 'menuPublicoMobil.tmpl.html',
            position: position,
            animation: animation,
            clickOutsideToClose: true,
            escapeToClose: true,
            focusOnOpen: false,
            zIndex: 200,
            controller: menuPublicoMobil
        };

        $scope._mdPanel.open(config);

    };

    function menuPublicoMobil($scope) {

        $scope.asesoriaPersonalizada = true;
        $scope.productosyServicios = true;
        $scope.reputacionyRespaldo = true;

        $scope.clickMenu = function (itemMenu) {

            if (itemMenu == 1) {
                $scope.asesoriaPersonalizada = !$scope.asesoriaPersonalizada;
                $scope.productosyServicios = true;
                $scope.reputacionyRespaldo = true;
            } else if (itemMenu == 2) {
                $scope.asesoriaPersonalizada = true;
                $scope.productosyServicios = !$scope.productosyServicios;
                $scope.reputacionyRespaldo = true;
            } else if (itemMenu == 3) {
                $scope.asesoriaPersonalizada = true;
                $scope.productosyServicios = true;
                $scope.reputacionyRespaldo = !$scope.reputacionyRespaldo;
            }
        };
    };
});






banchileApp.controller('menuPrivadoMovil', function ($scope) {
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 30,
        scrollbar: '.swiper-scrollbar',
        scrollbarHide: true,
        centeredSlides: false,
        grabCursor: false,
        freeMode: true,
        slidesPerView: 4,
    });
    $scope.activo = [];
    $scope.visible = [];
    $scope.mouseOver = function (position) {
        $scope.activo[position] = "activo-menuPrivado";
        $scope.visible[position] = true;
    }
    $scope.mouseLeave = function (position) {
        $scope.activo[position] = "";
    }
    $scope.mouseClick = function (position) {
        $scope.activo[position] = "";
        $scope.visible[position] = false;
    }
});
banchileApp.controller('menuPublicoCrtl', function ($scope) {
    $scope.activo = [];
    $scope.visible = [];
    $scope.mouseOver = function (position) {
        $scope.activo[position] = "activo-menuPublico";
        $scope.visible[position] = true;
    }
    $scope.mouseLeave = function (position) {
        $scope.activo[position] = "";
    }
    $scope.mouseClick = function (position) {
        $scope.activo[position] = "";
        $scope.visible[position] = false;
    }
});
banchileApp.controller('menuPrivadoCrtl', function ($scope) {
    //MENU PRIVADO RESPONSIVE
    $scope.duracion = 100;
    $scope.menuPrivado = angular.element(document.querySelector('#menuPrivado'))[0];
    $scope.scrollWidth = $scope.menuPrivado.scrollWidth;
    $scope.clientWidth = $scope.menuPrivado.clientWidth;
    $scope.areaMaximaScroll = $scope.scrollWidth - $scope.clientWidth;
    console.log('Pixeles scrolleables: ' + $scope.areaMaximaScroll);
    //console.log(angular.element(document.querySelector('#menuPrivado')));
    $scope.menuItemActual = 0;

    $scope.itemSiguiente = function () {
        var nextItem = $scope.menuPrivado.children[$scope.menuItemActual + 1];
        if (angular.isDefined(nextItem)) {
            var anchoMenuItem = nextItem.clientWidth;
            if ($scope.menuPrivado.scrollLeft < $scope.areaMaximaScroll) {
                console.log('Ejecutando scroll');
                $scope.menuItemActual = $scope.menuItemActual + 1;
                scrollTo($scope.menuPrivado, menuPrivado.scrollLeft + anchoMenuItem, $scope.duracion);
                $scope.menuItemActual++;
            }
        }
    };
    $scope.itemPrevio = function () {
        var nextItem = $scope.menuPrivado.children[$scope.menuItemActual - 1];
        if (angular.isDefined(nextItem)) {
            var anchoMenuItem = nextItem.clientWidth;
            if ($scope.menuPrivado.scrollLeft > 0) {
                console.log('Ejecutando scroll');
                $scope.menuItemActual = $scope.menuItemActual - 1;
                scrollTo($scope.menuPrivado, menuPrivado.scrollLeft - anchoMenuItem, $scope.duracion);
                $scope.menuItemActual--;
            }
        }
    };

    function scrollTo(element, to, duration) {

        if (duration <= 0) return;
        var difference = to - element.scrollLeft;
        var perTick = difference / duration * 10;

        setTimeout(function () {
            element.scrollLeft = element.scrollLeft + perTick;
            if (element.scrollLeft === to) {
                return;
            }
            scrollTo(element, to, duration - 10);
        }, 10);

        setTimeout(function () {
            $scope.$apply();
        }, 100);
    };


    // Inicio de funcion desplegable
    $scope.activo = [];
    $scope.visible = [];

    $scope.mouseOver = function (position) {
        $scope.activo[position] = "activo-menuPrivado";
        $scope.visible[position] = true;
    }

    $scope.mouseLeave = function (position) {
        $scope.activo[position] = "";
    }

    $scope.mouseClick = function (position) {
        $scope.activo[position] = "";
        $scope.visible[position] = false;
    }

});
/*
banchileApp.controller('indicadoresCtrl', function ($scope, $mdPanel) {
    $scope.active6 = false;
    $scope._mdPanel = $mdPanel;
    $scope.showIndicadoresCtrl = function (event) {
        // var position = $scope._mdPanel.newPanelPosition()
        //      .relativeTo('.menuLogin--despliegue')
        //      .addPanelPosition($scope._mdPanel.xPosition.ALIGN_START, // $scope._mdPanel.yPosition.BELOW);
        console.log(angular.element(document.querySelector('#navegacionPrivada')).prop('offsetTop'))
        var top = 142;
        var thin = angular.element(document.querySelector('header')).hasClass('thin')
        if (thin) {
            top = 115
        }
        var out = angular.element(document.querySelector('header')).hasClass('out')
        if (out) {
            top = 45
        }
        var position = $scope._mdPanel.newPanelPosition()
            .absolute()
            .right('0px')
            .top(top + 'px');
        var animation = $scope._mdPanel.newPanelAnimation();
        animation.withAnimation({
            open: 'indicadoresCtrl--open',
            close: 'indicadoresCtrl--close '
        });
        var config = {
            attachTo: angular.element(document.body),
            templateUrl: 'indicadoresCtrl.tmpl.html',
            position: position,
            animation: animation,
            clickOutsideToClose: true,
            escapeToClose: true,
            focusOnOpen: false,
            zIndex: 200,
            controller: indicadoresCtrl
        };
        $scope._mdPanel.open(config);
    };
    function indicadoresCtrl($scope) {
        $scope.active1 = true;
        $scope.active2 = true;
        $scope.active3 = true;
        $scope.clickMenu = function (itemMenu) {
            if (itemMenu == 1) {
                $scope.active1 = !$scope.active1;
                $scope.active2 = true;
                $scope.active3 = true;
            } else if (itemMenu == 2) {
                $scope.active1 = true;
                $scope.active2 = !$scope.active2;
                $scope.active3 = true;
            } else if (itemMenu == 3) {
                $scope.active1 = true;
                $scope.active2 = true;
                $scope.active3 = !$scope.active3;
            }
        };
    };
});
banchileApp.controller('notificacionesCtrl', function ($scope, $mdPanel) {
    $scope.active6 = false;
    $scope._mdPanel = $mdPanel;
    $scope.showNotificacionesCtrl = function (event) {
        // var position = $scope._mdPanel.newPanelPosition()
        //      .relativeTo('.menuLogin--despliegue')
        //      .addPanelPosition($scope._mdPanel.xPosition.ALIGN_START, // $scope._mdPanel.yPosition.BELOW);
        console.log(angular.element(document.querySelector('#navegacionPrivada')).prop('offsetTop'))
        var top = 142;
        var thin = angular.element(document.querySelector('header')).hasClass('thin')
        if (thin) {
            top = 115
        }
        var out = angular.element(document.querySelector('header')).hasClass('out')
        if (out) {
            top = 45
        }
        var position = $scope._mdPanel.newPanelPosition()
            .absolute()
            .right('0px')
            .top(top + 'px');
        var animation = $scope._mdPanel.newPanelAnimation();
        animation.withAnimation({
            open: 'notificacionesCtrl--open',
            close: 'notificacionesCtrl--close '
        });
        var config = {
            attachTo: angular.element(document.body),
            templateUrl: 'notificacionesCtrl.tmpl.html',
            position: position,
            animation: animation,
            clickOutsideToClose: true,
            escapeToClose: true,
            focusOnOpen: false,
            zIndex: 200,
            controller: notificacionesCtrl
        };
        $scope._mdPanel.open(config);
    };
    function notificacionesCtrl($scope) {
        $scope.active1 = true;
        $scope.active2 = true;
        $scope.active3 = true;
        $scope.clickMenu = function (itemMenu) {
            if (itemMenu == 1) {
                $scope.active1 = !$scope.active1;
                $scope.active2 = true;
                $scope.active3 = true;
            } else if (itemMenu == 2) {
                $scope.active1 = true;
                $scope.active2 = !$scope.active2;
                $scope.active3 = true;
            } else if (itemMenu == 3) {
                $scope.active1 = true;
                $scope.active2 = true;
                $scope.active3 = !$scope.active3;
            }
        };
    };
});
*/
banchileApp.controller('notificacionesSelectEmpresaCtrl', function ($scope, $mdPanel) {
    $scope.ver1 = true;
    $scope.mostrar1 = function () {
        $scope.ver1 = true;
        $scope.ver2 = false;
        $scope.ver3 = false
    }
    $scope.mostrar2 = function () {
        $scope.ver1 = false;
        $scope.ver2 = true;
        $scope.ver3 = false
    }
    $scope.mostrar3 = function () {
        $scope.ver1 = false;
        $scope.ver2 = false;
        $scope.ver3 = true
    }
    $scope.activeSelect = 'notificacion1';
});
banchileApp.controller('sliderHome', function ($scope) {
    var swiper = new Swiper('#sliderHome', {
        pagination: '#pagination',
        paginationClickable: true,
        slidesPerView: 'auto',
        autoplay: 2500,
        autoplayDisableOnInteraction: false,
        spaceBetween: 30,
    });
});
banchileApp.controller('sliderIndicadoresHome', function ($scope) {
        var swiper = new Swiper('.swiper-container', {
        scrollbar: '.swiper-scrollbar',
        scrollbarHide: true,
        slidesPerView: 'auto',
        centeredSlides: false,
        spaceBetween: 30,
       // grabCursor: true,
      //  breakpoints: {
        //    767: {
      //          slidesPerView: 2,
      //          spaceBetween: 1,

          //  },




     //   }
    });
});
banchileApp.controller('resumenPersonasSlider', function ($scope) {
        var swiper = new Swiper('#sliderResumen', {
        pagination: '#swiper-pagination-banner',
        paginationClickable: true,
        spaceBetween: 30,
        autoplay: 2500,
        autoplayDisableOnInteraction: false,
    });
});
///// FIN CONTROLADORES DEL MENU DE NAVEGACION PRIVADO Y PUBLICO Y HOME THIAGO SOARES //////
// añadido por gonzalo graficos cartera
banchileApp.controller('contenedorScrollme2', function ($scope, screenSize, $timeout) {

    $scope.isMobile = screenSize.on('xs, sm', function (isMatch) {
        $scope.isMobile = isMatch;
    });


    $scope.productoScroll = [{
            "nombre": "Ahorro Serie E",
            "familia": "Money Market",
            "porcentaje": "22,55%",
            "barra": $scope.progressval
        },
        {
            "nombre": "Depósito Serie E",
            "familia": "Deuda",
            "porcentaje": "22,55%",
            "barra": $scope.progressval
        },
        {
            "nombre": "Deuda Estatal UF 3-5 años..",
            "familia": "Deuda",
            "porcentaje": "4,95%",
            "barra": $scope.progressval
        },
    ];

    $scope.productoScroll2 = [

        {
            "nombre": "Horizonte Serie E",
            "familia": "Deuda",
            "porcentaje": "24,22%",
            "barra": $scope.progressval

        },
        {
            "nombre": "Retorno LP UF Serie E",
            "familia": "Balanceado",
            "porcentaje": "7,27%",
            "barra": $scope.progressval
        },
        {
            "nombre": "Utilidades Serie E",
            "familia": "Accionario",
            "porcentaje": "10,94%",
            "barra": $scope.progressval
        },
    ];


    $timeout(function () {
        $scope.$broadcast("rebuild:me");
    }, 1000);

});

// controlador Agregar otro fomulario
banchileApp.controller('agregarOtro', ["$scope", function ($scope) {
    $scope.items = [{
        alias: 'Proveedor de Metales',
        nombre: 'Juan Pérez',
        pais: '2',
        direccion: 'Huérfanos 670',

        nombreBanco: '3',
        direccionBanco: 'Huérfanos 670',
        paisBanco: '2',
        cuenta: '2321334',
        monedaBanco: '1',
        codigoSwiftBanco: '882349',
        codigoAbaBanco: 'Aba 89234-2424',
        codigoIbanBanco: '12313 IBAN',
        nombreSelect: '2',

        nombreBanco2: 'Banco de Perú',
        direccionBanco2: 'Avenida 670',
        paisBanco2: '1',
        cuenta2: '232133',
        monedaBanco2: '2',
        codigoSwiftBanco2: '882349',
        codigoAbaBanco2: 'Aba 89234-2424',
        codigoIbanBanco2: '12313 IBAN',

    }];
    $scope.add = function () {
        $scope.items.push({});
    }
    $scope.remove = function (index) {
        $scope.items.splice(index, 1);
    }
    $scope.isActive = function () {
        if ($scope.pagarDesde == "1") {
            return true;
        } else {
            return false;
        }
    }

}]);
banchileApp.controller('MarcoController', function ($scope) {
  $scope.demo = {
    showTooltip: false,
  };
});
banchileApp.controller('tablaUsuarios', function ($scope) {

    $scope.sort = '+nombres';
    $scope.usuar = [

        {
            nombres: "Javier Ignacio",
            apellidoPaterno: "Muñoz",
            apellidoMaterno: "Parada",
            rut: "17.777.333-3",
            rol: "Digitador",
            producto: "Banchile Pay",
            creacion: "01/05/2016 13:50:00",
        }, {
            nombres: "Antonio Manuel",
            apellidoPaterno: "Duarte",
            apellidoMaterno: "López",
            rut: "12.333.333-4",
            rol: "Visador",
            producto: "Banchile Pay",
            creacion: "03/05/2016 17:44:00",
        }, {
            nombres: "Santiago Luis",
            apellidoPaterno: "Montenegro",
            apellidoMaterno: "Araneda",
            rut: "8.322.333-3",
            rol: "Digitador",
            producto: "Fondo Mutuo Cash",
            creacion: "15/06/2016 08:45:33",
        }
    ];
});
// Controlador de listado de Usuarios



banchileApp.controller('timerProgress', function ($scope, $interval, $timeout, $window, roundProgressService) {


      $scope.current =        27;
      $scope.max =            50;
      $scope.offset =         0;
      $scope.timerCurrent =   0;
      $scope.uploadCurrent =  0;
      $scope.stroke =         15;
      $scope.radius =         100;
      $scope.isSemi =         false;
      $scope.rounded =        false;
      $scope.responsive =     false;
      $scope.clockwise =      true;
      $scope.currentColor =   '#45ccce';
      $scope.bgColor =        '#eaeaea';
      $scope.duration =       800;
      $scope.currentAnimation = 'easeOutCubic';
      $scope.animationDelay = 0;

      $scope.increment = function(amount){
          $scope.current += (amount || 1);
      };

      $scope.decrement = function(amount){
          $scope.current -= (amount || 1);
      };

      $scope.animations = [];

      angular.forEach(roundProgressService.animations, function(value, key){
          $scope.animations.push(key);
      });

      $scope.getStyle = function(){
          var transform = ($scope.isSemi ? '' : 'translateY(-50%) ') + 'translateX(-50%)';

          return {
              'top': $scope.isSemi ? 'auto' : '-33px',
              'bottom': $scope.isSemi ? '0' : '0',
              'left': '32%',
              'transform': transform,
              '-moz-transform': transform,
              '-webkit-transform': transform
          };
      };

      $scope.getColor = function(){
          return $scope.gradient ? 'url(#gradient)' : $scope.currentColor;
      };

      $scope.showPreciseCurrent = function(amount){
          $timeout(function(){
              if(amount <= 0){
                  $scope.preciseCurrent = $scope.current;
              }else{
                  var math = $window.Math;
                  $scope.preciseCurrent = math.min(math.round(amount), $scope.max);
              }
          });
      };

      var getPadded = function(val){
          return val < 10 ? ('0' + val) : val;
      };

      $interval(function(){
          var date = new Date();
          var seconds = date.getSeconds();

          $scope.seconds = seconds;
          $scope.time = getPadded(seconds);
      }, 1000);

});
