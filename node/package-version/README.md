# node-package-version

Retrieve the package version from a Node.js project

## Inputs

### `path`

Relative path of the `package.json` containing the version to retrieve.

Defaults to `./package.json`

## Outputs

### `version`

Version retrieved for the Node.js project.

## Example Usage

```yaml
- uses: malomohq/node/package-version@master
  with:
    path: ./node/package-version
```
