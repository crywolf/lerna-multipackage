const App = require('./src/App');
const testModule1 = require('../../domain/testModule1');
//const testModule1 = require('testModule1');

app = new App();

app.start({name: app.constructor.name});

const result = testModule1.doSomething();

console.log(result);
