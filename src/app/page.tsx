import dynamic from "next/dynamic";
import axios from "axios";
import { ProductsType } from "@/components/templates/products/Products";
const Loading = () => (
  <div className="!w-full !h-full flex items-center justify-center">
    <span className="loading loading-dots loading-lg flex items-center justify-center"></span>
  </div>
);

// Lazy loading components
const Footer = dynamic(() => import("@/components/templates/footer/Footer"));
const Hero = dynamic(() => import("@/components/templates/hero/Hero"));
const Products = dynamic(
  () => import("@/components/templates/products/Products"),
  { ssr: false, loading: Loading }
);

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
      <Products allProducts={products} />
      <Footer />
    </>
  );
};

export default Home;
