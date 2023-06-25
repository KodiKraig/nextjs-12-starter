import type { AppProps } from 'next/app';
import { FC } from 'react';
import { Head } from '@components/common';

import '@assets/main.css';
import '@assets/chrome-bug.css';

const Noop: FC<{ children: any }> = ({ children }) => <>{children}</>;

function MyApp({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout || Noop;

  return (
    <>
      <Head />
      <Layout pageProps={pageProps}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
