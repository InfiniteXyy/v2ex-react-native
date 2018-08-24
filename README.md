# v2ex-react-native
another v2ex client build with `React-Native`

### screenshots
<div>
    <img width="250" src="https://raw.githubusercontent.com/InfiniteXyy/v2ex-react-native/master/screenshots/small1.png">
    <img width="250" src="https://raw.githubusercontent.com/InfiniteXyy/v2ex-react-native/master/screenshots/small2.png">
</div>

### quick start 
```bash
yarn 
// yarn run-ios
yarn start
```
**注意：开源库有一个bug，需要在`node_modules`中手动修改**

*react-native-scrollable-tab-view/SceneComponent.js*
```javascript
...
const SceneComponent = (Props) => {
    // 修改这里第九行 "props, }" 变为 "props }"
  const {shouldUpdated, ...props, } = Props;
  return <View {...props}>
...
```
