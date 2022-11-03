export interface Logo {
  img: string;
  name: string;
  link: string;
}

type Props = {
  logos: Logo[];
  mobile: boolean;
};

const Skills = (props: Props) => {
  const { logos, mobile } = props;
  return (
    <div
      className={`scrollSkills flex flex-nowrap items-center bg-regular-green  absolute  w-9/12 h-[392px] ${
        mobile ? "mt-[380px] pl-36" : "mt-[440px] pl-48"
      }  mx-[12.5%] rounded-lg overflow-auto `}
    >
      {logos.map((logo) => {
        return (
          <div className="flex flex-col justify-center mx-8">
            <img
              src={`/${logo.img}.png`}
              alt={`${logo.name}`}
              className="h-32 max-w-[128px] hover:shadow-2xl hover:rounded-lg"
            />
            <span className="mt-4 text-center">{logo.name}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Skills;
