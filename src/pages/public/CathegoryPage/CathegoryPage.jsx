import { useLocation } from "react-router-dom";
import { ProductList } from "@/components/products/ProductList/ProductList";

const CathegoryPage = () => {
  const location = useLocation();
  const cathegoryName = location.pathname.slice(1).split("-").join(" ");

  return (
    <>
      <h2 style={{ textTransform: "capitalize" }}>{cathegoryName}</h2>
      <ProductList />
    </>
  );
};

export default CathegoryPage;
