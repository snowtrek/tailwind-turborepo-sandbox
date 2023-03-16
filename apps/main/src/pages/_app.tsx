import "#/styles/tailwind.css";
import "focus-visible";

import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
