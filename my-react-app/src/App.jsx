import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

// Define the multi-page structure and paths
const router = createBrowserRouter([
  {
    path: "/",
    
    children: [
      {
        index: true,           // Loads by default at the root URL "/"
        element: <Home />
      },
      {
        path: "contact",         // Loads at "/about"
        element: <Contact />
      }
    ]
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}
