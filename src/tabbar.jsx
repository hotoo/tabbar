import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './tabbar.less';

/**
 * HTML5 版 TabBar 实现。
 *
 * @usage
 *    <TabBar>
 *      <TabBar.Item label="精选" onActive={this.active0} onInActive={this.inactive0}>{tabpanel0}</TabBar.Item>
 *      <TabBar.Item label="理财" onActive={this.active1} onInActive={this.inactive1}>{tabpanel1}</TabBar.Item>
 *      <TabBar.Item label="资产" onActive={this.active2} onInActive={this.inactive2}>{tabpanel2}</TabBar.Item>
 *    </TabBar>
 */
class TabBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: props.activeIndex || 0,
      children: props.children,
    };
    this.scrollTops = [];
  }

  componentDidMount() {
    React.Children.forEach(this.state.children, (c, i) => {
      if (this.state.activeIndex === i && c.props.onActive) {
        c.props.onActive();
      }
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.children) {
      this.setState({
        children: nextProps.children,
      });
    }
  }

  // 切换 Tab
  // @param {Number} index switch to tabIndex
  onSwitch(index) {
    if (this.state.activeIndex === index) { return; }

    let curr, currIndex, next, nextIndex;
    React.Children.forEach(this.state.children, (c, i) => {
      if (this.state.activeIndex === i) {
        curr = c;
        currIndex = i;
      }
      if (index === i) {
        next = c;
        nextIndex = i;
      }
    });
    if (currIndex === nextIndex) { return; }

    if (curr && curr.props && curr.props.inActive) {
      this.scrollTops[currIndex] = document.body.scrollTop || 0;
      curr.props.inActive();
    }
    this.setState({
      activeIndex: index,
    });
    if (next && next.props && next.props.onActive) {
      next.props.onActive();
      const scrollTop = this.scrollTops[nextIndex] || 0;
      window.scrollTo(0, scrollTop);
      // 部分机型比较卡，需要延迟执行下。
      setTimeout(() => {
        window.scrollTo(0, scrollTop);
      }, 15);
    }
  }

  getTabPanelSize() {
    // 不显示 tabbar，则为整个可视区域的尺寸。
    let width = document.documentElement.clientWidth;
    let height = document.documentElement.clientHeight;
    // 如果显示 tabbar，则减去 bar 部分的高度。
    if (this.props.showTabBar) {
      height = height - ReactDOM.findDOMNode(this.refs.tabbar).getBoundingClientRect().height;
    }
    return {
      width,
      height,
    };
  }

  render() {
    const state = this.state;
    const children = state.children;
    // tabbar
    const tabs = children.map((child, index) => {
      const active = state.activeIndex === index ? 'active' : '';
      const iconClassName = active ? child.props.iconActiveClassName : child.props.iconClassName;
      const key = 'tabs-' + child.key;
      return (
        <div className={'tabbar-item ' + active} id={'menubar-' + child.key} key={key}
          onClick={this.onSwitch.bind(this, index)}
          data-aspm-expo data-aspm-click={child.props['data-aspm-click']}
          role="tab" aria-selected={state.activeIndex === index} aria-label={'标签页：' + child.props.label} tabIndex={index}>
          <div className="bar-box">
            { child.props.reddot ? <div className="reddot"></div> : null }
            <div className={'icon ' + iconClassName}></div>
            <div>{child.props.label}</div>
          </div>
        </div>
      );
    });
    const tabpanel = children.map((child, index) => {
      const active = state.activeIndex === index;
      const key = 'tabpanel-' + child.key;
      return (
        <div className={'tabpanel-item ' + (active ? 'active' : '') }
          role="tablist" aria-labelledby={'menubar-' + key} key={key} aria-hidden={!active}>
          <div className="tabpanel-body">
            {child.props.children}
          </div>
        </div>
      );
    });
    const tabClassName = 'tabs' + (this.props.showTabBar ? '' : ' no-tabbar');
    return (
      <div className={tabClassName}>
        <div className="tabpanel" role="tabpanel">
          {tabpanel}
        </div>
        {
          this.props.showTabBar ?
            <div className="tabbar" id="tabbar" ref="tabbar" role="tablist">
              {tabs}
            </div>
            : null
        }
      </div>
    );
  }
}

class TabBarIten extends Component {
  render() {
    return (<div></div>);
  }
}

TabBar.Item = TabBarIten;

export default TabBar;
