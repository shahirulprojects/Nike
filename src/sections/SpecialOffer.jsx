import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      {/* max-xl:flex-col-reverse means that on large devices it is going to be in flex column but in reverse.Reverse here means that on large devices the ppictures are going to be on the left side but when the screen gets smaller,the pictures will appear below */}
      <div className="flex-1">
        <img
          src={offer}
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          {/* leading is used for the gap between lines of words (gap between the above words and the below words) */}
          {/* capitalize is used to capslock all starting letter for each word (kot) */}
          <span className="text-coral-red"> Special </span>
          Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          {/* info-text is a custom class */}
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          {" "}
          Navigate a realm of possibilities designed to fulfill your unique
          desires,surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop now" iconURL={arrowRight} />
          <Button
            label="Learn more"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
          {/* do not that Button is a component therefore these are self made properties,not the one yang memang sedia ada */}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
