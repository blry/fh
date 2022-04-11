import className from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';

type IVerticalFeatureRowProps = {
  title?: string;
  description: string;
  listItems?: string[];
  image: string;
  imageAlt: string;
  reverse?: boolean;
  icon?: boolean;
  line?: boolean;
  link?: string | undefined;
  falseElem?: string;
};

const VerticalFeatureRow = (props: IVerticalFeatureRowProps) => {
  const verticalFeatureClass = className('mt-10', 'mb-12', 'flex', {
    'flex-row-reverse': props.reverse,
  });

  const styles = {
    img: {
      display: props.icon ? '' : 'none',
    },
    title: {
      display: props.title ? '' : 'none',
    },
    subContainer: {
      flexDirection: props.reverse
        ? ('row-reverse' as 'row-reverse')
        : ('row' as 'row'),
    },
    span: {
      display: props.line ? 'block' : 'none',
      width: '76px',
      borderTop: '3px solid #2C4DCA',
      marginBottom: '18px',
    },
    button: {
      display: props.link ? 'flex' : 'none',
      margin: '15px 0',
    },
    buttonLink: {
      borderColor: '#707070',
      width: '165px',
    },
  };

  const router = useRouter();

  return (
    <div className={verticalFeatureClass}>
      <div className="flex flex-col">
        {/* only mobile resolution */}
        <div className="mobTitle flex-col">
          <div
            className={`flex items-center ${
              props.reverse ? 'flex-row-reverse' : ''
            } ${props.icon ? 'ml-0 mr-0 marginLeft' : ''}`}
          >
            <div
              className={`${
                props.icon ? 'w-5 sm:w-8' : ''
              } verticalFutureRow-imgCont`}
            >
              <img
                src="/assets/images/symbol.svg"
                alt="icon"
                style={styles.img}
              />
            </div>
            <h3
              className={`text-xl sm:text-2xl text-gray-900 font-semibold ${
                props.icon ? 'ml-1 mr-1 sm:ml-3 sm:mr-3' : ''
              }`}
              style={styles.title}
            >
              {props.title}
            </h3>
          </div>
          <span style={styles.span}></span>
          <div className="p-3 md:w-64 lg:w-80 lg:max-h-56 flex items-center justify-center">
            <img
              src={`${router.basePath}${props.image}`}
              alt={props.imageAlt}
              style={{ maxWidth: '85%' }}
              className="mb-3 sm:mb-0"
            />
          </div>
        </div>
        {/* -------------------------- */}
        <div
          className={`flex flex-col-reverse items-center verticalFeatureRow-text ${
            props.reverse ? 'md:flex-row-reverse' : 'md:flex-row'
          }`}
        >
          <div className="mt-6 ml-0 flex flex-col sm:mr-14 md:w-3/5 text-sm text-black leading-4 sm:ml-12">
            {/* -------desktop version--------- */}
            <div className="desktopTitle flex-col">
              <div
                className={`flex items-center ${
                  props.reverse
                    ? 'flex-row-reverse justify-between'
                    : props.icon && ''
                } ${props.icon ? 'ml-0 mr-0' : ''} ${
                  props.reverse ? props.icon && 'marginRight' : ''
                }`}
              >
                <div
                  className={`${
                    props.icon ? 'w-5 sm:w-8 marginLeft' : 'md:h-14'
                  } verticalFutureRow-imgCont`}
                >
                  <img
                    src="/assets/images/symbol.svg"
                    alt="icon"
                    style={styles.img}
                  />
                </div>
                <h3
                  className={`text-xl sm:text-2xl text-gray-900 font-semibold ${
                    props.icon ? 'ml-1 mr-1 sm:ml-3 sm:mr-3' : ''
                  } ${props.reverse ? 'ml-0 sm:ml-0' : ''}`}
                  style={styles.title}
                >
                  {props.title}
                </h3>
              </div>
              <span style={styles.span}></span>
            </div>
            {/* ---------------------------------------------- */}
            {props.description}
            {props.listItems?.map((item: string) => (
              <div className="flex items-start mt-1" key={item}>
                <img
                  src={`${router.basePath}/assets/images/ul_elem.svg`}
                  style={{ marginTop: '5px' }}
                  alt="ul"
                />
                <p className="ml-3">{item}</p>
              </div>
            ))}
            <div style={styles.button}>
              <Link href={`${props.link}`} passHref>
                <a className="float-right text-gray-800 w-32 flex text-sm font-bold border-2 p-1.5 mr-4 mt-4 border-l-8 border-gray-800 modal-contactus-send-button">
                  Read More
                  <img
                    src="/icons/Blue Arrow.svg"
                    alt=""
                    className="h-4 mt-0.5 ml-1 text-gray-900"
                  />
                </a>
              </Link>
            </div>
          </div>
          <div className="p-3 md:w-64 lg:w-80 lg:max-h-56 flex items-center justify-center desktopTitle">
            <img
              src={`${router.basePath}${props.image}`}
              alt={props.imageAlt}
              style={{ maxWidth: '85%' }}
              className="mb-3 sm:mb-0"
            />
          </div>
        </div>
        <div>
          <span id={props.falseElem}></span>
        </div>
      </div>
    </div>
  );
};

export { VerticalFeatureRow };
