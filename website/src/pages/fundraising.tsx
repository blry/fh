import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Banner } from '../templates/Banner';

const Fundraising = () => {
  return (
    <>
      <Banner title="Fundraising" />
      <div className="max-w-screen-xl mx-auto mb-28">
        <VerticalFeatureRow
          title="Introduction"
          description="Raising finance is an important component of starting and growing a business. After all, having enough funding 
          to launch a new product or expand into a new market might spell the difference between success and failure. This crucial 
          responsibility frequently falls on the founder. Even though fundraising is a crucial task, the process can be challenging. 
          Despite the fact that few founders start out as fundraising specialists, some do eventually get the hang of it. Early 
          funding sources like as incubators, accelerators, and angel investors, typically start with a pre-seed or seed round. These 
          rounds can range from EUR 10,000 to EUR 2 million. Companies can use early investment rounds to fund things like market 
          research and development."
          image="/assets/images/fund-photo1.svg"
          imageAlt="image"
          icon
        />
        <VerticalFeatureRow
          title="Strategy"
          description="Different investors have their own set of criteria that we should be aware of before approaching them for 
          investment. We will not just express your own idea in order to receive investment; we will also comprehend the investor, 
          their concerns, and what they are looking for. Researching the potential investor in addition to improving your proposal. 
          Our team will find out if they&#39;ve already invested in a business that&#39;s similar to yours. If this is the case, they 
          may find it difficult to invest in you as well. Companies then raise higher sums in series A, B, C, and beyond. Family 
          offices, venture capital, hedge funds, and other investment businesses may be among the investors. Businesses may need to 
          raise additional capital as they get larger in order to acquire companies, expand into new markets, or develop new products. 
          Private equity, strategic partners, or an initial public offering are all options for investors at this point."
          image="/assets/images/fund-photo2.svg"
          imageAlt="image"
          imageSize="120%"
          reverse
        />
        <VerticalFeatureRow
          title="Process"
          description="We invest time in developing diligence documents for a seed round, an executive summary and a slide deck we can 
          walk investors through and, potentially, leave behind so VCs can show to other partners. FINHUB is an expert in creating 
          accurate financial models and business plans that allow everyone to understand how numbers work, not just what numbers are. 
          We include vision, product, team (location, contact info), traction, market size, and minimum financials (revenue, if any, 
            and fundraising prior and current).  Generally, we make sure the slide deck is well structured. Graphics, charts, 
            screenshots are more powerful than lots of words. Consider it a framework around which we will hang a more detailed 
            version of your story. There is no fixed format or order, but the following parts are usually present. We create the pitch 
            that matches you, how you present, and how you want to represent your company."
          image="/assets/images/fund-photo3.svg"
          imageSize="120%"
          imageAlt="image"
        />
        <VerticalFeatureRow
          title="Activity"
          description="There 2 fundraising mechanisms at FINHUB. The Crowdfunding App and the Investment Fund. Place your project on 
          the platform, as soon as you pass verification, you will be contacted by one of our analysts that will assist you throughout 
          the entire process. Our team will help you collect and/or create all the necessary documentation to ensure the highest 
          possible success rate. We will concentrate our efforts to become your ambassador within our own network of private and 
          institutional investors. The Finhub Capital Fund is constantly evaluating new investment opportunities. We are glad to meet 
          talented entrepreneurs and create strong, long-term partnerships. Feel free to contact Mr. Artiom Cebanu - Director of 
          Corporate Affairs & Communications."
          image="/assets/images/fund-photo4.svg"
          imageAlt="image"
          imageSize="120%"
          reverse
        />
      </div>
    </>
  );
};

export default Fundraising;
