import { Rotate } from "../../helpers/getRotation";
import Synthese from "../../commons/Synthese";
import DisplaySkills from "./DisplaySkills";

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
      />
      <DisplaySkills mobile={mobile} rotateValue={rotate.r1} />
      {/* <div
        className={`transition duration-2000 ease-out flex items-center decoration-black justify-center ${
          rotate.r1 !== "" && "translate-x-[200%]"
        } ${
          fullScreen ? " ml-[51.5%] mt-28 z-30" : "mx-[12.5%] mt-20"
        } w-[578px] h-[300px] absolute  
          bg-white border-8 border-medium-green`}
      >
        <span>In coming ...</span>
      </div> */}
    </>
  );
};

export default Home;
