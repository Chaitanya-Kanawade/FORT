import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import LoginPage from "../pages/LoginPage";
import DashboardLayout from "../layouts/DashboardLayout";
import ProjectWorkspace from "../pages/ProjectWorkspace";

export default function AppRouter() {
  const token = localStorage.getItem("access_token");

  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/login"
          element={
            token
              ? <Navigate to="/dashboard" />
              : <LoginPage />
          }
        />

        <Route
          path="/dashboard"
          element={
            token
              ? <DashboardLayout />
              : <Navigate to="/login" />
          }
        />

        <Route
          path="/projects/:id"
          element={
            token
              ? <ProjectWorkspace />
              : <Navigate to="/login" />
          }
        />

        <Route
          path="*"
          element={
            <Navigate
              to={token ? "/dashboard" : "/login"}
            />
          }
        />

      </Routes>

    </BrowserRouter>
  );
}