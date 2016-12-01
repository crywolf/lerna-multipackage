const App = require('./src/App');
const module1 = require('../../domain/module1');

app = new App;

app.start({name: app.constructor.name});
