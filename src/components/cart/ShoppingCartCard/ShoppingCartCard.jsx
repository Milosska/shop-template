import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import { FaPlus, FaMinus } from "react-icons/fa";

import { useDispatch } from "react-redux";
import { changeProductInCart } from "@/redux/cart/cartSlice.js";

import prodPh from "@/assets/images/placeholders/product-card-min.jpg";

import { GeneralBtn } from "@/components/global/GeneralBtn/GeneralBtn";
import {
  Card,
  StyledLinkTitle,
  StyledImg,
  QuantityThumb,
  StyledQuantityInput,
  StyledPrice,
  StyledDeletBtn,
} from "./ShoppingCartCard.styled";

export const ShoppingCartCard = ({ item }) => {
  const [quantity, setQuantity] = useState(1);
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeProductInCart({ id: item.id, quantity }));
  }, [quantity, item.id, dispatch]);

  const handleIncrement = () => {
    setQuantity((prevState) => prevState + 1);
  };

  const handleDecrement = () => {
    if (quantity <= 1) {
      return;
    }
    setQuantity((prevState) => prevState - 1);
  };

  const handleInputChange = (e) => {
    setQuantity(Number(e.target.value));
  };

  const handleDelete = () => {
    console.log("Delete!");
  };

  return (
    <Card>
      <StyledLinkTitle
        to={`/${item.cathegoryId}/${item.id}`}
        state={{ from: location }}
      >
        {item.name}
      </StyledLinkTitle>
      <StyledImg src={prodPh} alt={item.name} width={"150px"} />

      <QuantityThumb>
        <GeneralBtn icon={<FaMinus />} callback={handleDecrement} />
        <StyledQuantityInput
          type="number"
          name="quantity"
          min="0"
          max="999"
          step="1"
          value={quantity.toString()}
          onChange={handleInputChange}
        />
        <GeneralBtn icon={<FaPlus />} callback={handleIncrement} />
      </QuantityThumb>

      <StyledPrice>${item.price * quantity}</StyledPrice>
      <StyledDeletBtn onClick={handleDelete}>
        <AiFillDelete />
        Delete
      </StyledDeletBtn>
    </Card>
  );
};

ShoppingCartCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    cathegoryId: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
  }),
};
