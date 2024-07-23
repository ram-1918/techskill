const BaseSlide = ({children}) => {
    return (
      <section className="h-[38rem] overflow-hidden rounded-xl bg-bg4 bg-center bg-no-repeat bg-cover space-y-5 py-2 px-4 flex flex-col justify-center items-end">
        {children}
      </section>
    );
  };

  export default BaseSlide;