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
      {/* <div className="flex flex-col items-center justify-center w-full h-full">
        <span className="text-[15rem] font-bold font-[cursive] text-transparent bg-clip-text bg-gradient-to-r from-green-700 via-orange-500 to-sky-600">Thank you!</span>
      </div> */}
    </BaseSlide>
  );
}

export default ThankYou;
