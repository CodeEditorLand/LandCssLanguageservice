# vscode-css-languageservice

Language services for CSS, LESS and SCSS

[![npm Package](https://img.shields.io/npm/v/vscode-css-languageservice.svg?style=flat-square)](https://www.npmjs.org/package/vscode-css-languageservice)
[![NPM Downloads](https://img.shields.io/npm/dm/vscode-css-languageservice.svg)](https://npmjs.org/package/vscode-css-languageservice)
[![Build Status](https://github.com/microsoft/vscode-css-languageservice/actions/workflows/node.js.yml/badge.svg)](https://github.com/microsoft/vscode-css-languageservice/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Why?

The _vscode-css-languageservice_ contains the language smarts behind the CSS,
LESS and SCSS editing experience of Visual Studio Code and the Monaco editor.

-   _doValidation_ analyses an input string and returns syntax and lint errors.
-   _doComplete_ provides completion proposals for a given location.
-   _doHover_ provides a hover text for a given location.
-   _findDefinition_ finds the definition of the symbol at the given location.
-   _findReferences_ finds all references to the symbol at the given location.
-   _findDocumentHighlights_ finds all symbols connected to the given location.
-   _findDocumentSymbols_ provides all symbols in the given document
-   _doCodeActions_ evaluates code actions for the given location, typically to
    fix a problem.
-   _findDocumentColors_ evaluates all color symbols in the given document
-   _doRename_ renames all symbols connected to the given location.
-   _prepareRename_ the range of the node that can be renamed
-   _getFoldingRanges_ returns folding ranges in the given document.

## 🚀 Installation

    npm install --save vscode-css-languageservice

## API

For the complete API see [cssLanguageService.ts](./src/cssLanguageService.ts)
and [cssLanguageTypes.ts](./src/cssLanguageTypes.ts)

## Development

-   clone this repo, run `npm install``
-   `npm test` to compile and run tests

How can I run and debug the service?

-   open the folder in VSCode.
-   set breakpoints, e.g. in `cssCompletion.ts`
-   run the Unit tests from the run viewlet and wait until a breakpoint is hit:
    ![image](https://user-images.githubusercontent.com/6461412/94239202-bdad4e80-ff11-11ea-99c3-cb9dbeb1c0b2.png)

How can I run and debug the service inside an instance of VSCode?

-   run VSCode out of sources setup as described here:
    https://github.com/Microsoft/vscode/wiki/How-to-Contribute
-   run `npm link` in the folder of `vscode-css-languageservice`
-   use `npm link vscode-css-languageservice` in
    `vscode/extensions/css-language-features/server` to run VSCode with the
    latest changes from `vscode-css-languageservice`
-   run VSCode out of source (`vscode/scripts/code.sh|bat`) and open a `.css`
    file
-   in VSCode window that is open on the `vscode-css-languageservice` sources,
    run command `Debug: Attach to Node process` and pick the `code-oss` process
    with the `css-language-features` path
    ![image](https://user-images.githubusercontent.com/6461412/94242567-842b1200-ff16-11ea-8f85-3ebb72d06ba8.png)
-   set breakpoints, e.g. in `cssCompletion.ts`
-   in the instance run from sources, invoke code completion in the `.css` file

**Note: All CSS entities (properties, at-rules, etc) are sourced from
https://github.com/microsoft/vscode-custom-data/tree/master/web-data and
transpiled here. For adding new property or fixing existing properties'
completion/hover description, please open PR there).**

## License

(MIT License)

Copyright 2016, 20 Microsoft

With the exceptions of `build/mdn-documentation.js`, which is built upon content
from [Mozilla Developer Network](https://developer.mozilla.org/docs/Web) and
distributed under CC BY-SA 2.5.
