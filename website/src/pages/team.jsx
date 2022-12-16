/* eslint-disable import/extensions */
import { Banner } from '../templates/Banner';
import { Section } from '../layout/Section';
import { TeamManagementItem } from '../feature/TeamManagementItem';
import { TeamIT } from '../feature/TeamIT';

const Team = () => {
  return (
    <>
      <Banner
        title="Our Team"
        description="We are a team of professionals having a broad range of expertise in IT, Finance & Legal, and Sales primarily. 
        Our business background of over a decade of operations within the EU, allows our customers and partners to benefit from the 
        knowledge and network we have managed to build so far. The team is guided by shared values: High Standards, Be Ambitious, 
        Loyalty, Perseverance, Transparency The culture and core values mirrors our internal work ethic but also the relationship 
        with all of our customers and partners. Finhub’s team is our most valuable asset, thus we invest a significant amount of 
        efforts and resources in the Learning & Development process through a dedicated team of experts. Regardless the current 
        epidemiological situation, our office spaces in Vienna, Austria and Chisinau, Moldova remain open for everyone, with respect 
        to the local social distancing measures."
      />
      <Section image="/assets/images/symbol.svg" titleBlack="Management">
        <TeamManagementItem
          image="/assets/images/team/Finhub2012.jpg"
          title="Vitali Chebanu"
          jobTitle="CEO"
          email="cob@finhubss.com"
        />
        <TeamManagementItem
          image="/assets/images/team/Finhub2810.jpg"
          title="Artiom Cebanu"
          jobTitle="Managing Director"
          email="acebanu@finhubss.com"
          link="https://www.linkedin.com/in/artiom-cebanu-fhcf-fhss/"
          reverse
        />
        <TeamManagementItem
          image="/assets/images/team/Finhub2762.jpg"
          title="Dorian Bujor"
          jobTitle="Vice-President of Business Development"
          email="dbujor@finhubss.com"
          link="https://www.linkedin.com/in/dorianbujor/"
        />
        
      </Section>
      <Section image="/assets/images/symbol.svg" titleBlack="Legal">
        <TeamManagementItem
          image="/assets/images/team/Finhub2011.jpg"
          title="Alexander Syrbu"
          jobTitle="Chief Legal Officer"
          email="sav@finhubfund.com"
        />
      </Section>
      <Section
        image="/assets/images/symbol.svg"
        titleBlack=" "
        titleBlue="Information Technology"
        reverse="true"
      >
        <div className="hidden sm:flex justify-evenly flex-wrap section-teamIT-container">
          <TeamIT
            image="/assets/images/team/Finhub2661.jpg"
            title="Alexandru Sterpu"
            jobTitle="Lead Software Developer"
            link="https://www.linkedin.com/in/alex-sterpu/"
            email="asterpu@finhubss.com"
          />
          <TeamIT
            image="/assets/images/team/Finhub2700.jpg"
            title="Marin Terentiev"
            jobTitle="Lead Software Developer"
            link="https://www.linkedin.com/in/marin-terentiev-915406161/"
            email="mterentiev@finhubss.com"
          />
          <TeamIT
            image="/assets/images/team/Finhub2735.jpg"
            title="Andrei Tricolici"
            jobTitle="Senior Software Developer"
            email="tandrei@finhubss.com"
          />
          <TeamIT
            image="/assets/images/team/Finhub2724.jpg"
            title="Liviu Leșan"
            jobTitle="Senior Software Developer"
            email="liviul@finhubss.com"
          />
        </div>
        <div className="block sm:hidden">
          <TeamManagementItem
            image="/assets/images/team/Finhub2661.jpg"
            title="Alexandru Sterpu"
            jobTitle="Lead Software Developer"
            email="asterpu@finhubss.com"
          />
          <TeamManagementItem
            image="/assets/images/team/Finhub2700.jpg"
            title="Marin Terentiev"
            jobTitle="Lead Software Developer"
            email="mterentiev@finhubss.com"
            reverse
          />
          <TeamManagementItem
            image="/assets/images/team/Finhub2735.jpg"
            title="Andrei Tricolici"
            jobTitle="Senior Software Developer"
            email="tandrei@finhubss.com"
          />
          <TeamManagementItem
            image="/assets/images/team/Finhub2724.jpg"
            title="Liviu Leșan"
            jobTitle="Senior Software Developer"
            email="liviul@finhubss.com"
            reverse="true"
          />
        </div>
      </Section>
      <Section image="/assets/images/symbol.svg" titleBlack="Sales">
        <div className="hidden sm:flex justify-evenly flex-wrap section-teamIT-container">
          <TeamIT
            image="/assets/images/team/Finhub2595.jpg"
            title="Victor Uncuta"
            jobTitle="Account Executive"
            link="https://www.linkedin.com/in/victor-uncuta-72bb13184/"
            email="uvictor@finhubss.com"
          />
          <TeamIT
            image="/assets/images/team/Finhub2917.jpg"
            title="Tudor Craitamindra"
            link="https://www.linkedin.com/in/theodore-cray-ab1416196/"
            jobTitle="Business Development Representative"
            email="ctudor@finhubss.com"
          />
          <TeamIT
            image="/assets/images/team/Finhub2579.jpg"
            title="Ioan Ćorić"
            link="https://www.linkedin.com/in/ioan-%C4%87ori%C4%87-fhss-bdr17/"
            jobTitle="Business Development Representative"
            email="iciorici@finhubss.com"
          />
          <TeamIT
            image="/assets/images/team/Finhub2938.jpg"
            title="Lyubov Turcan"
            link="https://www.linkedin.com/in/liubov-turcan-2b2426224/"
            jobTitle="Business Development Representative"
            email="lturcanu@finhubss.com"
          />
        </div>
        <div className="block sm:hidden">
          <TeamManagementItem
            image="/assets/images/team/Finhub2595.jpg"
            title="Victor Uncuta"
            jobTitle="Account Executive"
            email="uvictor@finhubss.com"
          />
          <TeamManagementItem
            image="/assets/images/team/Finhub2917.jpg"
            title="Tudor Craitamindra"
            jobTitle="Business Development Representative"
            email="ctudor@finhubss.com"
            reverse
          />
          <TeamManagementItem
            image="/assets/images/team/Finhub2579.jpg"
            title="Ioan Ćorić"
            jobTitle="Business Development Representative"
            email="iciorici@finhubss.com"
          />
          <TeamManagementItem
            image="/assets/images/team/Finhub2938.jpg"
            title="Lyubov Turcan"
            jobTitle="Business Development Representative"
            email="lturcanu@finhubss.com"
            reverse="true"
          />
        </div>
      </Section>
    </>
  );
};

export default Team;
