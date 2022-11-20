import { GiPikeman } from "react-icons/gi";
import { Rotate } from "../helpers/getRotation";
import Synthese from "../commons/Synthese";

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
      icon={
        <GiPikeman
          color="white"
          size={`${fullScreen ? 160 : 80}`}
          className={`${
            fullScreen ? "top-[22.5%]" : "top-[60%]"
          } absolute right-[5%] top-[22.5%] opacity-90`}
        />
      }
    />
  );
};

export default Work;
