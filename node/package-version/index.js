const core = require('@actions/core');

try {
  const path = core.getInput('path');

  const package = require(`${path}/package.json`);

  core.setOutput('version', package.json);
} catch (error) {
  core.setFailed(error.message);
}
