import PropTypes from "prop-types";
import { StyledLink } from "./LinkBtn.styled";

export const LinkBtn = ({ text, address }) => {
  return (
    <>
      <StyledLink to={address}>{text}</StyledLink>
    </>
  );
};

LinkBtn.propTypes = {
  text: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
};
