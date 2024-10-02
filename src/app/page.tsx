import Footer from "@/components/templates/footer/Footer";
import Hero from "@/components/templates/hero/Hero";
import Products, {
  ProductMenuType,
  ProductsType,
} from "@/components/templates/products/Products";

import axios from "axios";

interface ProductsPageProps {
  products: ProductsType[];
}

const Home = async () => {
  let products: ProductsType[] = [];

  try {
    const response = await axios.get(
      "https://apicofee.limofood.ir/api/v1/product/get_category_all_with_branch"
    );
    products = response.data.data;
  } catch (error) {
    console.error("Error fetching products:", error);
  }

  return (
    <>
      <Hero />
      {/* <CategoryCards products={products} /> */}
      <Products allProducts={products} />
      <Footer />
    </>
  );
};

export default Home;
