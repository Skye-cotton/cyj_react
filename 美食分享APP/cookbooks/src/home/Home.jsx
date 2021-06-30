import React, { Component } from 'react'
import{TabBar} from 'antd-mobile'

import cookbook from'@a/images/cookbook.png'
import cookbookActive from'@a/images/cookbook-active.png'

import menu from'@a/images/menu.png'
import menuActive from'@a/images/menu-active.png'

import location from'@a/images/location.png'
import locationActive from'@a/images/location-active.png'

import more from'@a/images/more.png'
import moreActive from'@a/images/more-active.png'

import {CookBook} from './cookbook/'

export default class Home extends Component {
    state = {
        selectedTab: 'cookbook',
        hidden: false,
        fullScreen: true,
      };
    render() {
        return (
            <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
              <TabBar
                unselectedTintColor="#decc99"
                tintColor="#f4ea2a"
                barTintColor="white"
                hidden={this.state.hidden}
              >
                <TabBar.Item
                  title="吃货大全"
                  key="cookbook"
                  icon={<div style={{
                    width: '26px',
                    height: '26px',
                    background: `url(${cookbook}) center center /  26px 26px no-repeat`}}
                  />
                  }
                  selectedIcon={<div style={{
                    width: '26px',
                    height: '26px',
                    background: `url(${cookbookActive}) center center /  26px 26px no-repeat` }}
                  />
                  }
                  selected={this.state.selectedTab === 'cookbook'}
                  onPress={() => {
                    this.setState({
                      selectedTab: 'cookbook',
                    });
                  }}
                  data-seed="logId"
                >
                  <CookBook />
                </TabBar.Item>
                <TabBar.Item
                  icon={
                    <div style={{
                      width: '30px',
                      height: '30px',
                      background: `url(${menu}) center center /  30px 30px no-repeat` }}
                    />
                  }
                  selectedIcon={
                    <div style={{
                      width: '30px',
                      height: '30px',
                      background: `url(${menuActive}) center center /  30px 30px no-repeat` }}
                    />
                  }
                  title="分类"
                  key="category"
                  selected={this.state.selectedTab === 'category'}
                  onPress={() => {
                    this.setState({
                      selectedTab: 'category',
                    });
                  }}
                  
                >
                  <div>category</div>
                </TabBar.Item>
                <TabBar.Item
                  icon={
                    <div style={{
                      width: '26px',
                      height: '26px',
                      background: `url(${location}) center center /  26px 26px no-repeat` }}
                    />
                  }
                  selectedIcon={
                    <div style={{
                      width: '26px',
                      height: '26px',
                      background: `url(${locationActive}) center center /  26px 26px no-repeat` }}
                    />
                  }
                  title="美食地图"
                  key="map"
                  selected={this.state.selectedTab === 'map'}
                  onPress={() => {
                    this.setState({
                      selectedTab: 'map',
                    });
                  }}
                >
                  <div>map</div>
                </TabBar.Item>
                <TabBar.Item
                  icon={{ uri: more}}
                  selectedIcon={{ uri: moreActive }}
                  title="My"
                  key="my"
                  selected={this.state.selectedTab === 'yellowTab'}
                  onPress={() => {
                    this.setState({
                      selectedTab: 'yellowTab',
                    });
                  }}
                >
                  <div>more</div>
                </TabBar.Item>
              </TabBar>
            </div>
          );
    }
}
