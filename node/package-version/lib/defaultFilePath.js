const github = require('@actions/github');

module.exports = () => {
  const { repo } = github.context;

  return `/home/runner/work/${repo}/${repo}/package.json`;
};
