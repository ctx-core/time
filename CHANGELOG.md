# @ctx-core/time

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
