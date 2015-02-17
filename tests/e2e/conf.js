var HtmlReporter = require('protractor-html-screenshot-reporter');
exports.config = {

    // The address of a running selenium server.
     seleniumAddress: 'http://localhost:4444/wd/hub',

    //Specify the test code that will run
    specs: [
        'spec.js'
    ],



    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        // 'browserName': 'phantomjs',
        'browserName': 'chrome',
    },

    // baseUrl: 'http://localhost:8000/',
    framework: 'jasmine',

    allScriptsTimeout: 30000,

    onPrepare: function() {
        browser.driver.manage().window().setSize(1600, 800);
        var folderName = (new Date()).toString().split(' ').splice(1, 4).join(' ');
        var mkdirp = require('mkdirp');
        var newFolder = "./xml_data/" + folderName;
        require('jasmine-reporters');

        mkdirp(newFolder, function(err) {
            if (err) {
                console.error(err);
            } else {
                jasmine.getEnv().addReporter(new jasmine.JUnitXmlReporter(newFolder, true, true));
            }
        });
        jasmine.getEnv().addReporter(new HtmlReporter({
            baseDirectory: '../e2e/reporting',
            docName: 'index.html'
        }));
    },

    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000,
        isVerbose: true,
        includeStackTrace: true
    }
};
