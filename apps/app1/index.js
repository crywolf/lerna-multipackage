const App = require('./src/App');
const testModule1 = require('../../domain/testModule1');
//const testModule1 = require('testModule1');

const app = new App();

app.start({name: app.constructor.name});

let result = testModule1.doSomething();

result += ' ' + testModule1.doAnotherThing();

result += `\n${testModule1.doAnotherCoolStuff()}`;

console.log(result);

app.finish();
