import { ThemeProvider } from "next-themes";
import "../styles/globals.css";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  }, []);

  const getLayout = Component.getLayout || ((page) => page);

  return <ThemeProvider attribute="class">{getLayout(<Component {...pageProps} />)}</ThemeProvider>;
}
