import { miscellaneous1, miscellaneous2 } from "../../commons/logos";

interface Props {
  mobile: boolean;
  rotateValue: string;
}

const Miscellaneous = (props: Props) => {
  const { mobile, rotateValue } = props;
  return (
    <div
      className={`absolute ${
        mobile ? "mt-[815px]" : "mt-[890px]"
      } mx-[12.5%] w-[75%] border-4 rounded-lg border-medium-green transition duration-1000 ${
        rotateValue !== "" && "translate-x-[100%] opacity-0"
      }`}
    >
      <div className="bg-medium-green">
        <p
          className={`text-center text-white uppercase italic font-medium ${
            mobile ? "text-base" : "text-3xl"
          }`}
        >
          Miscellaneous
        </p>
      </div>
      <div className="flex align-middle">
        <div className=" w-[15%] flex flex-col justify-center backdrop-filter backdrop-blur-sm bg-opacity-60">
          {miscellaneous1.map((misc) => {
            return (
              <>
                <img
                  src={`/${misc.img}.png`}
                  alt={`${misc.name}`}
                  className="w-[75%] mx-[12.5%]"
                />
                <span
                  className={`my-2 bg-medium-green rounded-r-lg text-white text-center ${
                    mobile ? "text-xs" : ""
                  }`}
                >
                  {misc.name}
                </span>
              </>
            );
          })}
        </div>
        <img src="./asl.png" alt="asl" className="w-[70%]" />
        <div className=" w-[15%] flex flex-col justify-center backdrop-filter backdrop-blur-sm bg-opacity-60 z-10">
          {miscellaneous2.map((misc) => {
            return (
              <>
                <img
                  src={`/${misc.img}.png`}
                  alt={`${misc.name}`}
                  className="w-[75%] mx-[12.5%]"
                />
                <span
                  className={`my-2 bg-medium-green rounded-l-lg text-white text-center ${
                    mobile ? "text-xs" : ""
                  }`}
                >
                  {misc.name}
                </span>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Miscellaneous;
