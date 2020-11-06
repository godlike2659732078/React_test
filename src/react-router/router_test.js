import Home from "../pages/home/home.js";
import Rules from "../pages/rules/rules";
import Forest from "../pages/forest/forest";
import ForestDetail from "../pages/forestDetail/forestDetail"

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
    path: "/rules",
    component: Rules,
  },
  {
    path: "/forest",
    component: Forest,
  },
  {
    path: "/forestDetail",
    component: ForestDetail,
  },
  
];
export default routes;
