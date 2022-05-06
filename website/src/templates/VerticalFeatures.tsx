import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section 
    titleBlack="Social" 
    titleBlue='Responsibility' 
    image="/assets/images/symbol.svg"
  >
    <VerticalFeatureRow
      title="About"
      description="FINHUB AC GmbH & Co KG supports the Cycling Federation as well as the Paralympic
      Committee of Moldova. We are contributing to the organization of various regional and
      national events and competitions for juniors, seniors, amateur, and professional athletes.
      Our strong relationship with both organizations has a significant impact on the development
      of sports; education; mental, social, and physical well-being of the community. We are truly
      proud to partner with organizations that bring value to the society."
      image="/assets/images/index-photo1.svg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Paralympic Committee"
      description="The committee supervises and coordinates the Paralympic multi-disability, regional and national competitions in the 
      Republic of Moldova. It is a non-profit organisation, recognized by the National Olympic Committee of the Republic of Moldova, 
      by the Ministry of Education, Culture and Research of the Republic of Moldova, as well as by the International Paralympic 
      Committee (IPC). Moldova competed in the Paralympic Games for the first time at the 1996 Summer Paralympics. Since then, 
      they have competed in every Summer Paralympic Games, making Tokyo their seventh appearance. They have never competed in the 
      Winter Paralympic Games, although they have won two medals at the Summer Paralympics (one each in athletics and table tennis). 
      A total of 4403 competitors representing 162 National Paralympic Committees competed in the 2020 Summer Paralympics, which took
      place from August 24 to September 5, 2021."
      image="/assets/images/index-photo2.svg"
      imageFilter={true}
      imageSize="65%"
      imageAlt="two feature alt text"
      fullRow
      line
    />
    <VerticalFeatureRow
      title="Moldavian Cycling Federation"
      description="The Moldavian Cycling Federation (FCRM) is a public sports organization founded in late 1993. Today it includes 8 
      members. The Moldavian Cycling Federation is recognized by the National Olympic Committee of the Republic of Moldova, by the 
      Ministry of Education, Culture and Research of the Republic of Moldova, as well as by the International Cycling Union (UCI) and 
      the European Cycling Union (UEC) as the exclusive organization in Moldova having priority right to control the development of 
      cycling at the national level."
      image="/assets/images/index-photo3.png"
      imageFilter={true}
      imageAlt="feature alt text"
      fullRow
      line
    />
  </Section>
);

export { VerticalFeatures };
