import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ComputerDetails from "./pages/ComputerDetails";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <QueryClientProvider client={queryClient}>
              <App />
            </QueryClientProvider>
          }
        />
        <Route
          path="/computer-details/:computerId"
          element={<ComputerDetails></ComputerDetails>}
        ></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
