# README

移动端 TabBar 组件。

## USAGE

```
import TabBar from '@hotoo/tabbar';

render() {
  return (
    <TabBar ref="tabbar" activeIndex={state.defaultTab} showTabBar={true} data-aspm="">
      <TabBar.Item key="index" label="精选"
        reddot={true}
        iconClassName="icon-index" iconActiveClassName="icon-active-index"
        onActive={this.activeIndex}
        inActive={this.inactiveIndex}
        data-aspm-click="c10229.d18695">

        <div>APP 1</div>

      </TabBar.Item>
      <TabBar.Item key="market" label="理财"
        reddot={false}
        iconClassName="icon-market" iconActiveClassName="icon-active-market"
        onActive={this.activeMarket}
        inActive={this.inactiveMarket}
        data-aspm-click="c10229.d18696">

        <div>APP 2</div>

      </TabBar.Item>
      <TabBar.Item key="asset" label="资产"
        reddot={false}
        iconClassName="icon-asset" iconActiveClassName="icon-active-asset"
        onActive={this.activeAsset}
        inActive={this.inactiveAsset}
        data-aspm-click="c10229.d18697">

        <div>APP 3</div>

      </TabBar.Item>
    </TabBar>
  );
}
```

## API

### TabBar

- {Number} activeIndex 默认激活的 Tab，默认为 0。
- {Boolean} showTabBar 是否显示 TabBar，默认 true。

### TabBar.Item

- {Boolean} reddot 是否显示红点，默认 false。
- {String} iconClassName 图标的样式名称。可以方便使用合并图片提升用户体验。
- {Function} onActive 激活 Tab 时触发。
- {Function} inActive 离开 Tab 时触发。
