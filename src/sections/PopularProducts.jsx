import PopularProductCard from "../components/PopularProductCard";
import { products } from "../constants";

const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      {/* the id is for scrolling,like when the user click the popular products text,it will scroll to the popular products section */}
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          Our <span className="text-coral-red">Popular</span> Products
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
          Experience top-notch quality and style with our sought-after
          selections.Discover a world of comfort, design, and value
        </p>
      </div>

      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-5 gap-14">
        {/* grid-cols- means that for each screen sizes it will have how many grids */}
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}{" "}
        {/* the key is product name and we will spread everything else from the product (meaning that we pass all of the attributes of the product) */}
      </div>
    </section>
  );
};

export default PopularProducts;
