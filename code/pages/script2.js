import React from "react";
import { ReactDOM } from "react-dom";
import App from "./script";

ReactDOM.render(
    <React.StrictMode>
        <App text="youtube.com" />
    </React.StrictMode>, 
    document.getElementById("root")
);