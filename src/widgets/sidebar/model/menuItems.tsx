import { AppRoutes } from '@/app/routes';
import { HomeOutlined, InboxOutlined, ShopOutlined, SwapOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

export const menuItems = [
  {
    key: AppRoutes.HOME,
    icon: <HomeOutlined />,
    label: <Link to={AppRoutes.HOME}>Обзор</Link>,
  },
  {
    key: AppRoutes.PRODUCTS,
    icon: <InboxOutlined />,
    label: <Link to={AppRoutes.PRODUCTS}>Товары</Link>,
  },
  {
    key: AppRoutes.OPERATIONS,
    icon: <SwapOutlined />,
    label: <Link to={AppRoutes.WAREHOUSES}>Операции</Link>,
  },
  {
    key: AppRoutes.WAREHOUSES,
    icon: <ShopOutlined />,
    label: <Link to={AppRoutes.WAREHOUSES}>Склады</Link>,
  },
];
