import App from "./components/search-page/App";
import { createRoot } from "react-dom/client";
import SpotifyClone from "./components/SpotifyClone";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<SpotifyClone />);