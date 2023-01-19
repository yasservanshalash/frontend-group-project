import Slider from "../../components/slider/Slider";
import PopularCategories from "../../components/popularCategories/PopularCategories";
import PopularBrands from "../../components/popularBrands/PopularBrands";
// import ProductContent from "../../components/productContent/ProductContent";
const Home = () => {
  return (
    <>
      <Slider />
      <PopularCategories />
      <PopularBrands />
      {/* <ProductContent /> */}
    </>
  );
};

export default Home;
