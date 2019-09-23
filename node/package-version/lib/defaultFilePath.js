const github = require('@actions/github');

exports.defaultFilePath = () => {
  const context = github.context;

  const repoName = context.repo.split('/');

  return `/home/runner/work/${repoName}/${repoName}/package.json`;
};
