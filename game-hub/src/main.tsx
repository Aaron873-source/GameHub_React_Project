import { Provider } from "@/components/ui/provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./routes.tsx";
//NB: React Query helps us to manage the state of our application by fetching, caching, and updating the data in our application
//Variable helping us to create a new instance of QueryClient that helps in installing React Query into the root of our application
const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider defaultTheme="dark">
      {/* Below we are installing React Query into the root of our application */}
      <QueryClientProvider client={queryClient}>
        {/* Implementing routing below we replace the App.tsx with this to "RouterProvider" to let React decide what page to show depending on what path is selected */}
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Provider>
  </StrictMode>
);
