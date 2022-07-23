# vite-plugin-add-version
vite构建发布包过程中给js和css添加自定义版本号防止缓存

# 用法
 1. 安装依赖包
```sh
npm i vite-plugin-add-version -D
```
 2. 在**vite.config.js**里调用<br>
```js
    // vite.config.js
    import addVersion from 'vite-plugin-add-version';

    const version = require('./package.json')['version'];
    const buildVersion = `${version.replace(/\./g, '_')}_${(new Date()).getTime()}`; //customer_version
    export default defineConfig({
       ...
       plugins: [
         addVersion(buildVersion),
       ]
       ...
    });
```
