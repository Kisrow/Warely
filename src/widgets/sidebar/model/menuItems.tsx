import { AppRoutes } from '@/app/routes';
import {
  HomeOutlined,
  InboxOutlined,
  DownloadOutlined,
  SwapOutlined,
  DeleteOutlined,
  FileTextOutlined,
  ShopOutlined,
  TeamOutlined,
  BarChartOutlined,
} from '@ant-design/icons';
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
    key: AppRoutes.RECEIPTS,
    icon: <DownloadOutlined />,
    label: <Link to={AppRoutes.RECEIPTS}>Поступления</Link>,
  },
  {
    key: AppRoutes.TRANSFERS,
    icon: <SwapOutlined />,
    label: <Link to={AppRoutes.TRANSFERS}>Перемещения</Link>,
  },
  {
    key: AppRoutes.WRITEOFFS,
    icon: <DeleteOutlined />,
    label: <Link to={AppRoutes.WRITEOFFS}>Списания</Link>,
  },
  {
    key: AppRoutes.INVENTORY,
    icon: <FileTextOutlined />,
    label: <Link to={AppRoutes.INVENTORY}>Инвентаризация</Link>,
  },
  {
    key: AppRoutes.WAREHOUSES,
    icon: <ShopOutlined />,
    label: <Link to={AppRoutes.WAREHOUSES}>Склады</Link>,
  },
  {
    key: AppRoutes.SUPPLIERS,
    icon: <TeamOutlined />,
    label: <Link to={AppRoutes.SUPPLIERS}>Поставщики</Link>,
  },
  {
    key: AppRoutes.REPORTS,
    icon: <BarChartOutlined />,
    label: <Link to={AppRoutes.REPORTS}>Отчеты</Link>,
  },
];
