import { contacts } from "../../commons/logos";

type Props = {
  mobile: boolean;
  rotateValue: string;
};

const Contact = (props: Props) => {
  const { mobile, rotateValue } = props;
  return (
    <div
      className={`absolute w-9/12 mx-[12.5%] flex  align-middle justify-between ${
        mobile ? "mt-[1200px] flex-col" : "mt-[1725px]"
      } transition duration-2000 ${
        rotateValue !== "" && "translate-x-[100%] opacity-0"
      }`}
    >
      {contacts.map((contact) => {
        return (
          <div className={`${mobile ? "" : "flex align-middle"} `}>
            <img
              src={`/${contact.img}.png`}
              alt={`${contact.name}`}
              className="w-16 mx-auto"
            />
            <p
              className={`text-white text-center my-auto ${
                mobile ? "text-xs" : "text-xl"
              } text-xl mx-[10px]`}
            >
              {contact.name}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Contact;
