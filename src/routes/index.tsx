import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const BaseLayout = lazy(() => import("../components/BaseLayout"));
const ProductListPage = lazy(() => import("../views/ProductListPage"));
const ProductDetailPage = lazy(() => import("../views/ProductDetailPage"));

const router = createBrowserRouter([
  {
    element: <BaseLayout />,
    children: [
      {
        path: "/",
        element: <ProductListPage />,
      },
      {
        path: "/detail",
        element: <ProductDetailPage />,
      },
    ],
  },
]);

export default router;
