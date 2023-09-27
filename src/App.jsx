import "modern-normalize";
import { GlobalStyles } from "./GlobalStyles";

import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const HomePage = lazy(() => import("./pages/public/HomePage/HomePage"));
const ProductPage = lazy(() =>
  import("./pages/public/ProductPage/ProductPage")
);
const ShoppingCartPage = lazy(() =>
  import("./pages/public/ShoppingCartPage/ShoppingCartPage")
);
const CathegoryPage = lazy(() =>
  import("./pages/public/CathegoryPage/CathegoryPage")
);
const NotFoundPage = lazy(() =>
  import("./pages/public/NotFoundPage/NotFoundPage")
);
const LoginPage = lazy(() => import("./pages/restricted/LoginPage/LoginPage"));
const RegistrationPage = lazy(() =>
  import("./pages/restricted/RegistrationPage/RegistrationPage")
);
const ProfilePage = lazy(() =>
  import("./pages/private/ProfilePage/ProfilePage")
);
const OrdersPage = lazy(() => import("./pages/private/OrdersPage/OrdersPage"));
const FavoritePage = lazy(() =>
  import("./pages/private/FavoritePage/FavoritePage")
);

function App() {
  return (
    <>
      <GlobalStyles />
      <Suspense fallback={<div>Loader...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:cathegory" element={<CathegoryPage />} />
          <Route path="/:cathegory/:productId" element={<ProductPage />} />
          <Route path="/cart" element={<ShoppingCartPage />} />
          <Route path="*" element={<NotFoundPage />} />

          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />

          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/favorite" element={<FavoritePage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
