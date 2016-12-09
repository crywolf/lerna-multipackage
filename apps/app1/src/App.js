class App {

    start(config = {}) {
        this.config = config;
        console.log(`Started with config: ${JSON.stringify(this.config)}`);
    }

    finish() {
        console.log(`Job successfully finished.`);
    }

}

module.exports = App;
