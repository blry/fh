/* eslint-disable prettier/prettier */
import { useRouter } from "next/router";

type IAboutUsItemProps = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  link: string;
};

const AboutUsItem = (props: IAboutUsItemProps) => {
  const router = useRouter();

  return (
    <div className="p-3 border-2 relative pb-9 ">
      <div className="">
        <img
          src={`${router.basePath}${props.image}`}
          alt={props.imageAlt}
          style={{ height: "200px", margin: "0 auto" }}
        />
      </div>
      <div className="">
        <h4 className="text-2xl text-gray-900 font-semibold">{props.title}</h4>
        <div className="mt-3 text-sm">{props.description}</div>
      </div>
      <div className="bottom-2 absolute right-3">
        <a href={props.link} className="float-right text-primary-500 flex text-sm font-bold" style={{color:"rgb(59 130 246)"}}>
          Read More 
          <img src="/icons/Blue Arrow.svg" alt="" className="h-4 mt-0.5 ml-1" />
        </a>
      </div>
    </div>
  );
};

export { AboutUsItem };
