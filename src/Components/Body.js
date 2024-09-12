import Sidebar from "./bodyComponents/Sidebar";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const Body = () => {
    return (
        <div className="">
            <Sidebar />
            <Header />

            <div className="">
                <Outlet />
            </div>
        </div>
    );
};

export default Body;
