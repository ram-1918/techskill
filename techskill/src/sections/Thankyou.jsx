import BaseSlide from "../components/BaseSlide";
import BaseHeader from "../components/BaseHeader";

function ThankYou({ ...props }) {
  return (
    <BaseSlide {...props}>
      <BaseHeader text="thank you" />
      <div
        className="
      h-[70%] rounded-xl shadow-xl bg-thankyou bg-cover bg-center bg-no-repeat
      desktop:w-[40%] 
      laptop:w-[50%] 
      tablet:w-[60%]  
      mobile:w-[90%] 
      small:w-[90%] 
      "
      ></div>
    </BaseSlide>
  );
}

export default ThankYou;
