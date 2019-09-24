# node-package-version

Retrieve the package version from a Node.js project

## Inputs

### `filePath`

Path to the package.json containing the version to retrieve.

Defaults to the path checked out by `actions/checkout`.

### `prefix`

Prepended to version.

### `suffix`

Appended to version.

## Outputs

### `version`

Version retrieved for the Node.js project.

## Example Usage

```yaml
- uses: malomohq/node/package-version@master
  with:
    filePath: ./node/package-version
    prefix: v
    suffix: -beta
```

Given a `package.json` with a `version` of `1.0.0` the above example will
provide an output of `v1.0.0-beta`.
