'use strict';

var articles = [
    {'id': 1, 'title': 'article1'},
    {'id': 2, 'title': 'article2'}
];

app
    .service('articleProvider', function () {
        this.getArticles = function() {
            return articles;
        }
    })
;