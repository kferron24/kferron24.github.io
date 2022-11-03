export type Rotate = {
  r1: string;
  r2: string;
  r3: string;
  r4: string;
};

export const getRotation = (index: number) => {
  let r: Rotate = {
    r1: "",
    r2: "rotate-90-",
    r3: "rotate-180-",
    r4: "rotate-90",
  };
  switch (index) {
    case 1:
      r = {
        r1: "rotate-90",
        r2: "",
        r3: "rotate-90-",
        r4: "rotate-180",
      };
      break;
    case 2:
      r = {
        r2: "rotate-90",
        r3: "",
        r4: "rotate-270",
        r1: "rotate-180",
      };
      break;
    case 3:
      r = {
        r3: "rotate-90",
        r4: "rotate-360",
        r1: "rotate-270",
        r2: "rotate-180",
      };
      break;

    default:
      break;
  }
  return r;
};
