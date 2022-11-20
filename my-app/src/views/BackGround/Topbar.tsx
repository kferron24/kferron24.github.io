import { Rotate } from "../../helpers/getRotation";

interface Props {
  rotate: Rotate;
  handleRotate: (index: number) => void;
  mobile: boolean;
}

const Topbar = (props: Props) => {
  const { rotate, handleRotate, mobile } = props;
  const topBarList: string[] = [
    "Home",
    "Education",
    "Work Experience",
    "Academic Project",
  ];
  type ObjectKey = keyof typeof rotate;
  return (
    <div className="scrollTopbar flex snap-x topbarFull:justify-around overflow-x-auto overflow-y-hidden items-center bg-dark-green h-24 text-3xl font-normal">
      {topBarList.map((t, index) => {
        const r = `r${index + 1}` as ObjectKey;

        return (
          <div
            className={`hover:border-[#5A786F] cursor-pointer hover:border-4  ${
              (rotate[r] === "" || rotate[r] === "rotate-360") &&
              "bg-medium-green "
            } z-50 uppercase h-24 ${
              mobile ? "min-w-[200px]" : "min-w-[324px]"
            } w-1/4  justify-center flex items-center px-5 shrink-0 snap-center`}
            key={t}
            onClick={() => handleRotate(index)}
          >
            <p className="text-center font-medium">{t}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Topbar;
