import { ABOUT_ROUTE, BASE_ROUTE, CONTACT_ROUTE, HOME_ROUTE, PROJECT_ROUTE } from "../constants/routeConstants";

export const getRoutes = (route) => {
  let selectedRoute = "/";
  switch (route) {
    case HOME_ROUTE:
      selectedRoute = "/";
      break;
    case ABOUT_ROUTE:
      selectedRoute = "/about";
      break;
    case PROJECT_ROUTE:
      selectedRoute = "/projects";
      break;
    case CONTACT_ROUTE:
      selectedRoute = "/contact";
      break;
    default:
      break;
  }
  if (process.env.NODE_ENV === "production") {
    return BASE_ROUTE + selectedRoute;
  }
  return selectedRoute;
};
