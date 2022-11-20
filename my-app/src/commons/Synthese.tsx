import React from "react";

interface Props {
  rotateValue: string;
  fullScreen: boolean;
  mobile: boolean;
  pageName: string;
  infos?: string[];
  children?: React.ReactNode;
  icon?: JSX.Element;
}

const Synthese = (props: Props) => {
  const { rotateValue, fullScreen, mobile, pageName, infos, icon } = props;

  const infosBis: string[] = infos ?? ["", "", ""];

  return (
    <>
      <div
        className={`transition duration-1000 ease-in-out ${
          fullScreen ? "origin-[296px_160px]" : "origin-top-left"
        }  ${rotateValue} ${
          rotateValue !== "" && rotateValue !== "rotate-360" && "opacity-0"
        } `}
      >
        <div className="w-9/12 bg-medium-green backdrop-filter backdrop-blur-sm bg-opacity-90 absolute shadow-synthese mt-20 rounded-lg mx-[12.5%]">
          <div
            className={`uppercase ${
              mobile ? "text-xl ml-36 pb-12 pt-16" : "text-5xl ml-48 py-12"
            } text-white py-12`}
          >
            <span>{pageName}</span>
          </div>
          <div
            className={`capitalize ${
              mobile ? "text-base" : "text-3xl"
            } pt-8 pb-4 px-4 text-white `}
          >
            {infosBis.map((info) => {
              return (
                <>
                  <span>{info}</span>
                  <br />
                </>
              );
            })}
          </div>
          {!mobile && icon}
        </div>
        {fullScreen && (
          <>
            <div className="rounded-full w-32 h-32 block absolute bg-light-green ml-[248px] mt-28 z-2"></div>
            <div className="w-48 h-32 block absolute bg-light-green ml-[184px] mt-[50px] z-2"></div>
            <div className="w-32 h-48 block absolute bg-light-green ml-[184px] mt-[48px] z-2"></div>
          </>
        )}
      </div>
    </>
  );
};

export default Synthese;
