import { Layout, Menu } from 'antd';
import styles from './Sidebar.module.css';

import { menuItems } from '../model/menuItems';
import { useLocation } from 'react-router-dom';

const { Sider } = Layout;

interface SidebarProps {
  collapsed: boolean;
}

export const Sidebar = ({ collapsed }: SidebarProps) => {
  const location = useLocation();

  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className={styles.logoContainer}>
        <img src="/logo.png" alt="logo" className={styles.logo} />
        {!collapsed && <span className={styles.logoText}>Warely</span>}
      </div>
      <Menu theme="dark" mode="inline" selectedKeys={[location.pathname]} items={menuItems}></Menu>
    </Sider>
  );
};
