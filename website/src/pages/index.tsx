import { AboutUs } from '../templates/AboutUs';
import { HomeBanner } from '../templates/HomeBanner';
import { OtherLinks } from '../templates/OtherLinks';
import { PartnersAndClients } from '../templates/PartnersAndClients';
import { VerticalFeatures } from '../templates/VerticalFeatures';
import Script from 'next/script'

const Index = () => (
  <>
    <Script async src="https://www.googletagmanager.com/gtag/js?id=G-3C568ZT9DR"></Script>
    <Script>
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-3C568ZT9DR');
      `}
    </Script>
    <Script>
      {`
        (function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:3143548,hjsv:6};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
        })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
      `}
    </Script>
    <HomeBanner />
    <AboutUs />
    <OtherLinks />
    <VerticalFeatures />
    <PartnersAndClients />
  </>
);

export default Index;
