import BaseSlide from "../components/BaseSlide";
import BaseHeader from "../components/BaseHeader";
import { colors, heading_font_size } from "../Base";

function ThankYou({ ...props }) {
  return (
    <BaseSlide {...props}>
      {/* <BaseHeader text="thank you" /> */}
      {/* <div
        className="
      h-[70%] rounded-3xl shadow-xl bg-thankyou bg-cover bg-center bg-no-repeat
      w-[60%]
      "
      ></div> */}
      <div className="flex flex-col items-center justify-center w-full h-full">
        <span className={`${heading_font_size.main} font-bold font-[cursive] ${colors.textgradient}`}>Thank you!</span>
      </div>
    </BaseSlide>
  );
}

export default ThankYou;
