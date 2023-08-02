import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Profile from "./pages/Profile";
import Updates from "./pages/Updates";
import Networks from "./pages/Networks";
import Terminal from "./pages/Terminal";
import Map1 from "./pages/Map1";
import Devices from "./pages/Devices";
import Dashboard from "./pages/Dashboard";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/updates":
        title = "";
        metaDescription = "";
        break;
      case "/networks":
        title = "";
        metaDescription = "";
        break;
      case "/terminal":
        title = "";
        metaDescription = "";
        break;
      case "/map":
        title = "";
        metaDescription = "";
        break;
      case "/devices":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Profile />} />
      <Route path="/updates" element={<Updates />} />
      <Route path="/networks" element={<Networks />} />
      <Route path="/terminal" element={<Terminal />} />
      <Route path="/map" element={<Map1 />} />
      <Route path="/devices" element={<Devices />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}
export default App;
