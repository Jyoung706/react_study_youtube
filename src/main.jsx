import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import NotFound from "@/pages/NotFound.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Videos from "@/pages/Videos.jsx";
import VideoDetail from "@/pages/VideoDetail.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Videos /> },
      { path: "videos", element: <Videos /> },
      { path: "videos/:keyword", element: <Videos /> },
      { path: "videos/watch/:videoId", element: <VideoDetail /> },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
