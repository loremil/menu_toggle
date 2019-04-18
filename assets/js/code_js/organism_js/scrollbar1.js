// Var app es quien inicializa la aplicación de angular
var banchileApp = angular.module('banchileApp', ['ngMaterial', 'ngMessages', 'ngRoute', 'ngAnimate', 'wt.responsive', 'angular-parallax', 'ksSwiper', 'ngScrollbar', 'matchMedia', 'dragularModule', 'hl.sticky', 'angular-svg-round-progressbar', 'timer', ]);

// en Patrimonio Resumen: Chart y progress bar
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

//En Patrimonio resumen Scroll y Slider
banchileApp.controller('contenedorScrollme', function ($scope, screenSize, $timeout) {

    $scope.isMobile = screenSize.on('xs, sm', function (isMatch) {
        $scope.isMobile = isMatch;
    });


    $scope.productoScroll = [{
            "nombre": "FONDOS MUTUOS",
            "monto": "3.123.678",
            "porcentaje": "40%",
            "barra": $scope.progressval
        },
        {
            "nombre": "ACCIONES",
            "monto": "3.123.678",
            "porcentaje": "35%",
            "barra": $scope.progressval
        },
        {
            "nombre": "CARTERA ACTIVA",
            "monto": "3.123.678",
            "porcentaje": "15%",
            "barra": $scope.progressval
        },
        {
            "nombre": "CAJA INTERNET",
            "monto": "3.123.678",
            "porcentaje": "10%",
            "barra": $scope.progressval
        },
        {
            "nombre": "FONDOS MUTUOS",
            "monto": "3.123.678",
            "porcentaje": "40%",
            "barra": $scope.progressval
        },
    ];



    $timeout(function () {
        $scope.$broadcast("rebuild:me");
    }, 1000);

});

//En Patrimonio resumen Barra progreso
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

//Patrimoni resumen Barra progreso
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
