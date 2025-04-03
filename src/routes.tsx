import { Dashboard } from "./pages/dashboard";

import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
]);
