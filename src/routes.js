import Dashboard from "views/SportPage.js";
import LivePage from "views/LivePage";


var routes = [
    {
    path: "/sports",
    name: "Dashboard",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/home"
},
{
    path: "/live",
    name: "LivePage",
    icon: "tim-icons icon-chart-pie-36",
    component: LivePage,
    layout: "/home"
}
];
export default routes;