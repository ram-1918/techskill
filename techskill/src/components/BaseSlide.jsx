const BaseSlide = ({ children }) => {
  return (
    <section className="mobile:h-96 h-[38rem] overflow-hidden rounded-xl bg-bg4 bg-center bg-no-repeat bg-cover space-y-5 py-2 px-4 flex flex-col justify-start items-center">
      {children}
    </section>
  );
};

export default BaseSlide;
