import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Banner } from '../templates/Banner';
import { TeamExtension } from '../templates/TeamExtension';

const ProductDevelopment = () => {
  return (
    <>
      <Banner title="Product Development" />
      <div className="max-w-screen-lg mx-auto px-3">
        <VerticalFeatureRow
          title="Description"
          description="A good understanding of the requirements, users, target audience, and prospective market is required for 
        creating a successful product. We take all of these factors into account and create a well-defined plan that outlines 
        our approach and strategy for converting your concept into a marketable product. During the first stage, we’ll try to 
        figure out what we need to know about the product and the company that’s behind it. We accomplish this by conducting 
        extensive research that provides us with a clear picture of what the product is all about, what it offers users, and what 
        they require. The research produces a list of Requirement Specifications. The intricacies of the interface, navigation, 
        and how the information is displayed are identified and defined by functional and visual design."
          image="/assets/images/product-photo1.svg"
          imageAlt="image"
          icon
        />
        <VerticalFeatureRow
          description="A good understanding of the requirements, users, target audience, and prospective market is required for 
        creating a successful product. We take all of these factors into account and create a well-defined plan that outlines 
        our approach and strategy for converting your concept into a marketable product. During the first stage, we’ll try to 
        figure out what we need to know about the product and the company that’s behind it. We accomplish this by conducting 
        extensive research that provides us with a clear picture of what the product is all about, what it offers users, and what 
        they require. The research produces a list of Requirement Specifications. The intricacies of the interface, navigation, 
        and how the information is displayed are identified and defined by functional and visual design."
          image="/assets/images/product-photo2.svg"
          imageAlt="image"
          reverse
        />
        <VerticalFeatureRow
          title="Design"
          description="A good understanding of the requirements, users, target audience, and prospective market is required for 
        creating a successful product. We take all of these factors into account and create a well-defined plan that outlines 
        our approach and strategy for converting your concept into a marketable product. During the first stage, we’ll try to 
        figure out what we need to know about the product and the company that’s behind it. We accomplish this by conducting 
        extensive research that provides us with a clear picture of what the product is all about, what it offers users, and what 
        they require. The research produces a list of Requirement Specifications. The intricacies of the interface, navigation, 
        and how the information is displayed are identified and defined by functional and visual design."
          image="/assets/images/product-photo3.svg"
          imageAlt="image"
          falseElem="team-extension"
        />
        <VerticalFeatureRow
          title="Team Extension"
          description="A good understanding of the requirements, users, target audience, and prospective market is required for 
        creating a successful product. We take all of these factors into account and create a well-defined plan that outlines 
        our approach and strategy for converting your concept into a marketable product. During the first stage, we’ll try to 
        figure out what we need to know about the product and the company that’s behind it. We accomplish this by conducting 
        extensive research that provides us with a clear picture of what the product is all about, what it offers users, and what 
        they require. The research produces a list of Requirement Specifications. The intricacies of the interface, navigation, 
        and how the information is displayed are identified and defined by functional and visual design."
          image="/assets/images/product-photo4.svg"
          imageAlt="image"
          icon
        />
      </div>
      <TeamExtension />
    </>
  );
};

export default ProductDevelopment;
