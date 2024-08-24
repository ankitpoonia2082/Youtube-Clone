import Sidebar from "./bodyComponents/Sidebar";
import { Outlet } from "react-router-dom";

const Body = () => {
    return (
        <div className="grid-flow-col">
            <div className="grid-cols-2">
                <Sidebar />
            </div>

            <div className="grid-cols-10">
                <Outlet />
            </div>
        </div>
    );
};

export default Body;
