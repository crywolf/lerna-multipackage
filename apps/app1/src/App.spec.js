const expect = require('chai').expect;
const App = require('./App');

describe('App', () => {

    let app;

    beforeEach(() => {
        app = new App();
    });

    describe('application', () => {
        it('should have start function', () => {
            expect(app.start).to.be.a('function');
        });

        it('should have finish function', () => {
            expect(app.finish).to.be.a('function');
        });
    });
});
