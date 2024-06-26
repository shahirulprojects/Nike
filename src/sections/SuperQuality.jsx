import { shoe8 } from "../assets/images";
import Button from "../components/Button";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      {/* justify-between is used because we want to have a space on left and right */}
      {/* max-container is used to ensure that everything is contained within our full width */}

      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          {/* leading is used for the gap between lines of words (gap between the above words and the below words) */}
          {/* capitalize is used to capslock all starting letter for each word (kot) */}
          We Provide You
          <span className="text-coral-red"> Super Quality </span>
          Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          {/* info-text is a custom class */}
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className="mt-11">
          <Button label="View details" />
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <img
          src={shoe8}
          alt="shoe8"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
