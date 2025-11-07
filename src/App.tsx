import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AppLayout from "./components/Layout/AppLayout";

import "./App.css";
import Home from "./pages/Home";
import KeyFeatures from "./pages/KeyFeatures";
import OlympiadHome from "./pages/OlympiadHome";
import OlympiadGallery from "./components/OlympiadGalleryHeader";
import ApplyAsTutor from "./pages/ApplyAsTutor";
import FAQ from "./pages/FAQ";

// IMPORTANT: This must match your GitHub repository name exactly
// If your repo is "talking-ui", keep this as '/talking-ui'
// If your repo is something else, change it accordingly
const BASE_URL = '/talking-ui';

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/KeyFeatures",
        element: <KeyFeatures />,
      },
      {
        path: "/ApplyAsTutor",
        element: <ApplyAsTutor />,
      },
      {
        path: "/FAQ",
        element: <FAQ />,
      },
      {
        path: "/OlympiadHome",
        element: <OlympiadHome />,
      },
      {
        path: "/OlympiadGallery",
        element: <OlympiadGallery />,
      },
    ],
  },
], {
  basename: BASE_URL,  // THIS IS THE FIX! Add basename here
});

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;