const TestRunner = require('./runner');
const unit = require('./app.spec');

runner = new TestRunner(unit);
runner.runTests().then(() => console.log(runner.produceReport()));