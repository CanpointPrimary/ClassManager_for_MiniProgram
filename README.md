# ClassManager_for_MiniProgram

## 1.如何运行

#### 1.1小程序模拟

克隆代码到本地，导入微信小程序开发者工具，点击编译--预览

#### 1.2测试运行

##### 1.2.1 测试环境

小程序测试是运行在 node 环境中的，要进行小程序自动化测试需要先安装 nodeJs和 miniprogram-automator，以及断言工具使用的 jest。

**要求**

- 安装 `Node.js` 并且版本大于 8.0
- 基础库版本为 `2.7.3` 及以上
- 开发者工具版本为 `1.02.1907232` 及以上
- 安装jest

**命令**

```
npm install miniprogram-automator --save-dev
npm install --save-dev jest // 参考官方 https://jestjs.io/zh-Hans/docs/getting-started
```

## 2.业务介绍

#### 2.1各页面及描述

| 页面名   | 页面描述         | 页面路径             | 参数描述 |
| -------- | ---------------- | -------------------- | -------- |
| Login    | 第一次登录跳转页 | pages/login/login    | 无       |
| UserInfo | 用户信息填写页   | pages/login/userInfo | 无       |
| Users    | 用户首页         | pages/users/users    | 无       |

#### 2.2信息备注

开发版本中会使用小程序自带mock进行请求响应，可能会导致使用响应回调参数进行列表渲染的元素渲染失败。

