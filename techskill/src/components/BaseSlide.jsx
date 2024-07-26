const BaseSlide = ({ children }) => {
  // mobile:h-96 h-[40rem] w-[74rem] max-w-[74rem] mobile:w-[24rem]

  return (
    <section className="relative aspect-video mobile:aspect-square bg-red-100 shadow-xl overflow-hidden rounded-xl  py-2 px-0 bg-bg12 bg-center bg-no-repeat bg-cover space-y-1 flex flex-col justify-start items-center">
      {children}
    </section>
  );
};

export default BaseSlide;
