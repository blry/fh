/* eslint-disable prettier/prettier */
import { useRouter } from "next/router";

type IOtherLinksRowProps = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  link: string;
};

const OtherLinksRow = (props: IOtherLinksRowProps) => {
  const router = useRouter();
  return (
    <div className="mb-4">
      <div className="grid-container grid grid-cols-6 mb-2">
        <div className="col-span-1">
          <img
              src={`${router.basePath}${props.image}`}
              alt={props.imageAlt}
              style={{ margin: "0 auto" }}
            />
        </div>
        <div className="col-span-5 pl-1 border-l-slate-900">
          <div className="text-xl lg:text-3xl font-light text-gray-900">{props.title}</div>
        </div>
      </div>
      <div className="flex flex-col-reverse sm:flex-row sm:grid-container sm:grid sm:grid-cols-6 mb-2">
        <div className="w-full sm:col-span-1">
          <a href={props.link} className="float-right text-gray-800 flex text-sm font-bold border-2 p-1.5 mr-4 mt-4 border-l-8 border-gray-800">
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
