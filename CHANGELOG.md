# @ctx-core/time

## 9.1.14

### Patch Changes

- @ctx-core/dev-tools: 8.1.107 -> 8.1.108
- @ctx-core/build: 1.0.295 -> 1.0.296
- @ctx-core/git-tools: ^7.0.57 -> ^7.0.58
- @ctx-core/ctx-core-package-tools: ^8.0.187 -> ^8.0.188
- @ctx-core/monorepo: ^20.2.1 -> ^20.2.2
- @ctx-core/function: ^21.17.12 -> ^21.17.13
- @ctx-core/queue: ^7.5.13 -> ^7.5.15

## 9.1.13

### Patch Changes

- @ctx-core/dev-tools: 8.1.94 -> 8.1.107
- @pnpm/list: ^9.0.2 -> ^9.0.3
- @ctx-core/queue: ^7.5.1 -> ^7.5.13
- pnpm: 8.2.0 -> 8.3.0
- @ctx-core/build: 1.0.281 -> 1.0.295
- @ctx-core/git-tools: ^7.0.45 -> ^7.0.57
- @ctx-core/monorepo: ^20.1.0 -> ^20.2.1
- @pnpm/sort-packages: ^5.0.0 -> ^5.0.1

## 9.1.0

### Minor Changes

- extract _.js & _.d.ts into directories

## 9.0.41

### Patch Changes

- @swc/core: ^1.3.31 -> ^1.3.32

## 9.0.40

### Patch Changes

- tsconfig.json: - importsNotUsedAsValues

## 9.0.39

### Patch Changes

- rimraf: ^4.0.1 -> ^4.0.4

## 9.0.38

### Patch Changes

- rimraf: ^3.0.2 -> ^4.0.1

## 9.0.37

### Patch Changes

- package.json: exports: update

## 9.0.36

### Patch Changes

- sideEffects = false

## 9.0.35

### Patch Changes

- @swc/core: ^1.2.125 -> ^1.2.127

## 9.0.34

### Patch Changes

- version bump

## 9.0.33

### Patch Changes

- .js + .d.ts instead of .ts

## 9.0.32

### Patch Changes

- fix: error TS6059: \* is not under 'rootDir': package.json: types: ./dist/index.d.ts

## 9.0.31

### Patch Changes

- tsconfig.json: "target": "ES2021"

## 9.0.30

### Patch Changes

- package.json: "types": "./src/index.ts": better editing experience

## 9.0.29

### Patch Changes

- fix: build

## 9.0.28

### Patch Changes

- \*.d.ts export

## 9.0.27

### Patch Changes

- fix: tsconfig.json: "rootDir": "."

## 9.0.26

### Patch Changes

- fix: package.json: exports

## 9.0.25

### Patch Changes

- package.json: svelte: ./dist/index.js

## 9.0.24

### Patch Changes

- package.json: - module

## 9.0.23

### Patch Changes

- package.json: - "main": explicitly not support cjs

## 9.0.22

### Patch Changes

- @swc/core: ^1.2.117 -> ^1.2.118

## 9.0.21

### Patch Changes

- @swc/core: ^1.2.116 -> ^1.2.117

## 9.0.20

### Patch Changes

- @swc/core: ^1.2.113 -> ^1.2.116

## 9.0.19

### Patch Changes

- @swc/cli: ^0.1.51 -> ^0.1.52
- @swc/core: ^1.2.111 -> ^1.2.113

## 9.0.18

### Patch Changes

- @swc/core: ^1.2.110 -> ^1.2.111

## 9.0.17

### Patch Changes

- typescript: ^4.4.4 -> ^4.5.2
- @swc/core: ^1.2.108 -> ^1.2.110

## 9.0.16

### Patch Changes

- @swc/core: ^1.2.107 -> ^1.2.108

## 9.0.15

### Patch Changes

- compile using swc

## 9.0.14

### Patch Changes

- typescript: ^4.4.3 -> ^4.4.4

## 9.0.13

### Patch Changes

- typescript: ^4.4.2 -> ^4.4.3

## 9.0.12

### Patch Changes

- typescript: ^4.3.5 -> ^4.4.2

## 9.0.11

### Patch Changes

- fix: "exports": "./package.json": "./package.json"

## 9.0.10

### Patch Changes

- exports: + "package.json": "./package.json"

## 9.0.9

### Patch Changes

- fix: sourceMappingURL: "mapRoot": ""

## 9.0.8

### Patch Changes

- tsconfig.json: "target": "es2019"

## 9.0.7

### Patch Changes

- fix: cjs: load as a Promise

## 9.0.6

### Patch Changes

- "main": "./dist/index.cjs"

## 9.0.5

### Patch Changes

- fix: index.cjs: module.exports = require('./index.js')

## 9.0.4

### Patch Changes

- back to esm module with cjs using esm npm package to load library

## 9.0.3

### Patch Changes

- support cjs & esm: + "exports"

## 9.0.2

### Patch Changes

- fix: "type": "module"

## 9.0.1

### Patch Changes

- 2a6971f80: fix: "type": "module"
- fix: "type": "module"

## 9.0.0

### Major Changes

- "type": "module": module npm type

## 8.0.10

### Patch Changes

- typescript: ^4.3.4 -> ^4.3.5

## 8.0.9

### Patch Changes

- dist directory

## 8.0.8

### Patch Changes

- tsconfig.json: "lib": ["dom", "ESNext"]

## 8.0.7

### Patch Changes

- "prepublishOnly": "npm run clean && npm run compile"

## 8.0.6

### Patch Changes

- fix: deploying \*.js files

## 8.0.5

### Patch Changes

- "prepare": "npm run clean && npm run compile"

## 8.0.4

### Patch Changes

- npm run prepare instead of npm run prepublishOnly

## 8.0.3

### Patch Changes

- fix: npm run clean

## 8.0.2

### Patch Changes

- typescript: ^4.3.3 -> ^4.3.4

## 8.0.1

### Patch Changes

- typescript: ^4.3.2 -> ^4.3.3

## 8.0.0

### Major Changes

- move from dist to src directory

## 7.0.2

### Patch Changes

- version bump: run build

## 7.0.1

### Patch Changes

- fix: build: clean up old build files in dist

## 7.0.0

### Major Changes

- \$ suffix for stores
- \_ suffix for factory functions

## 6.4.1

### Patch Changes

- update dependencies

## 6.4.0

### Minor Changes

- fix tsc build directory issues

## 6.3.1

### Patch Changes

- .gitignore: - \*.js

## 6.3.0

### Minor Changes

- dist,types directory: addressing typescript build issues

## 6.2.3

### Patch Changes

- types: ./src/index.d.ts: address error TS2742 issue

## 6.2.2

### Patch Changes

- .npmignore: + ~

## 6.2.1

### Patch Changes

- fix: target: 2018: nodejs compatability

## 6.2.0

### Minor Changes

- "noImplicitAny": true

## 6.1.6

### Patch Changes

- update dependencies

## 6.1.5

### Patch Changes

- typescript: ^4.2.3 -> ^4.2.4

## 6.1.4

### Patch Changes

- version bump

## 6.1.3

### Patch Changes

- fix: npm publish: https://github.com/npm/cli/issues/2834

## 6.1.2

### Patch Changes

- fix: npm run compile: tsc -b .

## 6.1.1

### Patch Changes

- typescript: ^4.2.2 -> ^4.2.3

## 6.1.0

### Minor Changes

- \_timestamp_ms,hour_ms,minute_ms,month_ms,year_ms

### Patch Changes

- \_timestamp_ms: returns current new Date().getTime()

## 6.0.4

### Patch Changes

- version bump

## 6.0.3

### Patch Changes

- typescript: ^4.1.5 -> ^4.2.2

## 6.0.2

### Patch Changes

- typescript: ^4.1.4 -> ^4.1.5

## 6.0.1

### Patch Changes

- typescript: ^4.1.3 -> ^4.1.4

## 6.0.0

### Major Changes

- src directory

## 5.1.0

### Minor Changes

- \_timestamp_milliseconds as \_milliseconds\_\_timestamp
- \_since_time_text as \_text**time**since
- month_ms as milliseconds\_\_month
- year_seconds as seconds\_\_year
- day_seconds as seconds\_\_day
- minute_seconds as seconds\_\_minute
- month_seconds as seconds\_\_month
- hour_seconds as seconds\_\_hour
- day_ms as milliseconds\_\_day
- year_ms as milliseconds\_\_year
- hour_ms as milliseconds\_\_hour
- minute_ms as milliseconds\_\_minute

## 5.0.5

### Patch Changes

- - .rush

## 5.0.4

### Patch Changes

- typescript: ^4.1.2 -> ^4.1.3

## 5.0.3

### Patch Changes

- typescript: ^4.0.5 -> ^4.1.2

## 5.0.1

### Patch Changes

- typescript: ^4.0.3 -> ^4.0.5

## 5.0.0

### Major Changes

- Typescript strict checking

## 4.1.34

### Patch Changes

- fix: npm run compile: path to tsc
