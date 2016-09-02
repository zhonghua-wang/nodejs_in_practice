/**
 * Created by zhonghua on 16-9-2.
 */

var CountStream = require('./countstream')
var countStream = new CountStream('head');
var http = require('http');

http.get('http://www.manning.com', function (res) {
    res.pipe(countStream);
});

countStream.on('total', function (count) {
    console.log('Total matches:', count);
});