# 基于 [fork](https://github.com/wsfe/vue-tree) 做了以下优化
- 解决 `vue2.7` 报错
- 支持node使用`slot`
- 展开时scroll位置变化导致指向的节点发生了偏移
- 本地`npm link`开发直接使用源码，之前使用`vue-cli`不支持，`vite`没问题

# 开发

```bash
# 当前目录
pnpm link --global

# 依赖目录
pnpm link --global @kxxxl-front-end/vue-tree
```

# 功能描述

## node slot

```html
<VTree
  :filterMethod="filterTree"
  :expandOnFilter="false"
  :load="createExpand"
  :nodeClassName="getNodeClass"
  :nodeMinHeight="height"
>
  <template #node="{ node }">
    <CNode :node="node" />
  </template>
</VTree>
```
