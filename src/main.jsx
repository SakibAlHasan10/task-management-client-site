import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/Routes";
import AuthProvider from "./hooks/AuthProvider/AuthProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
      <AuthProvider>
    <QueryClientProvider client={queryClient}>
        <RouterProvider router={routes} />
        <Toaster/>
    </QueryClientProvider>
      </AuthProvider>
  // </React.StrictMode>
);
