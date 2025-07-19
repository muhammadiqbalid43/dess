import { lazy } from "react";
import { Route, Routes } from "react-router";

const HomePage = lazy(() => import("../pages/home-page"));
const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};

export default AppRouter;
