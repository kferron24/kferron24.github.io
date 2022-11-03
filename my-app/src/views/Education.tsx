import React from "react";
import Synthese from "../commons/Synthese";
import { Rotate } from "../helpers/getRotation";

interface Props {
  rotate: Rotate;
  fullScreen: boolean;
  mobile: boolean;
}

const Education = (props: Props) => {
  const { rotate, fullScreen, mobile } = props;
  return (
    <Synthese
      rotateValue={rotate.r2}
      fullScreen={fullScreen}
      mobile={mobile}
      pageName={"Education"}
      infos={["In coming", "", ""]}
    />
  );
};

export default Education;
