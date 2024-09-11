import { ThirdwebProvider } from "@thirdweb-dev/react";
import type { AppProps } from "next/app";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const activeChain = "polygon";

  return (
    <ThirdwebProvider
      activeChain={activeChain}
      clientId="b1ac8b5dd0851dea860c846e35a6c311"
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
