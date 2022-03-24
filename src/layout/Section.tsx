import { ReactNode } from 'react';

import { useRouter } from 'next/router';

type ISectionProps = {
  image?: string;
  imageAlt?: string;
  title?: string;
  description?: string;
  yPadding?: string;
  children: ReactNode;
};

const style = {
  sectionContainer: {
    marginLeft: '-4rem',
  },
  content: {
    width: '100%',
  },
  logoImg: {
    height: '65px',
    width: '36px',
    margin: '0 auto',
  },
  title: {
    margin: '0 26px',
    backgroundColor: 'white',
    borderBottom: '1px solid #2C4DCA',
    lineHeight: '0',
    padding: '0',
    width: '100%',
  },
  titleSpan: {
    background: '#fff',
    padding: '0 15px',
  },
};

const Section = (props: ISectionProps) => {
  const router = useRouter();

  return (
    <div
      className={`max-w-screen-lg mx-auto px-3 ${
        props.yPadding ? props.yPadding : 'py-16'
      }`}
    >
      {(props.title || props.description) && (
        <div
          className="mb-12 text-left flex items-center flex-start"
          style={style.sectionContainer}
        >
          <div className="flex items-center" style={style.content}>
            {props.image && (
              <img
                src={`${router.basePath}${props.image}`}
                alt={props.imageAlt}
                style={style.logoImg}
              />
            )}
            {props.title && (
              <h2
                className="text-3xl text-gray-900 font-bold margin"
                style={style.title}
              >
                <span style={style.titleSpan}>{props.title}</span>
              </h2>
            )}
          </div>

          {props.description && (
            <div className="mt-4 text-xl md:px-20">{props.description}</div>
          )}
        </div>
      )}

      {props.children}
    </div>
  );
};

export { Section };
