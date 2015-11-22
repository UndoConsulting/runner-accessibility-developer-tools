'use strict'; // eslint-disable-line
const path = require('path');

class A11yDeveloperToolsRunner {
    getCompanionFiles() {
        return [
            path.join(__dirname, 'node_modules', 'accessibility-developer-tools', 'dist/js/axs_testing.js'),
        ];
    }

    /* global axs:false */
    getRunnable() {
        /*eslint-disable */
        return function axsRunner() {
            var results = axs.Audit.run();
            window.callPhantom(null, axs.Audit.auditResults(results));
        };
        /*eslint-enable */
    }
}
module.exports = A11yDeveloperToolsRunner;