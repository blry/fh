import { AppProps } from 'next/app';

import { Base } from '../templates/Base';

import '../styles/global.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Base>
    <Component {...pageProps} />
  </Base>
);

export default MyApp;
