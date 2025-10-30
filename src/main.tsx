import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Authenticator } from "@aws-amplify/ui-react";
// import Amplify from "aws-amplify";
// import awsExports from "./aws-exports"; // <-- add this
// Amplify.configure(awsExports); // <-- and configure Amplify

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Authenticator>
      <App />
    </Authenticator>
  </React.StrictMode>
);
