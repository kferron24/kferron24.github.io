import { GiRomanToga } from "react-icons/gi";
import React from "react";
import { Rotate } from "../../helpers/getRotation";
import Synthese from "../../commons/Synthese";

interface Props {
  rotate: Rotate;
  fullScreen: boolean;
  mobile: boolean;
}

const Education = (props: Props) => {
  const { rotate, fullScreen, mobile } = props;
  return (
    <>
      <Synthese
        rotateValue={rotate.r2}
        fullScreen={fullScreen}
        mobile={mobile}
        pageName={"Education"}
        infos={["In coming", "", ""]}
        icon={
          <GiRomanToga
            color="white"
            size={`${fullScreen ? 160 : 80}`}
            className={`${
              fullScreen ? "top-[22.5%]" : "top-[60%]"
            } absolute right-[5%] top-[22.5%] opacity-90`}
          />
        }
      />
    </>
  );
};

export default Education;
