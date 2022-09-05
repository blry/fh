import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Banner } from '../templates/Banner';
import { TeamExtension } from '../templates/TeamExtension';
import Script from 'next/script'

const TeamExtensionPage = () => {
  return (
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
      <Banner title="Team Extension" />
      <div className="max-w-[1400px] mx-auto mb-28">
        <VerticalFeatureRow
          title="Team Extension"
          description="If you don’t have specific knowledge in-house, can’t locate the proper personnel locally, or recruiting takes 
          too long when you’re trying to build new products and grow your business, team extension is the service for you. Finhub can 
          help you expand your software development team with specialized expertise. We assist businesses in a variety of industries 
          with augmenting their teams with our professionals to meet the demands of their cutting edge products. We employ young and 
          motivated IT professionals through a rigorous recruitment process that combines a variety of soft & hard skills assessments. 
          It allows us to identify and secure top tier candidates only. Learning & Development is an essential part of Finhub’s culture. 
          Thanks to our dedicated L&D experts, we keep our employees up to date with the latest technology & market trends. We consider 
          language and communication skills a key factor for personal growth. Offering a comprehensive English course, for business and 
          IT, we ensure best quality cooperation with all of our partners and customers worldwide."
          image="/assets/images/product-photo4.svg"
          imageWidth="470px"
          imageHeight="300px"
          imageAlt="image"
          imageSize="120%"
          marginBottom="-80px"
          icon
        />
      </div>

      <TeamExtension />
    </>
  );
};

export default TeamExtensionPage;
