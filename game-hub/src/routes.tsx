import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import GameDetailPage from "./pages/GameDetailPage";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout></Layout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        { index: true, element: <HomePage></HomePage> },
        { path: "games/:slug", element: <GameDetailPage></GameDetailPage> },
      ],
    },
  ],
  {
    basename: import.meta.env.BASE_URL, // Set the base URL to the name of your repository
  }
);

export default router;
