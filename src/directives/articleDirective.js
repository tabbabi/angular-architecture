'use strict';

app
    .directive('articleRepeat', function(){
        return {
            scope: {
                item: '=articleRepeat'
            },
            template: '<td>Id: {{item.id}}</td><td>Title: {{item.title}}</td>'
        };
    })