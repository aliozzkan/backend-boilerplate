import { Action, RoutingControllersOptions } from "routing-controllers";

const authorizationChecker: RoutingControllersOptions["authorizationChecker"] = async (
  action: Action,
  roles: string[]
) => {
  const token = action.request.headers["authorization"];
  if (!token) {
    return false;
  }

  const user = { id: 33333, name: "Ali Özkan", roles: ["ADMIN"] };
  if (user && !roles.length) return true;
  if (user && roles.find((role) => user.roles.indexOf(role) !== -1))
    return true;

  return false;
};

const currentUserChecker: RoutingControllersOptions["currentUserChecker"] = async (
  action: Action
) => {
  const token = action.request.headers["authorization"];
  return !!token
    ? { id: 33333, name: "Ali Özkan", roles: ["ADMIN"], token }
    : {};
};

export const Options = {
  authorizationChecker,
  currentUserChecker,
};
