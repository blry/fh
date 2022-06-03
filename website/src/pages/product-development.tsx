import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Banner } from '../templates/Banner';

const ProductDevelopment = () => {
  return (
    <>
      <Banner title="Product Development" />
      <div className="max-w-[1400px] mx-auto">
        <VerticalFeatureRow
          title="Description"
          description="A good understanding of the requirements, users, target audience, and prospective market is required for 
        creating a successful product. We take all of these factors into account and create a well-defined plan that outlines 
        our approach and strategy for converting your concept into a marketable product. During the first stage, we’ll try to 
        figure out what we need to know about the product and the company that’s behind it. We accomplish this by conducting 
        extensive research that provides us with a clear picture of what the product is all about, what it offers users, and what 
        they require. The research produces a list of Requirement Specifications. The intricacies of the interface, navigation, 
        and how the information is displayed are identified and defined by functional and visual design."
          descriptionWidth="88%"
          image="/assets/images/product-photo1.svg"
          imageWidth="417px"
          imageHeight="340px"
          imageAlt="image"
          icon
        />
        <VerticalFeatureRow
          description="We can move forward with product development once we have the user requirements and functional design. 
          Software developers, the product manager, and at least one visual designer are normally involved in this stage."
          image="/assets/images/product-photo2.svg"
          descriptionWidth="78%"
          imageWidth="417px"
          imageHeight="350px"
          imageAlt="image"
          listItems={[
            'The visual designer is in charge of translating the functional design into a visual representation, and he or she should be given as much leeway as possible while keeping in mind all of the functionality that is essential when creating a fantastically rich user experience. ',
            'A complete technical document is provided to all software developers, which offers an in-depth explanation of the functional design from their perspective.',
          ]}
          reverse
        />
        <VerticalFeatureRow
          title="Design"
          description="The design stage’s output is a clear representation of the entire product design process that can be used to 
          communicate with developers, graphic designers, and content providers. Throughout the whole product life cycle, we conduct 
          usability testing and quality assurance evaluations. This guarantees that the product is simple to use and that users have 
          a good time with it. We employ a combination of heuristic evaluation techniques and user testing sessions. Our services 
          include a lot of support, updates, and product maintenance. We give technical assistance and are constantly adding new 
          features and functionality to the items we design."
          descriptionWidth="88%"
          image="/assets/images/product-photo3.svg"
          imageWidth="417px"
          imageHeight="340px"
          imageAlt="image"
          marginBottom="40px"
        />
      </div>
    </>
  );
};

export default ProductDevelopment;
