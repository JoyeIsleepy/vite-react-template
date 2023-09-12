import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'   
import { Layout, Menu, theme, Button } from 'antd'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined
} from '@ant-design/icons'
import MenuCom from './Sider'
import styles from './index.module.scss'

const { Header, Sider, Content } = Layout

export default function home() {
  const {
    token: { colorBgContainer }
  } = theme.useToken()
  const [collapsed, setCollapsed] = useState(false)

  return (
    <Layout className={styles.layoutBox}>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center'
        }}
      >
        暂为空
        {/* <Menu
          theme='dark'
          mode='horizontal'
          defaultSelectedKeys={['2']}
          items={items1}
        /> */}
      </Header>
      <Layout className={styles.LayoutLeft}>
        <Sider
          className={styles.layoutSider}
          width={200}
          style={{
            background: colorBgContainer
          }}
          trigger={null}
          collapsible
          collapsed={collapsed}
        >
          <MenuCom />
          <div
            className={styles.outlineBtn}
            onClick={() => setCollapsed(!collapsed)}
          >
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </div>
        </Sider>
        <Layout
          style={{
            padding: '0 24px 24px'
          }}
        >
          <div className={styles.layoutConter}>
            <Outlet />
          </div>
        </Layout>
      </Layout>
    </Layout>
  )
}
