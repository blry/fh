import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';
import { Banner } from '../templates/Banner';
import SalesTools from '../templates/SalesTools';

const SalesSolution = () => {
  return (
    <>
      <Banner title="Sales Solution" />
      <div className="max-w-screen-lg mx-auto px-3 mb-28">
        <VerticalFeatureRow
          title="Introduction"
          description="A good understanding of the requirements, users, target audience, and prospective market is required for 
        creating a successful product. We take all of these factors into account and create a well-defined plan that outlines 
        our approach and strategy for converting your concept into a marketable product. During the first stage, we’ll try to 
        figure out what we need to know about the product and the company that’s behind it. We accomplish this by conducting 
        extensive research that provides us with a clear picture of what the product is all about, what it offers users, and what 
        they require. The research produces a list of Requirement Specifications. The intricacies of the interface, navigation, 
        and how the information is displayed are identified and defined by functional and visual design."
          image="/assets/images/sales-photo1.svg"
          imageAlt="image"
          icon
        />
        <VerticalFeatureRow
          title="Strategy"
          description="A good understanding of the requirements, users, target audience, and prospective market is required for 
        creating a successful product. We take all of these factors into account and create a well-defined plan that outlines 
        our approach and strategy for converting your concept into a marketable product. During the first stage, we’ll try to 
        figure out what we need to know about the product and the company that’s behind it. We accomplish this by conducting 
        extensive research that provides us with a clear picture of what the product is all about, what it offers users, and what 
        they require. The research produces a list of Requirement Specifications. The intricacies of the interface, navigation, 
        and how the information is displayed are identified and defined by functional and visual design."
          image="/assets/images/sales-photo2.svg"
          imageAlt="image"
          reverse
        />
        <VerticalFeatureRow
          title="Proces"
          description="A good understanding of the requirements, users, target audience, and prospective market is required for 
        creating a successful product. We take all of these factors into account and create a well-defined plan that outlines 
        our approach and strategy for converting your concept into a marketable product. During the first stage, we’ll try to 
        figure out what we need to know about the product and the company that’s behind it. We accomplish this by conducting 
        extensive research that provides us with a clear picture of what the product is all about, what it offers users, and what 
        they require. The research produces a list of Requirement Specifications. The intricacies of the interface, navigation, 
        and how the information is displayed are identified and defined by functional and visual design."
          image="/assets/images/sales-photo3.svg"
          imageAlt="image"
        />
        <VerticalFeatureRow
          title="Activity"
          description="A good understanding of the requirements, users, target audience, and prospective market is required for 
        creating a successful product. We take all of these factors into account and create a well-defined plan that outlines 
        our approach and strategy for converting your concept into a marketable product. During the first stage, we’ll try to 
        figure out what we need to know about the product and the company that’s behind it. We accomplish this by conducting 
        extensive research that provides us with a clear picture of what the product is all about, what it offers users, and what 
        they require. The research produces a list of Requirement Specifications. The intricacies of the interface, navigation, 
        and how the information is displayed are identified and defined by functional and visual design."
          image="/assets/images/sales-photo4.svg"
          imageAlt="image"
          reverse
        />
      </div>
      <Section
        image="/assets/images/symbol.svg"
        title="Tools and Technologies"
        reverse="true"
      >
        <SalesTools />
      </Section>
    </>
  );
};

export default SalesSolution;
