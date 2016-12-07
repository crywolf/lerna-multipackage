class App {

    start(config = {}) {
        this.config = config;
        console.log(`sStarted with config: ${JSON.stringify(this.config)}`);
    }

}

module.exports = App;
