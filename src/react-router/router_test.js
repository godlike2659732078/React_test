import Home from "../pages/home/home";
import Shop from "../pages/Shop/shop";
import User from "../pages/User/user";

let routes = [
  {
    path: "/",
    component: Home,
    exact: true,
   
  },
  {
    path: "/home",
    component: Home,
   
  },
  {
    path: "/shop",
    component: Shop,
  },
  {
    path: "/user",
    component: User,
  },
  
];
export default routes;
