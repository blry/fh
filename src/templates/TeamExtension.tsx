import { useRouter } from 'next/router';

import { Section } from '../layout/Section';

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  containerElement: {
    width: '50%',
    marginBottom: '90px',
  },
  itemTitle: {
    marginLeft: '10px',
    color: 'black',
    fontSize: '22pt',
  },
  logoContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
  },
  logoItem: {
    padding: '15px',
    border: '1px solid #EEEEEE',
    display: 'flex',
    height: '50px',
    margin: '10px',
  },
} as const;

const TeamExtension = () => {
  const router = useRouter();

  return (
    <Section
      image="/assets/images/symbol.svg"
      title="Our Tech Stack"
      reverse="true"
    >
      <div className="w-full">
        <div style={styles.container}>
          <div style={styles.containerElement}>
            <div className="flex">
              <img
                src={`${router.basePath}/assets/images/ul_elem.svg`}
                alt="ul"
              />
              <p style={styles.itemTitle}>Frontend Development</p>
            </div>
            <div style={styles.logoContainer}>
              <div style={styles.logoItem}>
                <img
                  src={`${router.basePath}/assets/images/angular_icon.svg`}
                  alt="angular"
                />
              </div>
              <div style={styles.logoItem}>
                <img
                  src={`${router.basePath}/assets/images/react_icon.svg`}
                  alt="react"
                />
              </div>
              <div style={styles.logoItem}>
                <img
                  src={`${router.basePath}/assets/images/vue_icon.svg`}
                  alt="vue"
                />
              </div>
              <div style={styles.logoItem}>
                <img
                  src={`${router.basePath}/assets/images/typeScript_icon.svg`}
                  alt="typeScript"
                />
              </div>
            </div>
          </div>
          <div style={styles.containerElement}>
            <div className="flex">
              <img
                src={`${router.basePath}/assets/images/ul_elem.svg`}
                alt="ul"
              />
              <p style={styles.itemTitle}>Mobile App Development</p>
            </div>
            <div style={styles.logoContainer}>
              <div style={styles.logoItem}>
                <img
                  src={`${router.basePath}/assets/images/react_icon.svg`}
                  alt="angular"
                />
              </div>
              <div style={styles.logoItem}>
                <img
                  src={`${router.basePath}/assets/images/fluter_icon.svg`}
                  alt="react"
                />
              </div>
              <div style={styles.logoItem}>
                <img
                  src={`${router.basePath}/assets/images/kotlin_icon.svg`}
                  alt="vue"
                />
              </div>
              <div style={styles.logoItem}>
                <img
                  src={`${router.basePath}/assets/images/swift_icon.svg`}
                  alt="typeScript"
                />
              </div>
            </div>
          </div>
          <div style={styles.containerElement}>
            <div className="flex">
              <img
                src={`${router.basePath}/assets/images/ul_elem.svg`}
                alt="ul"
              />
              <p style={styles.itemTitle}>DevOps</p>
            </div>
            <div style={styles.logoContainer}>
              <div style={styles.logoItem}>
                <img
                  src={`${router.basePath}/assets/images/aws_icon.svg`}
                  alt="angular"
                />
              </div>
              <div style={styles.logoItem}>
                <img
                  src={`${router.basePath}/assets/images/azure_icon.svg`}
                  alt="react"
                />
              </div>
              <div style={styles.logoItem}>
                <img
                  src={`${router.basePath}/assets/images/docker_icon.svg`}
                  alt="vue"
                />
              </div>
              <div style={styles.logoItem}>
                <img
                  src={`${router.basePath}/assets/images/kubernetes_icon.svg`}
                  alt="typeScript"
                />
              </div>
            </div>
          </div>

          <div style={styles.containerElement}>
            <div className="flex">
              <img
                src={`${router.basePath}/assets/images/ul_elem.svg`}
                alt="ul"
              />
              <p style={styles.itemTitle}>Backend & API</p>
            </div>
            <div style={styles.logoContainer}>
              <div style={styles.logoItem}>
                <img
                  src={`${router.basePath}/assets/images/nodejs_icon.svg`}
                  alt="angular"
                />
              </div>
              <div style={styles.logoItem}>
                <img
                  src={`${router.basePath}/assets/images/php_icon.svg`}
                  alt="react"
                />
              </div>
              <div style={styles.logoItem}>
                <img
                  src={`${router.basePath}/assets/images/laravel_icon.svg`}
                  alt="vue"
                />
              </div>
              <div style={styles.logoItem}>
                <img
                  src={`${router.basePath}/assets/images/sympfony_icon.svg`}
                  alt="typeScript"
                />
              </div>
              <div style={styles.logoItem}>
                <img
                  src={`${router.basePath}/assets/images/python_icon.svg`}
                  alt="typeScript"
                />
              </div>
              <div style={styles.logoItem}>
                <img
                  src={`${router.basePath}/assets/images/django_icon.svg`}
                  alt="typeScript"
                />
              </div>
              <div style={styles.logoItem}>
                <img
                  src={`${router.basePath}/assets/images/flusk_icon.svg`}
                  alt="typeScript"
                />
              </div>
              <div style={styles.logoItem}>
                <img
                  src={`${router.basePath}/assets/images/power_icon.svg`}
                  alt="typeScript"
                />
              </div>
              <div style={styles.logoItem}>
                <img
                  src={`${router.basePath}/assets/images/java_icon.svg`}
                  alt="typeScript"
                />
              </div>
              <div style={styles.logoItem}>
                <img
                  src={`${router.basePath}/assets/images/net_icon.svg`}
                  alt="typeScript"
                />
              </div>
              <div style={styles.logoItem}>
                <img
                  src={`${router.basePath}/assets/images/go_icon.svg`}
                  alt="typeScript"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export { TeamExtension };
