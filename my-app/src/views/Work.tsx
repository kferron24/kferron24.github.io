import React from "react";
import Synthese from "../commons/Synthese";
import { Rotate } from "../helpers/getRotation";

interface Props {
  rotate: Rotate;
  fullScreen: boolean;
  mobile: boolean;
}

const Work = (props: Props) => {
  const { rotate, fullScreen, mobile } = props;
  return (
    <Synthese
      rotateValue={rotate.r3}
      fullScreen={fullScreen}
      mobile={mobile}
      pageName={"Work Experience"}
      infos={["In coming", "", ""]}
    />
  );
};

export default Work;
