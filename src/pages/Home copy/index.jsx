import React from 'react'
import {
  Routes,
  Route,
  Link,
  useRoutes,
  Outlet,
  useNavigate
} from 'react-router-dom'
import { ProForm, ProFormText } from '@ant-design/pro-components'
import GoodsList from '@/pages/GoodsList'
import routes from '@/router'
import styles from './index.module.scss'

export default function home() {
  const element = useRoutes(routes)
  let navigate = useNavigate()
  return (
    <div className={styles.homeBox}>
      <div className={styles.leftBox}>
        <Link to='/goodsList?id=zzk&age=25'>children中测试跳转1</Link>
        <button
          onClick={() =>
            navigate('/goodsList2', {
              search: '?id=1111&age=99'
            })
          }
        >
          替换到 home 页面
        </button>
        <Link to='/index3'>跳转到index3</Link>
        <ProForm
          onFinish={async (values) => {
            console.log(values)
          }}
        >
          <ProFormText
            name='name'
            label='姓名'
          />
        </ProForm>
      </div>
      <div>
        {/* 子路由将会显示在这里，用outlet占位 */}
        <Outlet />
      </div>
    </div>
  )
}
