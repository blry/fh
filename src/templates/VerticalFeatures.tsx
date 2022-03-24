import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section title="Social Responsibility" image="/assets/images/symbol.svg">
    <VerticalFeatureRow
      title="About"
      description="FINHUB AC GmbH & Co KG supports the Cycling Federation as well as the Paralympic
      Committee of Moldova. We are contributing to the organization of various regional and
      national events and competitions for juniors, seniors, amateur, and professional athletes.
      Our strong relationship with both organizations has a significant impact on the development
      of sports; education; mental, social, and physical well-being of the community. We are truly
      proud to partner with organizations that bring value to the society."
      image="/assets/images/feature2.svg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Your title here"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
      image="/assets/images/feature.svg"
      imageAlt="First feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
