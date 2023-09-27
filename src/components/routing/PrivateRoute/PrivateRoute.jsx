import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ component }) => {
  const isLoggedIn = false;

  return isLoggedIn ? component : <Navigate to="/login" replace />;
};

PrivateRoute.propTypes = {
  component: PropTypes.object.isRequired,
};