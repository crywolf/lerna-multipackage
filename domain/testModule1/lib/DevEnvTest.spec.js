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

    describe('doAnotherHotStuff', () => {
        it('should return correct string', () => {
            expect(devEnvTest.doAnotherHotStuff()).to.equal('And that is hot!');
        });
    });

});
