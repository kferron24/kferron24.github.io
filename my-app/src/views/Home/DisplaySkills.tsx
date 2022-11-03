import { useState } from "react";
import { languages, logosMain, logosOther } from "./logos";
import Skills from "./Skills";

type Props = {
  mobile: boolean;
  rotateValue: string;
};

const DisplaySkills = (props: Props) => {
  const { mobile, rotateValue } = props;
  const skills: string[] = ["Main Skills", "Others Skills", "Languages"];
  const [skillsDisplay, setSkillsDisplay] = useState<number>(0);

  return (
    <div
      className={`transition duration-1000 ${
        rotateValue !== "" && "translate-x-[100%] opacity-0"
      }`}
    >
      <div
        className={` flex flex-col absolute justify-around justify-items-center items-center rounded-t-lg bg-medium-green h-96 ${
          mobile ? "w-36 mt-[380px]" : "w-48 mt-[440px]"
        } text-3xl text-white font-normal ml-[12.5%]  z-30`}
      >
        {skills.map((skill, index) => {
          return (
            <div
              className={`hover:border-2 hover:border-[#323E45] ${
                skillsDisplay === Number(index) &&
                "bg-regular-green border-2 border-[#323E45]"
              } items-center justify-center w-full z-50 uppercase h-32 first:rounded-tl-lg ${
                mobile ? "text-xl" : "text-3xl"
              } flex  px-5 shrink-0`}
              onClick={() => setSkillsDisplay(Number(index))}
            >
              {skill}
            </div>
          );
        })}
      </div>
      {skillsDisplay === 0 && <Skills logos={logosMain} mobile={mobile} />}
      {skillsDisplay === 1 && <Skills logos={logosOther} mobile={mobile} />}
      {skillsDisplay === 2 && <Skills logos={languages} mobile={mobile} />}
    </div>
  );
};

export default DisplaySkills;
