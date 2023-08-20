import { store } from "@/Redux/store";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";

import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <SessionProvider session={pageProps.session}>
      <Provider store={store}>
        <ThemeProvider attribute="class">
          {getLayout(<Component {...pageProps} />)}
        </ThemeProvider>
      </Provider>
    </SessionProvider>
  );
}
