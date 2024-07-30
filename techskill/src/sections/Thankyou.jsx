import BaseSlide from "../components/BaseSlide";
import BaseHeader from "../components/BaseHeader";

function ThankYou({ ...props }) {
  return (
    <BaseSlide {...props}>
      <BaseHeader text="thank you" />
      <div
        className="
      h-[70%] rounded-3xl shadow-xl bg-thankyou bg-cover bg-center bg-no-repeat
      w-[60%]
      "
      ></div>
    </BaseSlide>
  );
}

export default ThankYou;
