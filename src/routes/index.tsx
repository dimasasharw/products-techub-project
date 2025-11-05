import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const BaseLayout = lazy(() => import("../components/BaseLayout"));
const ProductListPage = lazy(() => import("../views/ProductListPage"));
const BrandPage = lazy(() => import("../views/BrandPage"));
const ProductDetailPage = lazy(() => import("../views/ProductDetailPage"));

const router = createBrowserRouter([
  {
    element: <BaseLayout />,
    children: [
      { path: "/", element: <ProductListPage /> },
      { path: "/brands", element: <BrandPage /> },
      { path: "/brands/:brand", element: <ProductListPage /> },
      { path: "/categories/:category", element: <ProductListPage /> },
      { path: "/detail/:id", element: <ProductDetailPage /> },
    ],
  },
]);

export default router;
