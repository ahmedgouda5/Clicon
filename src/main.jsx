import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "react-image-gallery/styles/css/image-gallery.css";
import { register } from "swiper/element/bundle";
register();

createRoot(document.getElementById("root")).render(<App />);
