import {type RouteConfig, index, route} from "@react-router/dev/routes";

export default [
    index("routes/HomeRoute.tsx"),
    route("auth/login", "routes/LoginRoute.tsx"),
    route("auth/signup", "routes/SignUpRoute.tsx"),
] satisfies RouteConfig;
