# vue-template

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn run serve
```

### Compiles and minifies for production

```
yarn run build
```

### Lints and fixes files

```
yarn run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## 目录结构

```
vue-template
├── dist // 编译输出目录
├── public // 放置任何需要绝对路径引入的静态资源
├── src
│   ├── api // 封装后的 API 接口
│   ├── assets // 直接引用的静态资源
│   ├── components // 通用组件
│   ├── mock // mock
│   ├── pages  // 页面
│   ├── plugins // 通用插件
│   ├── router  // 路由管理
│   ├── store  // 状态管理
│   ├── utils  // 通用工具方法
│   ├── App.vue
│   └── main.js // 项目入口文件
├── .browserslistrc // 浏览器兼容列表
├── .editorconfig // 编辑器配置
├── .env // 环境变量配置
├── .eslintrc // eslint配置
├── .gitignore // git上传忽略列表
├── babel.config.js // babel配置
├── package.json
├── postcss.config.js // postcss配置
├── vue.config.js // 项目vue配置
└── yarn.lock // 安装依赖的锁定版本（必要时可删除，重新安装依赖）
```

- [vue.config.js](https://cli.vuejs.org/config/#vue-config-js): vue-cli 的配置项，详情参见
- [public](https://cli.vuejs.org/guide/html-and-static-assets.html#the-public-folder): 放置任何需要绝对路径引入的静态资源
- dist: 默认打包输出目录
- src/api: 封装后的 API 接口
- src/assets: 直接引用的静态资源
- src/components: Vue 通用组件
- src/mock: 前端 mock
- src/pages: Vue 页面
- src/plugins: Vue 插件
- src/router: Vue 路由
- src/store: VueX
- src/utils: 工具类
- src/app.vue: Vue 主页面
- src/main.js: Vue 打包入口文件
