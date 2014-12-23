'use strict';

app
    .controller('articleIndex', function($scope) {

    })

    .controller('articleList', function($scope, $articleProvider) {
        $scope.articles = $articleProvider.getArticles();
    })

    .controller('articleCreate', function($scope) {

    })

    .controller('articleRemove', function($scope) {

    })
;