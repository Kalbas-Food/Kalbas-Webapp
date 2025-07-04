import {type RouteConfig, index, route} from "@react-router/dev/routes";

export default [
    // index("routes/HomeRoute.tsx"),
    // index("routes/DashboardRoute.tsx"),
    route("/", "routes/DashboardRoute.tsx", [
        index("routes/HomeRoute.tsx"),
        route("restaurants/:restaurantId", "routes/RestaurantRoute.tsx"),
        route("account", "routes/AccountRoute.tsx"),
        route("invite-friends", "routes/InviteFriendsRoute.tsx"),
    ]),
    route("auth/login", "routes/LoginRoute.tsx"),
    route("auth/signup", "routes/SignUpRoute.tsx"),
] satisfies RouteConfig;
