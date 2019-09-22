const core = require('@actions/core');

const path = require('path');

try {
  const packagePath = path.join(core.getInput('path'), 'package.json');

  const package = require(packagePath);

  core.setOutput('version', package.version);
} catch (error) {
  core.setFailed(error.message);
}
