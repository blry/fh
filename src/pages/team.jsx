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
      <Section image="/assets/images/symbol.svg" title="Management">
        <TeamManagementItem
          image="/assets/images/photo_2810.jpg"
          title="Artiom Cebanu"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
          magna aliqua. Id eu  nisl  nunc   mi ipsum faucibus. Tellus at urna condimentum mattis. Consequat  ac   felis."
          jobTitle="Director of Corporate Affairs"
          phoneNumber="060123654"
          email="test@finhubss.com"
        />
        <TeamManagementItem
          image="/assets/images/photo_1.jpg"
          title="Name Surname"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
          magna aliqua. Id eu  nisl  nunc   mi ipsum faucibus. Tellus at urna condimentum mattis. Consequat  ac   felis."
          jobTitle="Job Title"
          phoneNumber="060123654"
          email="test@finhubss.com"
          reverse="true"
        />
        <TeamManagementItem
          image="/assets/images/photo3.svg"
          title="Name Surname"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
          magna aliqua. Id eu  nisl  nunc   mi ipsum faucibus. Tellus at urna condimentum mattis. Consequat  ac   felis."
          jobTitle="Job Title"
          phoneNumber="060123654"
          email="test@finhubss.com"
        />
      </Section>
      <Section
        image="/assets/images/symbol.svg"
        title="Information Technology"
        reverse="true"
      >
        <div className="flex justify-between flex-wrap section-teamIT-container">
          <TeamIT
            image="/assets/images/photo4.svg"
            title="Name Surname"
            jobTitle="Job Title"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore."
            phoneNumber="+37360735992"
            email="test@finhubss.com"
          />
          <TeamIT
            image="/assets/images/photo5.svg"
            title="Name Surname"
            jobTitle="Job Title"
            description="Lorem ipsum dolor sit amet, consectetur adipiscig elit, sed do eiusmod tempor incididuntut labore."
            phoneNumber="+37360735992"
            email="test@finhubss.com"
          />
          <TeamIT
            image="/assets/images/photo6.svg"
            title="Name Surname"
            jobTitle="Job Title"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore."
            phoneNumber="+37360735992"
            email="test@finhubss.com"
          />
          <TeamIT
            image="/assets/images/photo7.svg"
            title="Name Surname"
            jobTitle="Job Title"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore."
            phoneNumber="+37360735992"
            email="test@finhubss.com"
          />
        </div>
      </Section>
      <Section image="/assets/images/symbol.svg" title="Sales">
        <div className="flex justify-between flex-wrap section-teamIT-container">
          <TeamIT
            image="/assets/images/photo4.svg"
            title="Name Surname"
            jobTitle="Job Title"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore."
            phoneNumber="+37360735992"
            email="test@finhubss.com"
          />
          <TeamIT
            image="/assets/images/photo5.svg"
            title="Name Surname"
            jobTitle="Job Title"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore."
            phoneNumber="+37360735992"
            email="test@finhubss.com"
          />
          <TeamIT
            image="/assets/images/photo6.svg"
            title="Name Surname"
            jobTitle="Job Title"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore."
            phoneNumber="+37360735992"
            email="test@finhubss.com"
          />
          <TeamIT
            image="/assets/images/photo7.svg"
            title="Name Surname"
            jobTitle="Job Title"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore."
            phoneNumber="+37360735992"
            email="test@finhubss.com"
          />
        </div>
      </Section>
      <Section
        image="/assets/images/symbol.svg"
        title="Recruitment"
        reverse="true"
      >
        <TeamManagementItem
          image="/assets/images/photo1.svg"
          title="Artiom Cebanu"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
          magna aliqua. Id eu  nisl  nunc   mi ipsum faucibus. Tellus at urna condimentum mattis. Consequat  ac   felis."
          jobTitle="Director of Corporate Affairs"
          phoneNumber="060123654"
          email="test@finhubss.com"
        />
      </Section>
      <Section image="/assets/images/symbol.svg" title="Finance">
        <TeamManagementItem
          image="/assets/images/photo1.svg"
          title="Artiom Cebanu"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
          magna aliqua. Id eu  nisl  nunc   mi ipsum faucibus. Tellus at urna condimentum mattis. Consequat  ac   felis."
          jobTitle="Director of Corporate Affairs"
          phoneNumber="060123654"
          email="test@finhubss.com"
          reverse="true"
        />
      </Section>
    </>
  );
};

export default Team;
