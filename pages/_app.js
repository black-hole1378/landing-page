import Layout from "../src/components/Layout";
import "../styles/globals.css";
import { Provider } from "react-redux";
import { wrapper } from "../src/State/Store";
import { ThemeProvider, createTheme } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
const theme = createTheme({
  palette: {
    mode: "light",
  },
});

const MyApp = ({ Component, ...rest }) => {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </Provider>
  );
};

export default MyApp;
