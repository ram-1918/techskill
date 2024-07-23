const BaseBGImage = ({image, size="w-32 h-32"}) => {
    return (
      <div className={`${image} ${size} bg-cover bg-no-repeat rounded-full`}></div>
    );
  };
  
  export default BaseBGImage;