import PropTypes from "prop-types";
import { FiArrowLeft } from "react-icons/fi";
import { StyledLink } from "./LinkBtn.styled";

export const LinkBtn = ({ text, address, icon }) => {
  return (
    <>
      <StyledLink to={address}>
        {icon && <FiArrowLeft />}
        <span>{text}</span>
      </StyledLink>
    </>
  );
};

LinkBtn.propTypes = {
  icon: PropTypes.bool,
  text: PropTypes.string.isRequired,
  address: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
};
