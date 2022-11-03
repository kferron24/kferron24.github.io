import React from "react";
import Synthese from "../commons/Synthese";
import { Rotate } from "../helpers/getRotation";

interface Props {
  rotate: Rotate;
  fullScreen: boolean;
  mobile: boolean;
}

const Academic = (props: Props) => {
  const { rotate, fullScreen, mobile } = props;
  return (
    <Synthese
      rotateValue={rotate.r4}
      fullScreen={fullScreen}
      mobile={mobile}
      pageName={"Academic Project"}
      infos={["In coming", "", ""]}
    />
  );
};

export default Academic;