# [webpack](https://webpack.js.org/guides/getting-started/)
webpack学习

## 创建项目
```
mkdir webpack-demo
cd webpack-demo
npm init -y
npm install webpack --save-dev
npm install webpack-cli --save-dev
```

## 启动项目
```
npx webpack
```
生成
```text
...
Built at: 13/06/2018 11:52:07
  Asset      Size  Chunks             Chunk Names
main.js  70.4 KiB       0  [emitted]  main
...

WARNING in configuration
The 'mode' option has not been set, webpack will fallback to 'production' for this value. Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/configuration/mode/
```

index.html在浏览器中打开，如果一切正常，您应该看到以下文本：'Hello webpack'。

```json
  {
    "name": "webpack-demo",
    "version": "1.0.0",
    "description": "",
    "scripts": {
-      "test": "echo \"Error: no test specified\" && exit 1"
+      "test": "echo \"Error: no test specified\" && exit 1",
+      "build": "webpack"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "devDependencies": {
      "webpack": "^4.20.2",
      "webpack-cli": "^3.1.2"
    },
    "dependencies": {
      "lodash": "^4.17.5"
    }
```
npm run build可以使用该npx命令代替我们之前使用的命令

结论
