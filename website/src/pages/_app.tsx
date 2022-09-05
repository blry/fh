//
import { useEffect } from 'react';

import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { hotjar } from 'react-hotjar';

import { Base } from '../templates/Base';
import '../styles/global.css';
import * as ga from '../utils/lib/ga';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      ga.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  useEffect(() => {
    hotjar.initialize(3143548, 6);
  }, []);

  return (
    <Base>
      <Component {...pageProps} />
    </Base>
  );
};

export default MyApp;
