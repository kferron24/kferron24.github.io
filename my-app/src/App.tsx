import "@fontsource/aileron";

import React, { useEffect, useState } from "react";
import { Rotate, getRotation } from "./helpers/getRotation";

import Academic from "./views/Academic";
import BackGround from "./views/BackGround";
import Education from "./views/Education";
import Home from "./views/Home";
import Work from "./views/Work";

const App = () => {
  const [rotate, useRotate] = useState<Rotate>({
    r1: "",
    r2: "rotate-90-",
    r3: "rotate-180-",
    r4: "rotate-270-",
  });

  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const updateWindowDimensions = () => {
      const newWidth = window.innerWidth;
      setWidth(newWidth);
      const newHeight = window.innerHeight;
      setHeight(newHeight);
    };

    window.addEventListener("resize", updateWindowDimensions);

    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, []);

  const fullScreen = width <= 1530 || height <= 550 ? false : true;
  const mobile = width <= 600 ? true : false;

  const HandleRotate = (index: number) => {
    const r: Rotate = getRotation(index);
    useRotate(r);
  };

  return (
    <div>
      <BackGround rotate={rotate} handleRotate={HandleRotate} mobile={mobile} />
      <Home rotate={rotate} fullScreen={fullScreen} mobile={mobile} />
      <Education rotate={rotate} fullScreen={fullScreen} mobile={mobile} />
      <Work rotate={rotate} fullScreen={fullScreen} mobile={mobile} />
      <Academic rotate={rotate} fullScreen={fullScreen} mobile={mobile} />
    </div>
  );
};

export default App;
