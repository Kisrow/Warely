import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "@/pages/home";
import { LoginPage } from "@/pages/auth";
import { AppRoutes } from "./routes";

export default function App() {
  return (
    <Routes>
      <Route path={AppRoutes.HOME} element={<HomePage />} />
      <Route path={AppRoutes.LOGIN} element={<LoginPage />} />
      <Route path="*" element={<Navigate to={AppRoutes.HOME} replace />} />
    </Routes>
  );
}
