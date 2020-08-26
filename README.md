[![Build status](https://img.shields.io/github/workflow/status/kaskadi/action-phswap/build?label=build&logo=mocha)](https://github.com/kaskadi/action-phswap/actions?query=workflow%3Abuild)

**CodeClimate**

[![](https://img.shields.io/codeclimate/maintainability/kaskadi/action-phswap?label=maintainability&logo=Code%20Climate)](https://codeclimate.com/github/kaskadi/action-phswap)
[![](https://img.shields.io/codeclimate/tech-debt/kaskadi/action-phswap?label=technical%20debt&logo=Code%20Climate)](https://codeclimate.com/github/kaskadi/action-phswap)
[![](https://img.shields.io/codeclimate/coverage/kaskadi/action-phswap?label=test%20coverage&logo=Code%20Climate)](https://codeclimate.com/github/kaskadi/action-phswap)

**LGTM**

[![](https://img.shields.io/lgtm/grade/javascript/github/kaskadi/action-phswap?label=code%20quality&logo=lgtm)](https://lgtm.com/projects/g/kaskadi/action-phswap/?mode=list)

****

# What is this action for?

This action is replacing placeholder in files.

# How to use it?

You can use the following code as a new _GitHub Actions Workflow_:

```
name: {YOUR-ACTION-NAME}
on: [{YOUR-ACTION-EVENT}]
jobs:
  {YOUR-JOB-NAME}:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - name: {YOUR-STEP-NAME}
      uses: kaskadi/action-phswap@master
      env:
        DUPLETS: [{PLACEHOLDER-1}]:[{REPLACEMENT-1}] [{PLACEHOLDER-2}]:[{REPLACEMENT-2}] ... [{PLACEHOLDER-N}]:[{REPLACEMENT-N}]
```

**Note:** everything contained in single curly brackets (`{ }`) needs to be replaced by your desired values

**Environment variables:**
|  Variable | Required | Description                                                                                                                                     |
|:---------:|:--------:|-------------------------------------------------------------------------------------------------------------------------------------------------|
| `DUPLETS` |    Yes   | `placeholder`:`replacement value` duplets. The swapping will be applied to every files provided in the configuration of this action (see below) |

---

**Swap configuration:**
In order to tell the action which files to check for replacement, you need to add the following field into your `package.json` file (root level):

```
"kaskadi": {
  "ph-swap": {
    "files": [
      {
        "src": "file1.ext",
        "dest": "path/to/file1.ext"
      },
      {
        "src": "path/to/file2.ext",
        "dest": "path/to/where/is/file2.ext"
      },
      {
        "src": "folder1/",
        "dest": "path/to/folder1/"
      }
    ]
  }
}
```

_Note:_ swapping a folder will always do a recursive swap (go through all folders and files from the given folder)