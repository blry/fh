import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Banner } from '../templates/Banner';

const About = () => (
  <>
    <Banner
      title="About Us"
      description="Finhub Scaling Solutions is a B2B consulting company,
      offering a broad range of professional services, primarily
      within Sales, IT and Finances & Legal. Based on our
      experience of over a decade within the EU market and highly
      skillful and dedicated team of experts, we deliver personalized
      and cost-effective solutions to our customers.
      Our values of Loyalty, Perseverence and Team-work ensure
      that we are always there for our customers by working the
      extra mile to exceed their expectations, while providing an
      inclusive and learning-friendly working environment for our
      employees.
      With offices in both Vienna, Austria and Chisinau, Republic of
      Moldova, our teams share the same high standards and are
      open for everyone with respect to the local COVID-19
      measures."
    />
    <div className="max-w-[1427px] mx-auto px-3 mb-28">
      <VerticalFeatureRow
        title="Product Development"
        description="A good understanding of the requirements, users, target audience, and prospective market is required for 
        creating a successful product. We take all of these factors into account and create a well-defined plan that outlines 
        our approach and strategy for converting your concept into a marketable product. During the first stage, we’ll try to 
        figure out what we need to know about the product and the company that’s behind it. We accomplish this by conducting 
        extensive research that provides us with a clear picture of what the product is all about, what it offers users, and what 
        they require. The research produces a list of Requirement Specifications. The intricacies of the interface, navigation, 
        and how the information is displayed are identified and defined by functional and visual design."
        image="/assets/images/about-photo1.svg"
        imageWidth="400px"
        imageHeight="300px"
        imageAlt="image"
        icon
        link="product-development"
      />
      <VerticalFeatureRow
        title="Fundraising"
        description="Raising finance is an important component of starting and growing a business. After all, having enough funding 
        to launch a new product or expand into a new market might spell the difference between success and failure. This crucial 
        responsibility frequently falls on the founder. Even though fundraising is a crucial task, the process can be challenging. 
        Despite the fact that few founders start out as fundraising specialists, some do eventually get the hang of it. Early funding 
        sources like as incubators, accelerators, and angel investors, typically start with a pre-seed or seed round. These rounds 
        can range from EUR 10,000 to EUR 2 million. Companies can use early investment rounds to fund things like market research and 
        development."
        descriptionWidth="92%"
        image="/assets/images/about-photo2.svg"
        imageWidth="430px"
        imageHeight="330px"
        imageAlt="image"
        icon
        reverse
        imageSize="110%"
        link="fundraising"
      />
      <VerticalFeatureRow
        title="Sales Solutions"
        description="For startups, an outsourced sales force can assist the company in identifying untapped market possibilities. 
        It's difficult for an already overworked team to overcome technological obstacles, or perhaps not having enough manpower to 
        compete. Finhub helps organizations that wish to scale swiftly without recruiting more full-time employees save time and money. 
        Since it might be difficult for your employees to try new things, an outsider's perspective is always helpful. Furthermore, we 
        assist businesses in expanding into new markets or establishing a presence in new geographic areas. Outsourcing is advantageous 
        when there are linguistic or cultural difficulties to overcome. We specialize in B2B Sales Development within the European 
        markets. Our team consists of experienced, motivated, and intelligent individuals that speak English, German, French, Spanish, 
        Italian and Russian."
        image="/assets/images/about-photo3.svg"
        imageWidth="400px"
        imageHeight="330px"
        imageAlt="image"
        icon
        link="sales-solution"
      />
      <VerticalFeatureRow
        title="Team Extension"
        description="If you don’t have specific knowledge in-house, can’t locate the proper personnel locally, or recruiting takes too 
        long when you’re trying to build new products and grow your business, team extension is the service for you. Finhub can help 
        you expand your software development team with specialized expertise. We assist businesses in a variety of industries with 
        augmenting their teams with our professionals to meet the demands of their cutting edge products. We employ young and motivated 
        IT professionals through a rigorous recruitment process that combines a variety of soft & hard skills assessments. It allows us 
        to identify and secure top tier candidates only. Learning & Development is an essential part of Finhub’s culture. Thanks to our 
        dedicated L&D experts, we keep our employees up to date with the latest technology & market trends. We consider language and 
        communication skills a key factor for personal growth. Offering a comprehensive English course, for business and IT, we ensure 
        best quality cooperation with all of our partners and customers worldwide."
        descriptionWidth="92%"
        image="/assets/images/about-photo4.svg"
        imageWidth="490px"
        imageHeight="330px"
        imageAlt="image"
        icon
        imageSize="125%"
        reverse
        link="team-extension"
      />
    </div>
  </>
);

export default About;
