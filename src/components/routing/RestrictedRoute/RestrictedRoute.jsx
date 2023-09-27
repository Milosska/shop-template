import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";

export const RestrictedRoute = ({ component }) => {
  const isLoggedIn = false;

  return isLoggedIn ? <Navigate to="/profile" replace /> : component;
};

RestrictedRoute.propTypes = {
  component: PropTypes.object.isRequired,
};
