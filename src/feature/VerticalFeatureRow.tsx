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
  const verticalFeatureClass = className('mt-10', 'flex', 'flex-wrap', {
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
      <div className="flex" style={styles.subContainer}>
        <div className="sm:w-5 verticalFutureRow-imgCont">
          <img
            src="/assets/images/symbol.svg"
            alt="icon"
            className="h-12"
            style={styles.img}
          />
        </div>
        <div className="w-full sm:w-2/3 text-left sm:px-9 pt-2">
          <h3
            className="text-2xl text-gray-900 font-semibold"
            style={styles.title}
          >
            {props.title}
          </h3>
          <span style={styles.span}></span>
          <div className="mt-6 text-sm text-black leading-4">
            {props.description}
          </div>
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
          <span id={props.falseElem}></span>
        </div>

        <div className="w-full sm:w-1/3 p-3 flex items-center">
          <img src={`${router.basePath}${props.image}`} alt={props.imageAlt} />
        </div>
      </div>
    </div>
  );
};

export { VerticalFeatureRow };
