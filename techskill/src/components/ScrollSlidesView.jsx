const ScrollsSlidesView = ({slides}) => {
    return (
    //   <div className="px-[15%] py-10 space-y-5 select-none">
    <>
        {slides.map(slide => slide)}
      </>
    );
  };

export default ScrollsSlidesView;