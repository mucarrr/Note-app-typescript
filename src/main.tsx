import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { store } from "./redux/store.ts";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./redux/store.ts";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#000",
    },
    secondary: {
      main: "rgba(228, 61, 32, 0.87)",
    },
    info: {
      main: "rgb(235, 232, 219)",
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
    <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <App />
      </ThemeProvider>
    </PersistGate>
    </Provider>
  </StrictMode>
);
