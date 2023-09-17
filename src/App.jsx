import "./App.css";
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { SharedLayout } from "./components/SharedLayout/SharedLayout";
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const FavoritePage = lazy(() => import("./pages/FavoritePage/FavoritePage"));
const RentalPage = lazy(() => import("./pages/RentalPage/RentalPage"));

function App() {
  return (
    <Suspense fallback={<div>text</div>}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/catalog" element={<RentalPage />} />
          <Route path="/favorite" element={<FavoritePage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
