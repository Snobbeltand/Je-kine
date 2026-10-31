import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
// Global styles first, so page and component styles can override them
import "./index.css";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import OverOns from "./pages/OverOns";
import PraktischeInfo from "./pages/PraktischeInfo";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/over-ons", element: <OverOns /> },
      { path: "/praktische-info", element: <PraktischeInfo /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
