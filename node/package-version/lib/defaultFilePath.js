const github = require('@actions/github');

module.exports = () => {
  const context = github.context;

  const repoName = context.repo.repo;

  return `/home/runner/work/${repoName}/${repoName}/package.json`;
};
