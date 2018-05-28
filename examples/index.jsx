/* eslint no-console:0 */
import '../src/tabbar.less';
import './index.less';
import TabBar from '../src/tabbar';
import React from 'react';
import ReactDOM from 'react-dom';

class Component extends React.Component {
  state = {
    disabled: false,
    readOnly: false,
    value: 5,
    defaultTab: 1,
    actualClientHeight: 0,
  };

  onChange = (value) => {
    console.log('onChange:', value);
    this.setState({ value });
  }
  toggleDisabled = () => {
    this.setState({
      disabled: !this.state.disabled,
    });
  }
  toggleReadOnly = () => {
    this.setState({
      readOnly: !this.state.readOnly,
    });
  }
  render() {
    const { state } = this;
    return (
      <TabBar ref="tabbar" activeIndex={state.defaultTab} showTabBar={true} data-aspm="">
        <TabBar.Item key="index" label="精选"
          reddot={true}
          iconClassName="icon-index" iconActiveClassName="icon-active-index"
          onActive={this.activeIndex}
          inActive={this.inactiveIndex}
          data-aspm-click="c10229.d18695">

          <div>APP 1</div><div>APP 111</div><div>APP 11111</div><div>APP 1111111</div><div>APP 111111111</div><div>APP 11111111111</div>
          <div>APP 11111111111</div><div>APP 111111111</div><div>APP 1111111</div><div>APP 11111</div><div>APP 111</div><div>APP 1</div>
          <div>APP 1</div><div>APP 111</div><div>APP 11111</div><div>APP 1111111</div><div>APP 111111111</div><div>APP 11111111111</div>
          <div>APP 11111111111</div><div>APP 111111111</div><div>APP 1111111</div><div>APP 11111</div><div>APP 111</div><div>APP 1</div>
          <div>APP 1</div><div>APP 111</div><div>APP 11111</div><div>APP 1111111</div><div>APP 111111111</div><div>APP 11111111111</div>
          <div>APP 11111111111</div><div>APP 111111111</div><div>APP 1111111</div><div>APP 11111</div><div>APP 111</div><div>APP 1</div>
          <div>APP 1</div><div>APP 111</div><div>APP 11111</div><div>APP 1111111</div><div>APP 111111111</div><div>APP 11111111111</div>
          <div>APP 11111111111</div><div>APP 111111111</div><div>APP 1111111</div><div>APP 11111</div><div>APP 111</div><div>APP 1</div>
          <div>APP 1</div><div>APP 111</div><div>APP 11111</div><div>APP 1111111</div><div>APP 111111111</div><div>APP 11111111111</div>
          <div>APP 1</div><div>APP 1</div><div>APP 1</div><div>APP 1</div><div>APP 1</div><div>APP 1</div>
          <div>APP 1</div><div>APP 1</div><div>APP 1</div><div>APP 1</div><div>APP 1</div><div>APP 1</div>
          <div>APP 1</div><div>APP 1</div><div>APP 1</div><div>APP 1</div><div>APP 1</div><div>APP 1</div>
          <div>APP 1</div><div>APP 1</div><div>APP 1</div><div>APP 1</div><div>APP 1</div><div>APP 1</div>
          <div>APP 1</div><div>APP 1</div><div>APP 1</div><div>APP 1</div><div>APP 1</div><div>APP 1</div>
          <div>APP 1</div><div>APP 1</div><div>APP 1</div><div>APP 1</div><div>APP 1</div><div>APP 1</div>
          <div>APP 1</div><div>APP 1</div><div>APP 1</div><div>APP 1</div><div>APP 1</div><div>APP 1</div>
          <div>APP 11111111111</div><div>APP 111111111</div><div>APP 1111111</div><div>APP 11111</div><div>APP 111</div><div>APP 1</div>
          <div>APP 1</div><div>APP 111</div><div>APP 11111</div><div>APP 1111111</div><div>APP 111111111</div><div>APP 11111111111</div>
          <div>APP 11111111111</div><div>APP 111111111</div><div>APP 1111111</div><div>APP 11111</div><div>APP 111</div><div>APP 1</div>
          <div>APP 111111111111111111111111111</div>

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
}

ReactDOM.render(<Component />, document.getElementById('__react-content'));
