import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";

import prodPh from "@/assets/images/placeholders/product-card-min.jpg";
import { Card, DataThumb, Title } from "./ProductCard.styled";

export const ProductCard = ({ item }) => {
  const location = useLocation();

  return (
    <Card>
      <Link to={`/${item.cathegoryId}/${item.id}`} state={{ from: location }}>
        <img src={prodPh} alt={item.name} />
        <DataThumb>
          <Title>{item.name}</Title>
          <p>Price: {item.price}$</p>
        </DataThumb>
      </Link>
    </Card>
  );
};

ProductCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    cathegoryId: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
  }),
};
