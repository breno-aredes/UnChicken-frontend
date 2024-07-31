import "react-toastify/dist/ReactToastify.css";

import type { AppProps } from "next/app";
import GlobalStyle from "../styles/globals";
import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <title>UnChicken</title>
      <GlobalStyle />
      <Component {...pageProps} />
      <ToastContainer theme="colored" />
    </>
  );
}
