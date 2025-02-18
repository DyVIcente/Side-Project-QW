import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import RootLayout from "../layout/RootLayout";
import { Home, Error } from "../pages";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />}>
      <Route path="/" index element={<Home />} errorElement={<Error />} />
      <Route path="*" element={<Error />} />
    </Route>
  )
);

const Router = () => <RouterProvider router={router} />;

export default Router;
