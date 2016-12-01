const expect = require('chai').expect;
const DevEnvTest = require("./DevEnvTest");

describe('DevEnvTest', () => {

    let devEnvTest;

    beforeEach(() => {
        devEnvTest = new DevEnvTest();
    });

    describe('when asked to run tests', () => {
        it('should execute tests', () => {
            expect(devEnvTest.doSomething()).to.equal('Well done!');
        });
    });

});
