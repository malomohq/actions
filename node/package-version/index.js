const core = require('@actions/core');

try {
  const package = require(core.getInput('filePath'));

  core.setOutput('version', package.version);
} catch (error) {
  core.setFailed(error.message);
}
