# WebRandomX

WebRandomX is a JavaScript/WASM implementation of [RandomX](https://github.com/tevador/RandomX) PoW for web use cases.

## Build

### Linux

#### Get Source code

```
git clone git@github.com:pikapikapikachuuu/WebRandomX.git
```

#### WASM

Prerequisites: emcc, cmake, make
```
cd WebRandomX/src
mkdir bin && cd bin
emcmake cmake -DARCH=native ..
make
```

To generate `web-randomx-tests` and  `web-randomx-benchmark` executables for testing, just set the `TESTS` option to true and run the generated scripts with Node.js:
```
emcmake cmake -DARCH=native -DTESTS=true ..
node web-randomx-tests.js
node web-randomx-benchmark.js [options]
```

#### Web App

Prerequisites: npm
```
cd WebRandomX
npm install
```

For development, run:

```
npm run dev
```

Then lauch Chrome debugger through VSCode or manually.

For production, run:
```
npm run build
```
Webpack will generate the files and put them in the WebRandomX/dist folder for you. Then you can deploy your website with Nginx or Apache, etc.

**Note**: The default proxy server (based on [WRXProxy](https://github.com/pikapikapikachuuu/WRXProxy)) is connected to the author's XMR address.
