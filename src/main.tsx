import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import mascot from "./assets/mascot.png";

// Ensure favicon uses the project mascot (overrides cached icons)
const setFavicon = (href: string) => {
	let link: HTMLLinkElement | null = document.querySelector("link[rel*='icon']");
	if (!link) {
		link = document.createElement('link');
		link.rel = 'icon';
		document.head.appendChild(link);
	}
	link.href = href;
};

setFavicon(mascot);

createRoot(document.getElementById("root")!).render(<App />);
