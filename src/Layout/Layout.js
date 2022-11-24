import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";
// import Pagination from "../Pages/Pagination";

import '../global.css'
import RightSide from "../components/RightSide/RightSide";



const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Header />
            <Sidebar />
            <Footer />
            {/* <Pagination /> */}
            {children}
        </div>
    );
};
export default Layout;