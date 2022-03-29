type ITeamItem = {
  image: string;
  title: string;
  jobTitle: string;
  description: string;
  phoneNumber: string;
  email: string;
};

const TeamManagementItem = (props: ITeamItem) => {
  return (
    <>
      <div>
        <div></div>
        <div></div>
      </div>
      <div>
        <div>
          <div>
            <img src="/icons/icon-cornir-blue.svg" alt="icon" />
          </div>
          <div>
            <div>
              {props.title}
              <div>
                <img src="/icons/icon-in.svg" alt="in" />
              </div>
            </div>
            <div>{props.jobTitle}</div>
          </div>
        </div>
        <div>{props.description}</div>
        <div>
          <div>
            <div>
              <img src="/icons/icon-phone.svg" alt="phone" />
            </div>
            {props.phoneNumber}
          </div>
          <div>
            <div>
              <img src="/icons/icon-email.svg" alt="email" />
            </div>
            {props.email}
          </div>
        </div>
      </div>
      <div>
        <span></span>
      </div>
    </>
  );
};

export { TeamManagementItem };
