import { ThirdwebProvider, ChainId } from "@thirdweb-dev/react";
import type { AppProps } from "next/app";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const activeChain = ChainId.Mumbai;

  return (
    <ThirdwebProvider
      activeChain={80001}
      clientId="b1ac8b5dd0851dea860c846e35a6c311"
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
