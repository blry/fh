import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';
import { Banner } from '../templates/Banner';
import SalesTools from '../templates/SalesTools';

const SalesSolution = () => {
  return (
    <>
      <Banner title="Sales Solution" />
      <div className="max-w-screen-xl mx-auto mb-28">
        <VerticalFeatureRow
          title="Introduction"
          description="For startups, an outsourced sales force can assist the company in identifying untapped
          market possibilities. It's difficult for an already overworked team to overcome technological
          obstacles, or perhaps not having enough manpower to compete. Finhub helps organizations
          that wish to scale swiftly without recruiting more full-time employees save time and money.
          Since it might be difficult for your employees to try new things, an outsider's perspective is
          always helpful. Furthermore, we assist businesses in expanding into new markets or
          establishing a presence in new geographic areas. Outsourcing is advantageous when there 
          are linguistic or cultural difficulties to overcome. We specialize in B2B Sales Development
          within the European markets. Our team consists of experienced, motivated, and intelligent
          individuals that speak English, German, French, Spanish, Italian and Russian."
          image="/assets/images/sales-photo1.svg"
          imageAlt="image"
          icon
        />
        <VerticalFeatureRow
          title="Strategy"
          description='A SaaS sales strategy employs a number of sales strategies in order to close deals or upsell
          existing customers. There is no such thing as a "one-size-fits-all" solution when it comes to
          SaaS sales methods; We will figure out what works best for your company. The SaaS sales
          strategy we choose is determined by where your firm is in its SaaS adoption and
          development. A SaaS sales plan is critical to your company&apos;s capacity to expand and position
          itself for long-term success. Our plan is focused on the following to achieve the ultimate goal
          of producing revenue:'
          image="/assets/images/sales-photo2.svg"
          imageAlt="image"
          listItems={[
            'B2B lead generation refers to the process of developing client interest in a product in order to convert that interest into a sale.',
            'Directly approaching your potential customers to promote your organization, product, and services is known as B2B prospecting.',
            'Closing transactions refers to the final stage of a transaction, when contracts are signed and the sale is completed.',
          ]}
          reverse
        />
        <VerticalFeatureRow
          title="Process"
          description="The stages a company goes through to complete a deal with a potential customer are
          referred to as the SaaS sales process. We divide the SaaS sales process into five stages:"
          image="/assets/images/sales-photo3.svg"
          imageAlt="image"
          listItems={[
            'Customer interest in your product is generated through lead generation.',
            'Prospecting by phone, email, or social media is known as outbound prospecting.',
            'Qualification entails determining whether or not the prospect is a good fit for your firm.',
            'Demonstrating - giving the prospect a live demonstration.',
            'Closing entails discussing agreements with the prospect and completing the transaction.',
          ]}
        />
        <VerticalFeatureRow
          title="Activity"
          description="There are three basic ways to sell SaaS:"
          image="/assets/images/sales-photo4.svg"
          imageAlt="image"
          listItems={[
            'Cold calling is when salesmen call potential customers to qualify them and set up a meeting.',
            'Outbound email is when a salesperson reaches prospects via emails that are rich in content, engaging, and personalized.',
            'Salespeople engage with prospects on social media sites in a process known as social selling (the main focus should be LinkedIn with B2B SaaS sales.',
          ]}
          reverse
        />
      </div>
      <Section
        image="/assets/images/symbol.svg"
        titleBlack="Tools"
        titleBlue="and Technologies"
        reverse="true"
      >
        <SalesTools />
      </Section>
    </>
  );
};

export default SalesSolution;
