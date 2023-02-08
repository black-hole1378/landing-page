import Layout from "../src/components/Layout";
import "../styles/globals.css";
import { Provider } from "react-redux";
import { wrapper } from "../src/State/Store";
const MyApp = ({ Component, ...rest }) => {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
};

export default MyApp;
