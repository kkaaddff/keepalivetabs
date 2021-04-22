# keepalivetabs

### demo
基于 `react router` 结合`ant-design tabs` 在切换时使用`display:none;`隐藏组件
实现的 `react keepalive` 在切换路由时自动匹配加载子组件，切换`tabs`自动使用缓存，
做了 `benchmark` 测试 全局依赖变化导致的批量更新，有性能问题，

已经优化设计和实现后用于生产环境

#### TODO: 
解决全局状态变化触发的大量子组件更新 解决思路

    1. 手动管理dispatch，做异步派发更新 
        优点：更新节奏可控 等等
        缺点：当大规模组件更新时，整个周期时间拉长，期间用户操作会出现数据不一致的情况
    2. 使用发布订阅的拉模型策略，在切换active组件时触发actived组件自更新
        优点：每次只更新一个组件，性能和交互都可控
        缺点：在切换的组件需要触发大量更新操作时页面响应可能会比较慢，需要手动实现大部分功能，开发维护成本高

## Getting Started

Install dependencies,

```bash
$ yarn
```

Start the dev server,

```bash
$ yarn start
```
