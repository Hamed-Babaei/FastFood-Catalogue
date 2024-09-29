import CategoryCards from "@/components/templates/caregoryCards/CategoryCards";
import Footer from "@/components/templates/footer/Footer";
import Hero from "@/components/templates/hero/Hero";
import ItemCards from "@/components/templates/itemCards/ItemCards";
import Navbar from "@/components/templates/navbar/Navbar";
import TableModal from "@/components/templates/tableModal/TableModal";

export default function Home() {
  return (
    <>
      <Hero />
      <CategoryCards />
      <ItemCards />
      <Footer />
      <TableModal />
    </>
  );
}
