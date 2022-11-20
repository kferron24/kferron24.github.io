import Contact from "./Contact";
import DisplaySkills from "./Skills/DisplaySkills";
import { GiSwordman } from "react-icons/gi";
import Infos from "./Infos";
import Miscellaneous from "./Miscellaneous";
import { Rotate } from "../../helpers/getRotation";
import Synthese from "../../commons/Synthese";

interface Props {
  rotate: Rotate;
  fullScreen: boolean;
  mobile: boolean;
}

const Home = (props: Props) => {
  const { rotate, fullScreen, mobile } = props;
  return (
    <>
      <Synthese
        rotateValue={rotate.r1}
        fullScreen={fullScreen}
        mobile={mobile}
        pageName={"Kylian Ferron"}
        infos={[
          "French Engineering Student",
          "Full Stack Developper",
          "UX Enthusiast",
        ]}
        icon={
          <GiSwordman
            color="white"
            size={`${fullScreen ? 160 : 80}`}
            className={`${
              fullScreen ? "top-[22.5%]" : "top-[60%]"
            } absolute right-[5%] top-[22.5%] opacity-90`}
          />
        }
      />
      <DisplaySkills mobile={mobile} rotateValue={rotate.r1} />
      <Miscellaneous mobile={mobile} rotateValue={rotate.r1} />
      <Contact mobile={mobile} rotateValue={rotate.r1} />
      <Infos mobile={mobile} rotateValue={rotate.r1} />
    </>
  );
};

export default Home;
