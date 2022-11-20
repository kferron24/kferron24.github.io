interface Props {
  mobile: boolean;
  rotateValue: string;
}

const Infos = (props: Props) => {
  const { mobile, rotateValue } = props;
  return (
    <div
      className={`absolute italic w-9/12 ${
        mobile ? "text-justify mt-[1500px]" : "text-center mt-[1825px]"
      } text-center mx-[12.5%] transition duration-2000 ${
        rotateValue !== "" && "translate-x-[100%] opacity-0"
      }`}
    >
      This site has been designed to be totally responsive. It was created in
      React and Tailwind. It uses icons from ReactIcons and designs made on
      Figma.
    </div>
  );
};

export default Infos;
