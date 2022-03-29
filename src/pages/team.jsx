/* eslint-disable import/extensions */
import { Banner } from '../templates/Banner';
import { Section } from '../layout/Section';
import { TeamManagementItem } from '../feature/TeamManagementItem';

const Team = () => {
  return (
    <>
      <Banner
        title="Our Team"
        description="We are a team of professionals having a broad range of expertise in IT, Finance & Legal, and Sales primarily. Our business background of over a decade of operations within the EU, allows our customers and partners to benefit from the knowledge and network we have managed to build so far. The team is guided by shared values: High Standards, Be Ambitious, Loyalty, Perseverance, Transparency The culture and core values mirrors our internal work ethic but also the relationship with all of our customers and partners. Finhub’s team is our most valuable asset, thus we invest a significant amount of efforts and resources in the Learning & Development process through a dedicated team of experts. Regardless the current epidemiological situation, our office spaces in Vienna, Austria and Chisinau, Moldova remain open for everyone, with respect to the local social distancing measures."
      />
      <Section image="/assets/images/symbol.svg" title="Management">
        <TeamManagementItem />
      </Section>
    </>
  );
};

export default Team;
