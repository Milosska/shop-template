import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import { PrivateRoute } from "../PrivateRoute/PrivateRoute";
import { RestrictedRoute } from "../RestrictedRoute/RestrictedRoute";
import { GlobalLayout } from "../../global/GlobalLayout/GlobalLayout";
import { Loader } from "../../global/Loader/Loader";

const HomePage = lazy(() => import("@/pages/public/HomePage/HomePage"));
const ProductPage = lazy(() =>
  import("@/pages/public/ProductPage/ProductPage")
);
const ShoppingCartPage = lazy(() =>
  import("@/pages/public/ShoppingCartPage/ShoppingCartPage")
);
const CathegoryPage = lazy(() =>
  import("@/pages/public/CathegoryPage/CathegoryPage")
);
const NotFoundPage = lazy(() =>
  import("@/pages/public/NotFoundPage/NotFoundPage")
);
const LoginPage = lazy(() => import("@/pages/restricted/LoginPage/LoginPage"));
const RegistrationPage = lazy(() =>
  import("@/pages/restricted/RegistrationPage/RegistrationPage")
);
const ProfilePage = lazy(() =>
  import("@/pages/private/ProfilePage/ProfilePage")
);
const OrdersPage = lazy(() => import("@/pages/private/OrdersPage/OrdersPage"));
const FavoritePage = lazy(() =>
  import("@/pages/private/FavoritePage/FavoritePage")
);

export const AppRouter = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<GlobalLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/:cathegory" element={<CathegoryPage />} />
          <Route path="/:cathegory/:productId" element={<ProductPage />} />
          <Route path="/cart" element={<ShoppingCartPage />} />
          <Route path="*" element={<NotFoundPage />} />

          <Route
            path="/login"
            element={<RestrictedRoute component={<LoginPage />} />}
          />
          <Route
            path="/register"
            element={<RestrictedRoute component={<RegistrationPage />} />}
          />

          <Route
            path="/profile"
            element={<PrivateRoute component={<ProfilePage />} />}
          />
          <Route
            path="/orders"
            element={<PrivateRoute component={<OrdersPage />} />}
          />
          <Route
            path="/favorite"
            element={<PrivateRoute component={<FavoritePage />} />}
          />
        </Route>
      </Routes>
    </Suspense>
  );
};
