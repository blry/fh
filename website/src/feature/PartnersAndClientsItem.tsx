/* eslint-disable prettier/prettier */
import { useRouter } from 'next/router';

type IPartnersAndClientsItem = {
  image: string;
  imageAlt: string;
};

const PartnersAndClientsItem = (props: IPartnersAndClientsItem) => {
  const router = useRouter();

  return (
    <div style={{ margin: "0 15px 0 15px" }}>
      <img
            src={`${router.basePath}${props.image}`}
            alt={props.imageAlt}
            style={{ height: "120px" }}
            />
    </div>
  );
};

export { PartnersAndClientsItem };
