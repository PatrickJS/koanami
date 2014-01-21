#!/usr/bin/env node
var app = require('./server/app');
app(__dirname).listen(3000);
console.log('Starting Koa server v%s on port %j from %s', app.version, app.port, app.rootPath);

