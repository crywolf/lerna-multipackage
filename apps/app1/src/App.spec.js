const expect = require('chai').expect;
const App = require('./App');

describe('App', () => {

    let app;

    beforeEach(() => {
        app = new App();
    });

    describe('application', () => {
        it('should have start function', () => {
            expect(app.start).to.be.function;
        });

    });
});
