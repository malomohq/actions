const github = require('@actions/github');

module.exports = () => {
  const context = github.context;

  console.log(context.repo);

  const repoName = context.repo.split('/');

  return `/home/runner/work/${repoName}/${repoName}/package.json`;
};
