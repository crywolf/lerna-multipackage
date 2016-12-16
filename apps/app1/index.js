const App = require('./src/App');
const testModule1 = require('testModule1');
const server = require('serverModule');

const app = new App();

app.start({name: app.constructor.name});

let result = testModule1.doSomething();

result += ' ' + testModule1.doAnotherThing();

result += `\n${testModule1.doAnotherHotStuff()}`;

console.log(result);

app.finish();

server.start(5000);
