import { Rotate } from "../../helpers/getRotation";
import Topbar from "./Topbar";
import bodyBackGround from "../../Body.png";
import logo from "../../LOGO.png";

interface Props {
  rotate: Rotate;
  handleRotate: (index: number) => void;
  mobile: boolean;
}

const BackGround = (props: Props) => {
  const { rotate, handleRotate, mobile } = props;
  return (
    <>
      <Topbar rotate={rotate} handleRotate={handleRotate} mobile={mobile} />
      <img
        src={bodyBackGround}
        alt="bodyBackGround"
        className=" w-full h-[800px] absolute z-0 left-0 right-0"
      />
      <img
        src={logo}
        alt="logo"
        className={`transition duration-1000 ease-in-out absolute w-32 mt-24 ml-[13.35%] z-50 ${rotate.r1}`}
      />
    </>
  );
};

export default BackGround;
