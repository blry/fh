/* eslint-disable prettier/prettier */
import { useRouter } from "next/router";

type IOtherLinksRowProps = {
  title?: string;
  description: string;
  image: string;
  imageAlt: string;
  link: string;
};

const OtherLinksRow = (props: IOtherLinksRowProps) => {
  const router = useRouter();
  const styles = {
    span: {
      display: props.title ? 'block' : 'none',
      height: '50px',
      borderLeft: '4px solid #2C4DCA',
      margin: '0 8px'
    }
  }

  return (
    <div className="mb-8 p-3">
      <div className="mb-2 flex items-center">
        <div className="col-span-1 pr-2 pl-1">
          <img
              src={`${router.basePath}${props.image}`}
              alt={props.imageAlt}
              style={{ margin: "0 auto" }}
            />
        </div>
        <span style={styles.span}></span>
        <div className="col-span-5 pl-1 border-l-slate-900">
          <div className="text-xl lg:text-3xl font-light text-gray-900">{props.title}</div>
        </div>
      </div>
      <div className="flex flex-col-reverse sm:flex-row sm:grid-container sm:grid-cols-6 mb-2">
        <div className="w-36 sm:col-span-1">
          <a href={props.link} className="float-right text-gray-800 w-32 flex text-sm font-bold border-2 p-1.5 mr-4 mt-4 border-l-8 border-gray-800 modal-contactus-send-button">
            Read More 
            <img src="/icons/Blue Arrow.svg" alt="" className="h-4 mt-0.5 ml-1 text-gray-900" />
          </a>
        </div>
        <div className="w-full sm:col-span-5 pl-1">
          <div className="text-sm">{props.description}</div>
        </div>
      </div>
    </div>
  );
};

export { OtherLinksRow };