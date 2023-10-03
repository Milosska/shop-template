import { cathegories } from "@/data/cathegories";
import { CathegoryList } from "@/components/products/CathegoryList/CathegoryList";

import { StyledList } from "./HomePage.styled";

const HomePage = () => {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Wellcome to the Shop Template!</h1>
      <section>
        <h2>Cathegories</h2>
        <StyledList>
          {cathegories.map((cathegory) => (
            <CathegoryList key={cathegory.id} cathegory={cathegory} />
          ))}
        </StyledList>
      </section>
    </>
  );
};

export default HomePage;
