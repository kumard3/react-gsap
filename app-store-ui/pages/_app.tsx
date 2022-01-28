import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AnimateSharedLayout } from "framer-motion";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AnimateSharedLayout type="crossfade">
      <Component {...pageProps} />
    </AnimateSharedLayout>
  );
}

export default MyApp;
