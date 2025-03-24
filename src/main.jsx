import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
<<<<<<< HEAD
		<BrowserRouter>
=======
		<BrowserRouter
		future={{ v7_startTransition: true, v7_relativeSplatPath: true}}>
>>>>>>> f5d158f (initial commit)
			<App />
		</BrowserRouter>
	</React.StrictMode>
);
