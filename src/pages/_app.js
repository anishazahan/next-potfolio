import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";

import { SessionProvider } from "next-auth/react";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  }, []);

  const getLayout = Component.getLayout || ((page) => page);

  return (
    <SessionProvider session={pageProps.session}>
      {/* <Provider store={store}> */}
      <ThemeProvider attribute="class">{getLayout(<Component {...pageProps} />)}</ThemeProvider>
      {/* </Provider> */}
    </SessionProvider>
  );
}
