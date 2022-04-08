/* eslint-disable prettier/prettier */
import { OtherLinksRow } from "../feature/OtherLinksRow";
import { Section } from "../layout/Section";

const OtherLinks = () => (
  
  <Section
    title="Other Links"
    image="/assets/images/symbol.svg"
    reverse="True"
  >
    <div className="w-full">
      <OtherLinksRow
        title="Capital Fund"
        description="Finhub Capital is a société en commandite spéciale (SCSp) registered under the laws of the Grand-Duchy of Luxembourg having its registered office at 26, Boulevard Royal Luxembourg, 2449 Luxembourg and which is registered with the Luxembourg Trade and Companies Registry with number B246268.
        The Fund established with a subscribed capital of one hundred million euros (100,000,000 euros.- ) based on the financial assessment of liquid tangible assets, including 50 million ordinary shares and 50 million secured shares.
        
        Additionally, 100 (one hundred) voting shares were issued, including 1 share belonging to the General Partner & ICOD  Partners S.à r.l.
        
        The Fund aims to produce positive returns with medium/high volatility (range and frequency of price movement).
        Part of net income the Fund generates will be reinvested and reflected in the value of your Shares."
        image="/icons/icon-finhub.svg"
        imageAlt="Finhub image"
        link="https://www.finhubfund.com/"
      />
      <OtherLinksRow
        title="Crowdfunding"
        description="Finhub is an online platform that was created to communicate potential investors with promising projects in one trading arena, where the borrower quickly and profitably receives the amount he needs, and the investor invests profitably.
        Use our platform to invest in the project you like, regardless of the geographic location.
        We offer a progresive service created to show that common open-space funding environment works.
        
        Finhub unites projects in all countries of the world, with a strong focus on the DACH market, enabling users to view, analyze, invest and request investments for a particular project unlimitedly.
        We will advise you on all challenges as an investor or as an investment seeker for your project.
        Acting as financial operators we are ready to accompany your investments or projects from initial analysis to managing your assets."
        image="/icons/icon-finhub.svg"
        imageAlt="Finhub image"
        link="https://finhubfund.co.uk/"
      />
      <OtherLinksRow
        description="Anders Capital GMbH is a financial consulting company, specialising in the development of projects in various sectors and industries: manufacturing, energy, construction, development, legal services and others.
        Our team assists your business on any step of its existence in terms of financial, development or managerial perspective.
        We offer a wide range of financial services, that insure high quality and loyalty to our customers."
        image="/icons/icon-anders.svg"
        imageAlt="Finhub image"
        link="https://anderscapital.eu/"
      />
    </div>
  </Section>
);

export { OtherLinks };
