import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AuthProvider from "./context/AuthProvider";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

axios.defaults.baseURL = "http://localhost:5000/";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router}>
          <Toaster />
        </RouterProvider>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
