import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoute from "./AppRoute";
import AuthProviderWithNavigate from "./auth/AuthProviderWithNavigate";
import {QueryClient, QueryClientProvider} from 'react-query'
import { Toaster } from "sonner";

const queryClient= new QueryClient({
  defaultOptions:{
    queries:{
      refetchOnWindowFocus:false,
    }
  }
})

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <QueryClientProvider client={queryClient}>
      <AuthProviderWithNavigate>
        <AppRoute />
        <Toaster  visibleToasts={1} position="top-right" richColors/>
      </AuthProviderWithNavigate>
      </QueryClientProvider>
    </Router>
  </StrictMode>
);
