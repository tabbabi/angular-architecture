'use strict';

app
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/articles', {
            controller: 'articleList',
            templateUrl: 'views/article/list.html'
        });
    }]);