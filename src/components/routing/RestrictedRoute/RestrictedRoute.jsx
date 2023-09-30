import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";

import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "@/redux/selectors";

export const RestrictedRoute = ({ component }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? <Navigate to="/profile" replace /> : component;
};

RestrictedRoute.propTypes = {
  component: PropTypes.object.isRequired,
};
