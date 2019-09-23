const core = require('@actions/core');

try {
  const filePath = core.getInput('filePath');
  const prefix = core.getInput('prefix') || '';
  const suffix = core.getInput('suffix') || '';

  const package = require(filePath);

  core.setOutput('version', `${prefix}${package.version}${suffix}`);
} catch (error) {
  core.setFailed(error.message);
}
