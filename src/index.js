import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router} from 'react-router-dom';
import { ChainId , ThirdwebProvider } from '@thirdweb-dev/react';
import { Toaster } from "react-hot-toast";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <ThirdwebProvider desiredChainId={ChainId.Mumbai}>
        <Router>
            <App />
            <Toaster />
        </Router>
    </ThirdwebProvider>
)