import {
	useRoutes
} from "react-router-dom";
import { RouteConfig } from "./Routing/RouteConfig";

const App = () => {
    let routing = useRoutes(RouteConfig);
    return routing;
}

export default App

