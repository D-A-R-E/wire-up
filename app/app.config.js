(function () {
	'use strict';

	angular
		.module('dare')
        .config(config);
        function config ($stateProvider, $urlRouterProvider){
            $stateProvider.state({
                name: 'landing',
                url: '/',
                component: 'landing'
            });
            $stateProvider.state({
                name: 'something1',
                url: '/something1',
                component: 'something1'
            });
            $stateProvider.state({
                name: 'something2',
                url: '/something2',
                component: 'something2'
            });
            $stateProvider.state({
                name: 'something3',
                url: '/something3',
                component: 'something3'
            })


            $urlRouterProvider.otherwise('/');
        }

})();
