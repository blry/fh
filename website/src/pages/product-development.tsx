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
          description="We can move forward with product development once we have the user requirements and functional design. 
          Software developers, the product manager, and at least one visual designer are normally involved in this stage."
          image="/assets/images/product-photo2.svg"
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
          image="/assets/images/product-photo3.svg"
          imageAlt="image"
          falseElem="team-extension"
        />
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
          imageAlt="image"
          icon
        />
      </div>
      <TeamExtension />
    </>
  );
};

export default ProductDevelopment;
