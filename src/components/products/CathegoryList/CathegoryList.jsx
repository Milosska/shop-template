import PropTypes from "prop-types";

import { ProductCard } from "../ProductCard/ProductCard";
import { Container, List, StyledLink } from "./CathegoryList.styled";

export const CathegoryList = ({ cathegory }) => {
  const cathegoryURL = cathegory.name.toLowerCase().split(" ").join("-");

  return (
    <Container>
      <h3>{cathegory.name}</h3>
      <List>
        {cathegory.products.slice(0, 5).map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </List>
      <StyledLink to={`/${cathegoryURL}`}>Show more</StyledLink>
    </Container>
  );
};

CathegoryList.propTypes = {
  cathegory: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    products: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        cathegoryId: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
      })
    ),
  }),
};
