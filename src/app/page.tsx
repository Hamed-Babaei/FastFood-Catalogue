import Footer from "@/components/templates/footer/Footer";
import Hero from "@/components/templates/hero/Hero";
import Products from "@/components/templates/products/Products";

import axios from "axios";
interface Product {
  id: number;
  name: string;
  price: number;
  // هر خصوصیت دیگری که در لیست محصولات موجود است
}

interface ProductsPageProps {
  products: Product[];
}

const Home = async () => {
  let products: Product[] = [];

  try {
    const response = await axios.get(
      "https://apicofee.limofood.ir/api/v1/product/get_category_all_with_branch"
    );
    products = response.data.data;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
  console.log("products =>", products);

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
