import Sidebar from "./bodyComponents/Sidebar";
import { Outlet } from "react-router-dom";

const Body = () => {
    return (
        <div className="">
            <Sidebar />

            <div className="h-screen">
                <Outlet />
            </div>
        </div>
    );
};

export default Body;
