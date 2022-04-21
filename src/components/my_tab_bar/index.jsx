import React from 'react'
import { TabBar } from 'antd-mobile';
import {
  UserOutline,
  AppstoreOutline,
  DownlandOutline
} from 'antd-mobile-icons'
import { useLocation, useNavigate} from 'react-router-dom';


export default function MyTabBar() {
  const tabs = [
    {
      key: '/user',
      title: '个人中心',
      icon: <UserOutline />,
    },
    {
      key: '/repository',
      title: '资料仓',
      icon: <DownlandOutline />,
    },
    {
      key: '/members',
      title: '花名册',
      icon: <AppstoreOutline />
    },
  ]
  
  const navigate = useNavigate()
  const location = useLocation();
  const { pathname } = location;

  const setRouteActive = (value: string) => {
    navigate(value);
  }

  return (
    <TabBar activeKey={pathname} onChange={ value => setRouteActive(value)}>
      {tabs.map(item => (
        <TabBar.Item {...item} />
      ))}
    </TabBar>
  )
}
