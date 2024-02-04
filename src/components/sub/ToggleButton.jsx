import CancelIcon from "../../icons/CancelIcon";
import Hamburger from "../../icons/Hamburger";

const ToggleButton = ({ open, setOpen }) => {
  return (
    <button
      onClick={() => setOpen((prev) => !prev)}
      className="h-[40px] rounded-full fixed top-3 right-5
    transition duration-300 ease-in-out transform 
    bg-transparent border-none glow  hover:animate-slowspin

    "
    >
      {!open ? <Hamburger /> : <CancelIcon />}
    </button>
  );
};

export default ToggleButton;
