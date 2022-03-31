import className from 'classnames';
import { useRouter } from 'next/router';

type IVerticalFeatureRowProps = {
  title?: string;
  description: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
  icon?: boolean;
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
  };

  const router = useRouter();

  return (
    <div className={verticalFeatureClass}>
      <div className="flex" style={styles.subContainer}>
        <div className="sm:w-5">
          <img
            src="/assets/images/symbol.svg"
            alt="icon"
            className="h-12"
            style={styles.img}
          />
        </div>
        <div className="w-full sm:w-2/3 text-left sm:px-9">
          <h3
            className="text-3xl text-gray-900 font-semibold"
            style={styles.title}
          >
            {props.title}
          </h3>
          <div className="mt-6 text-sm text-black leading-4">
            {props.description}
          </div>
        </div>

        <div className="w-full sm:w-1/3 p-3">
          <img src={`${router.basePath}${props.image}`} alt={props.imageAlt} />
        </div>
      </div>
    </div>
  );
};

export { VerticalFeatureRow };
