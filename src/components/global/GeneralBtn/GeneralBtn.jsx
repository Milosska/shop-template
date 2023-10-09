import PropTypes from "prop-types";
import { StyledBtn } from "./GeneralBtn.styled";

export const GeneralBtn = ({ text, callback, icon }) => {
  return (
    <>
      <StyledBtn onClick={callback}>
        {icon}
        <span>{text}</span>
      </StyledBtn>
    </>
  );
};

GeneralBtn.propTypes = {
  text: PropTypes.string,
  callback: PropTypes.func.isRequired,
  icon: PropTypes.node,
};
