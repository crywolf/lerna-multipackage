class App {

    start(config = {}) {
        this.config = config;
        console.log(`Started with config: ${JSON.stringify(this.config)}`);
    }

}

module.exports = App;
