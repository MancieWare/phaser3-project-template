# MancieWare Notes

The README for the changes made in this fork.

## Synopsis

This is just a fork of the original [Phaser3 Project Template](https://github.com/photonstorm/phaser3-project-template) provided by [Photonstorm](https://github.com/photonstorm).  This repo is for note taking and education - to gain a better understanding of the framework and implementation practices.

## Getting Started

After `npm install` found 527 vulnerabilities, ran `npm audit fix`:

`fixed 520 of 527 vulnerabilities in 884 scanned packages`
`  5 vulnerabilities required manual review and could not be updated`
`  1 package update for 2 vulnerabilities involved breaking changes`
`  (use 'npm audit fix --force' to install breaking changes; or refer to 'npm audit' for steps to fix these manually)`

Then ran `npm start` which executed fine (`｢wdm｣: Compiled successfully.`).  Found some intersting output in Chrome console:

```javascript
WebAudioSoundManager.js?dbd9:114 The AudioContext was not allowed to start. It must be resumed (or created) after a user gesture on the page. https://goo.gl/7K7WLu
createAudioContext @ WebAudioSoundManager.js?dbd9:114
DebugHeader.js?0e19:116      Phaser v3.20.1-FB (WebGL | Web Audio)  https://phaser.io
client?81da:52 [WDS] Live Reloading enabled.
:8080/favicon.ico:1 Failed to load resource: the server responded with a status of 404 (Not Found)
```

^ Not sure what's meant exactly by `AudioContext was not allowed to start`, will need to investigate [TODO]

Since the project still runs, continuing on with security fixes:

`npm install --save-dev terser-webpack-plugin@4.1.0`

The above was the suggested way to fix a dev dependency - this added it to the package.json file and installed it.  Still after execution:

```bash
 found 8 vulnerabilities (6 low, 1 moderate, 1 high)
  run `npm audit fix` to fix them, or `npm audit` for details
```

So...`$ npm audit fix`:

```bash
fixed 2 of 8 vulnerabilities in 925 scanned packages
  6 vulnerabilities required manual review and could not be updated
```

which means another `npm audit` -> [NPM audit additional guidance](https://go.npm.me/audit-guide)

_Note: this is my own summary of the output combined with an attempt to fix it_

Package: minimist

```bash
                       === npm audit security report ===                        
┌───────────────┬──────────────────────────────────────────────────────────────┐
│ Low           │ Prototype Pollution                                          │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Package       │ minimist                                                     │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Patched in    │ >=0.2.1 <1.0.0 || >=1.2.3                                    │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Dependency of │ webpack [dev]                                                │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Path          │ webpack > watchpack > watchpack-chokidar2 > chokidar >       │
│               │ fsevents > node-pre-gyp > mkdirp > minimist                  │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ More info     │ https://npmjs.com/advisories/1179                            │
└───────────────┴──────────────────────────────────────────────────────────────┘
┌───────────────┬──────────────────────────────────────────────────────────────┐
│ Low           │ Prototype Pollution                                          │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Package       │ minimist                                                     │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Patched in    │ >=0.2.1 <1.0.0 || >=1.2.3                                    │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Dependency of │ webpack-dev-server [dev]                                     │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Path          │ webpack-dev-server > chokidar > fsevents > node-pre-gyp >    │
│               │ mkdirp > minimist                                            │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ More info     │ https://npmjs.com/advisories/1179                            │
└───────────────┴──────────────────────────────────────────────────────────────┘
┌───────────────┬──────────────────────────────────────────────────────────────┐
│ Low           │ Prototype Pollution                                          │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Package       │ minimist                                                     │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Patched in    │ >=0.2.1 <1.0.0 || >=1.2.3                                    │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Dependency of │ webpack [dev]                                                │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Path          │ webpack > watchpack > watchpack-chokidar2 > chokidar >       │
│               │ fsevents > node-pre-gyp > tar > mkdirp > minimist            │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ More info     │ https://npmjs.com/advisories/1179                            │
└───────────────┴──────────────────────────────────────────────────────────────┘
┌───────────────┬──────────────────────────────────────────────────────────────┐
│ Low           │ Prototype Pollution                                          │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Package       │ minimist                                                     │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Patched in    │ >=0.2.1 <1.0.0 || >=1.2.3                                    │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Dependency of │ webpack-dev-server [dev]                                     │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Path          │ webpack-dev-server > chokidar > fsevents > node-pre-gyp >    │
│               │ tar > mkdirp > minimist                                      │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ More info     │ https://npmjs.com/advisories/1179                            │
└───────────────┴──────────────────────────────────────────────────────────────┘
┌───────────────┬──────────────────────────────────────────────────────────────┐
│ Low           │ Prototype Pollution                                          │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Package       │ minimist                                                     │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Patched in    │ >=0.2.1 <1.0.0 || >=1.2.3                                    │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Dependency of │ webpack [dev]                                                │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Path          │ webpack > watchpack > watchpack-chokidar2 > chokidar >       │
│               │ fsevents > node-pre-gyp > rc > minimist                      │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ More info     │ https://npmjs.com/advisories/1179                            │
└───────────────┴──────────────────────────────────────────────────────────────┘
┌───────────────┬──────────────────────────────────────────────────────────────┐
│ Low           │ Prototype Pollution                                          │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Package       │ minimist                                                     │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Patched in    │ >=0.2.1 <1.0.0 || >=1.2.3                                    │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Dependency of │ webpack-dev-server [dev]                                     │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Path          │ webpack-dev-server > chokidar > fsevents > node-pre-gyp > rc │
│               │ > minimist                                                   │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ More info     │ https://npmjs.com/advisories/1179                            │
└───────────────┴──────────────────────────────────────────────────────────────┘
found 6 low severity vulnerabilities in 925 scanned packages
  6 vulnerabilities require manual review. See the full report for details.
```

[Fixing security vulnerabilities in npm dependencies in less than 3 mins](https://itnext.io/fixing-security-vulnerabilities-in-npm-dependencies-in-less-than-3-mins-a53af735261d) by [Vivek Nayyar](https://itnext.io/@VivekNayyar) helped to solve the remaining dependencies (following the first suggestion) so at this point there are no `npm audit` perceived vulnerabilities, however, I haven't tried to build or run the site yet so first a test run:

`npm start` => Compiled successfully.  Going to commit at this point
