/* eslint-disable prettier/prettier */
import { AboutUsRow } from "../feature/AboutUsRow";
import { Section } from "../layout/Section";

const AboutUs = () => (
  <Section
    title="Your title here"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada nisi tellus, non imperdiet nisi tempor at."
  >
    <div className="grid grid-cols-3 gap-4">
      <AboutUsRow
        title="Fundresing"
        description="We invest time in developing diligence documents for a seed round, an executive summary and a slide deck we can walk investors through and, potentially, leave behind so VCs can show to other partners. 
          FINHUB is an expert in creating accurate financial models and business plans that allow everyone to understand how numbers work, not just what numbers are.  
          We include vision, product, team (location, contact info), traction, market size, and minimum financials are all included."
        image="/assets/images/AboutUs_Fundrasing.jpg"
        imageAlt="First feature alt text"
        link="http://localhost:3000/"
      />
      <AboutUsRow
        title="Product Development"
        description="A good understanding of the requirements, users, target audience, and prospective market is required for creating a successful product.
          We take all of these factors into account and create a well-defined plan that outlines our approach and strategy for converting your concept into a marketable product.
          During the first stage, we'll try to figure out what we need to know about the product and the company that's behind it.
          We accomplish this by conducting extensive research."
        image="/assets/images/AboutUs_ProductDevelopment.jpg"
        imageAlt="Product Development"
        link="http://localhost:3000/"
      />
      <AboutUsRow
        title="Sales Solutions"
        description="For startups, an outsourced sales force can assist the company in identifying untapped market possibilities.
          It's difficult for an already overworked team to overcome technological obstacles, or perhaps not having enough manpower to compete.
          Finhub helps organizations that wish to scale swiftly without recruiting more full-time employees save time and money.
          Since it might be difficult for your employees to try new things, an outsider's perspective is always helpful."
        image="/assets/images/AboutUs_SalesSolutions.jpg"
        imageAlt="Sales Solutions"
        link="http://localhost:3000/"
      />
    </div>
  </Section>
);

export { AboutUs };
