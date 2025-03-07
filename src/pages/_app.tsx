import type { AppProps } from "next/app";
import "@/styles/globals.css";

import {
  MantineProvider,
  ColorSchemeProvider,
  MantineThemeOverride,
} from "@mantine/core";
import { useEffect, useState } from "react";
import { initialState, HomeInitialState } from "@/state/index.state";
import { useCreateReducer } from "@/hooks/useCreateReducer";
import HomeContext from "@/state/index.context";
import Layout from "@/components/layouts";
import { Notifications } from "@mantine/notifications";
import { SessionProvider } from "next-auth/react";
// import { QueryParamProvider } from 'use-query-params';
// import NextAdapterPages from 'next-query-params/pages';

export default function App({ Component, pageProps }: AppProps) {
  const [isClient, setIsClient] = useState(false);
  const contextValue = useCreateReducer<HomeInitialState>({
    initialState,
  });

  const {
    state: { colorScheme },
  } = contextValue;

  useEffect(() => {
    setIsClient(true);
  }, []);
  useEffect(() => {
    
  }, [pageProps])

  const myTheme: MantineThemeOverride = {
    colorScheme: colorScheme,
    spacing: {
      chatInputPadding: "40px",
    },
  };
  return (
    isClient && (
          <SessionProvider session={pageProps.session}>
            <HomeContext.Provider
              value={{
                ...contextValue,
              }}
            >
              <ColorSchemeProvider
                colorScheme={colorScheme}
                toggleColorScheme={() => { }}
              >
                <MantineProvider theme={myTheme} withGlobalStyles withNormalizeCSS>
                  <Layout>
                    <Component {...pageProps} />
                  </Layout>
                  <Notifications />
                </MantineProvider>
              </ColorSchemeProvider>
            </HomeContext.Provider>
          </SessionProvider>
    )
  );
}
