import "./ScrollToTop.scss";
import { FaArrowUp } from "react-icons/fa";

type ScrollToTopProps = {
  appRef: React.RefObject<HTMLDivElement>;
};

const ScrollToTop = ({ appRef }: ScrollToTopProps) => {
  return (
    <button
      className="scroll-to-top"
      onClick={() => appRef.current?.scrollIntoView({ behavior: "auto" })}>
      <FaArrowUp />
    </button>
  );
};

export default ScrollToTop;
