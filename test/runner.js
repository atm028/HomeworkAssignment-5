/**
  * the test runner class
  */
class TestRunner {
    constructor(_tests) {
        this.tests = _tests;
        this.counter = 0;
        this.successes = 0;
        this.counter = 0;
        this.errors = [];
        this.limit = this.countTests();
    }

/**
  * calculate the number of tests the object has been initiated with
  * @return: number of tests are should be run
  * @required_params: none
  * @optional_params: None
  */
    countTests() {
        var counter = 0;
        for(const key in this.tests) {
            if(this.tests.hasOwnProperty(key)) {
                const subTests = this.tests[key];
                if(typeof(subTests) == 'function') counter++;
                else {
                    for(const subKey in subTests) {
                        if(subTests.hasOwnProperty(subKey)) {
                            counter++;
                        }
                    }
                }
            }
        }
        return counter;
    }

/**
  * the function call the test and store result for future use
  * @return: none
  * @required_params:
  *  - k: the test name
  *  - f: the test function
  * @optional_params: None
  */
    async callTest(k, f) {
        try {
            f(() => {
                console.log('\x1b[32m%s\x1b[0m', "Test: "+k);
                this.successes++;
            });
        } catch(e) {
            this.errors.push({'name': k, "error": e});
            console.log('\x1b[31m%s\x1b[0m', "Test: "+k);
        }
        this.counter++;
        if(this.counter == this.limit) {
            this.produceReport();
        }
    };

/**
  * the function which iterate through the tests and call each of them
  * @return: none
  * @required_params: None
  * @optional_params: None
  */
    async runTests() {
        for(const key in this.tests) {
            if(this.tests.hasOwnProperty(key)) {
                const subTests = this.tests[key];
                if(typeof(subTests) == 'function') {
                    await this.callTest(key, this.tests[key]);
                } else {
                    for(const subKey in subTests) {
                        if(subTests.hasOwnProperty(subKey)) {
                            await this.callTest(subKey, subTests[subKey]);
                        }
                    }
                }
            }
        }

    };

/**
  * the function build report with results of executed tests
  * @return: the string with report
  * @required_params: None
  * @optional_params: None
  */
    produceReport() {
        var report = '';
        report += ""+'\n';
        report += "============== BEGIN TEST REPORT ==============="+'\n';
        report += ""+'\n';
        report += "Total tests: "+this.limit+'\n';
        report += "Success: "+this.successes+'\n';
        report += "Fails: "+(typeof(this.errors.length) == 'undefined' ? 0 : this.errors.length)+'\n';
        report += ""+'\n';
        if(this.errors.length > 0) {
            for(const rec of this.errors) {
                report += "============== ERROR DETAILS ==============="+'\n';
                report += '\x1b[31m%s\x1b[0m', "test: "+rec.name+":"+'\n';
                report += rec.error+'\n';
                report += "============================================"+'\n';
            }
        }
        report += "================================================\n";
        return report;
    };
};

module.exports = TestRunner;