const core = require('@actions/core');

try {
  const path = core.getInput('path');

  const package = require(`${path}/package.json`);

  console.log(package);

  core.setOutput('version', package.version);
} catch (error) {
  core.setFailed(error.message);
}
