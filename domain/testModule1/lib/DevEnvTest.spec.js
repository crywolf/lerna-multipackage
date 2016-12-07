const expect = require('chai').expect;
const DevEnvTest = require("./DevEnvTest");

describe('DevEnvTest', () => {

    let devEnvTest;

    beforeEach(() => {
        devEnvTest = new DevEnvTest();
    });

    describe('doSomething', () => {
        it('should return correct string', () => {
            expect(devEnvTest.doSomething()).to.equal('Well done!');
        });
    });

    describe('doAnotherThing', () => {
        it('should return correct string', () => {
            expect(devEnvTest.doAnotherThing()).to.equal('I can do a lot!');
        });
    });

    describe('doAnotherCoolStuff', () => {
        it('should return correct string', () => {
            expect(devEnvTest.doAnotherCoolStuff()).to.equal('And that is cool!');
        });
    });

});
