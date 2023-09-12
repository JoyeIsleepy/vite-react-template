import React, { useState, useMemo } from 'react'
import { Menu } from 'antd'
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined
} from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import styles from '../index.module.scss'

export default function index() {
  let navigate = useNavigate()

  const menuList = useMemo(() => {
    function getItem(label, key, icon, children, type) {
      return {
        key,
        icon,
        children,
        label,
        type
      }
    }
    return [
      getItem('react-dnd', '/dndPath', <PieChartOutlined />),
      getItem('Option 2', '/goodsList2', <DesktopOutlined />),
      getItem('Option 3', '3', <ContainerOutlined />),
      getItem('Navigation One', 'sub1', <MailOutlined />, [
        getItem('Option 5', '5'),
        getItem('Option 6', '6'),
        getItem('Option 7', '7'),
        getItem('Option 8', '8')
      ]),
      getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
        getItem('Option 9', '9'),
        getItem('Option 10', '10'),
        getItem('Submenu', 'sub3', null, [
          getItem('Option 11', '11'),
          getItem('Option 12', '12')
        ])
      ])
    ]
  }, [])

  const menuClick = ({ key }) => {
    if (key.indexOf('/') == 0) {
      navigate(
        key /* , {
        search: '?id=1111&age=99'
      } */
      )
    }
  }

  return (
    <div className={styles.siderBox}>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode='inline'
        // theme='dark'
        // inlineCollapsed={collapsed} inline 时菜单是否收起状态
        items={menuList}
        onClick={menuClick}
      />
    </div>
  )
}
