const BaseSlide = ({ children }) => {
  return (
    <section className="relative mobile:h-96 h-[40rem] w-[74rem] shadow-xl overflow-hidden rounded-xl bg-bg4 bg-center bg-no-repeat bg-cover space-y-1 py-0 px-4 flex flex-col justify-start items-center">
      {children}
    </section>
  );
};

export default BaseSlide;
