import className from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';

type IVerticalFeatureRowProps = {
  title?: string;
  description: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
  icon?: boolean;
  line?: boolean;
  link?: string | undefined;
  falseElem?: string;
};

const VerticalFeatureRow = (props: IVerticalFeatureRowProps) => {
  const verticalFeatureClass = className('mt-10', 'flex', {
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
      marginTop: '18px',
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
      <div className="flex mr-5">
        <div className="sm:w-5 verticalFutureRow-imgCont">
          <img
            src="/assets/images/symbol.svg"
            alt="icon"
            className="h-12"
            style={styles.img}
          />
        </div>
      </div>
      <div className="flex flex-col">
        <div className="">
          <h3
            className="text-xl sm:text-2xl text-gray-900 font-semibold"
            style={styles.title}
          >
            {props.title}
          </h3>
          <span style={styles.span}></span>
        </div>
        <div
          className={`flex flex-col-reverse ${
            props.reverse ? 'md:flex-row-reverse' : 'md:flex-row'
          }`}
        >
          <div className="mt-6 sm:mr-14 md:w-3/5 text-sm text-black leading-4">
            {props.description}
            <div style={styles.button}>
              <Link href={encodeURIComponent(props.link!)} passHref={true}>
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
          <div className="p-3 lg:h-56 flex items-center justify-center">
            <img
              src={`${router.basePath}${props.image}`}
              alt={props.imageAlt}
              style={{ maxWidth: '75%' }}
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
