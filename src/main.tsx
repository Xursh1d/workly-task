import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    gray: {
      100: "#F0F0F0",
      200: "#C9D2CE",
    },
    green: {
      100: "#2EA97D",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
);
