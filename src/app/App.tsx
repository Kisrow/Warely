import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from '@/pages/home';
import { LoginPage } from '@/pages/auth';
import { AppRoutes } from './routes';
import { MainLayout } from './MainLayout';
import { ProductsPage } from '@/pages/products';

export default function App() {
  return (
    <Routes>
      <Route path={AppRoutes.LOGIN} element={<LoginPage />} />
      <Route element={<MainLayout />}>
        <Route path={AppRoutes.HOME} element={<HomePage />} />
        <Route path={AppRoutes.PRODUCTS} element={<ProductsPage />} />
        <Route path="*" element={<Navigate to={AppRoutes.HOME} replace />} />
      </Route>
    </Routes>
  );
}
