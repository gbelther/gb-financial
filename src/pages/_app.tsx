import { AppProps } from "next/app";
import { GlobalStyle } from "../styles/global";

import { TransactionsProvider } from "../contexts/TransactionsContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TransactionsProvider>
      <Component {...pageProps} />
      <GlobalStyle />
    </TransactionsProvider>
  );
}

export default MyApp;
