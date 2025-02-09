# 基于 [fork](https://github.com/wsfe/vue-tree) 做了以下

优化
- 支持`node`使用`slot`
- 本地`npm link`开发直接使用源码，之前使用`vue-cli`不支持，`vite`没问题
- 使用具体props传递给node，防止dom上出现大量attr属性与方法定义

bugfix
- 解决 `vue2.7` 报错
- 展开时scroll位置变化导致指向的节点发生了偏移
- typescript类型支持(vue 2.7.16)


# 开发

```bash
# 当前目录
pnpm link --global

# 依赖目录
cd packages/aweb-ui
rm ./node_modules/@kxxxl-front-end/vue-tree
pnpm link --global @kxxxl-front-end/vue-tree
rm -rf ./node_modules/.vite
```

# 功能说明

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

## typescript类型

```
import { VTree } from '@kxxxl-front-end/vue-tree'

const vtree: InstanceType<typeof VTree>
vtree.setData // 可以跳转和联想
```
