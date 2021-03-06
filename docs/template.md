[![Build status](https://img.shields.io/github/workflow/status/kaskadi/action-phswap/build?label=build&logo=mocha)](https://github.com/kaskadi/action-phswap/actions?query=workflow%3Abuild)
[![Static code analysis status](https://img.shields.io/github/workflow/status/kaskadi/action-phswap/analyze-code?label=codeQL&logo=github)](https://github.com/kaskadi/action-phswap/actions?query=workflow%3Aanalyze-code)
[![Docs generation status](https://img.shields.io/github/workflow/status/kaskadi/action-phswap/generate-docs?label=docs&logo=read-the-docs)](https://github.com/kaskadi/action-phswap/actions?query=workflow%3Agenerate-docs)

**CodeClimate**

[![](https://img.shields.io/codeclimate/maintainability/kaskadi/action-phswap?label=maintainability&logo=Code%20Climate)](https://codeclimate.com/github/kaskadi/action-phswap)
[![](https://img.shields.io/codeclimate/tech-debt/kaskadi/action-phswap?label=technical%20debt&logo=Code%20Climate)](https://codeclimate.com/github/kaskadi/action-phswap)
[![](https://img.shields.io/codeclimate/coverage/kaskadi/action-phswap?label=test%20coverage&logo=Code%20Climate)](https://codeclimate.com/github/kaskadi/action-phswap)

****

{{>main}}
---

**Swap configuration:**
In order to tell the action which files to check for replacement, you need to add the following field into your `package.json` file (root level):

```json
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