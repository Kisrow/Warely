import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "@/pages/home";
import { LoginPage } from "@/pages/auth";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth/login" element={<LoginPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
