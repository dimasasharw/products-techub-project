import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const BaseLayout = lazy(() => import("@/components/BaseLayout"));
const BrandPage = lazy(() => import("@/views/BrandPage"));
const ProductListPage = lazy(() => import("@/views/ProductListPage"));
const ProductDetailPage = lazy(() => import("@/views/ProductDetailPage"));

const router = createBrowserRouter([
  {
    element: <BaseLayout />,
    children: [
      { path: "/", element: <BrandPage /> },
      { path: "/all-products", element: <ProductListPage /> },
      { path: "/brands", element: <BrandPage /> },
      { path: "/brands/:brand", element: <ProductListPage /> },
      { path: "/categories/:category", element: <ProductListPage /> },
      { path: "/detail/:id", element: <ProductDetailPage /> },
    ],
  },
]);

export default router;
