import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout/Layout";
import ForgotPasswordPage from "./pages/ForgotPassword/ForgotPassword";

import LoginPage from "./pages/Login/Login";
import ResetInstructions from "./pages/ResetPassword/ResetInstructions";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import Dashboard from "./pages/Dashboard/Dashboard";
import AuthLayout from "./pages/AuthLayout/AuthLayout";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/forgot-password",
        element: <ForgotPasswordPage />,
      },
      {
        path: "/forgot-password/success",
        element: <ResetInstructions />,
      },
      {
        path: "/reset-password",
        element: <ResetPassword />,
      },
    ],
  },
]);
