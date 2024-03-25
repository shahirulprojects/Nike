const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {
  const handleClick = () => {
    if (bigShoeImg !== imgURL.bigShoe) {
      changeBigShoeImage(imgURL.bigShoe); // if the current selected shoe is not the one being displayed right now,we will change it so that it will display the current selected shoe
    }
  };
  return (
    <div
      className={`border-2 rounded-xl
     ${
       bigShoeImg === imgURL.bigShoe ? "border-coral-red" : "border-transparent" // this is for the border of the selected shoe
     } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img
          src={imgURL.thumbnail}
          alt="shoe collection"
          width={127}
          height={103}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ShoeCard;
