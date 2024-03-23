import Button from "../components/Button";
import { arrowRight } from "../assets/icons";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      {/* min-h-screen means that it will take the entire height of the screen, w- full means that that it will take the entire width of the screen,max-container is a custom class */}
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p>Our Summer Collection</p>
        <h1>
          <span>The New Arrival</span>
          <br />
          {/* the br tag is because we want to enter new line */}
          <span>Nike </span>
          Shoes
        </h1>
        <p>
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="Shop now" iconUrl={arrowRight} />
      </div>
    </section>
  );
};

export default Hero;
