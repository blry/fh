import { useRouter } from 'next/router';
import { Section } from '../layout/Section';

import { motion } from 'framer-motion'
import { OpacityVariants } from '../utils/motion/OpacityVariants'

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  containerElement: {
    marginBottom: '35px',
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
      <motion.div 
        className="w-full"
        initial={OpacityVariants.hidden}
        variants={OpacityVariants}
        whileInView={OpacityVariants.visible}
        viewport={{ once: true }}
      >
        <div style={styles.container} className="justify-beetwen">
          <div style={styles.containerElement} className="w-full md:w-1/2">
            <div className="flex">
              <img
                src={`${router.basePath}/assets/images/ul_elem.svg`}
                alt="ul"
              />
              <p style={styles.itemTitle} className="teamextensions-title">
                Frontend Development
              </p>
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
          <div style={styles.containerElement} className="w-full md:w-1/2">
            <div className="flex">
              <img
                src={`${router.basePath}/assets/images/ul_elem.svg`}
                alt="ul"
              />
              <p style={styles.itemTitle} className="teamextensions-title">
                Mobile App Development
              </p>
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
          <div style={styles.containerElement} className="w-full md:w-1/2">
            <div className="flex">
              <img
                src={`${router.basePath}/assets/images/ul_elem.svg`}
                alt="ul"
              />
              <p style={styles.itemTitle} className="teamextensions-title">
                DevOps
              </p>
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

          <div style={styles.containerElement} className="w-full md:w-1/2">
            <div className="flex">
              <img
                src={`${router.basePath}/assets/images/ul_elem.svg`}
                alt="ul"
              />
              <p style={styles.itemTitle} className="teamextensions-title">
                Backend & API
              </p>
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
      </motion.div>
    </Section>
  );
};

export { TeamExtension };
