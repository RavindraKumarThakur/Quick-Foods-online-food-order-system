import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import AppDownload from "./component/AppDownload/AppDownload";
import "./Layout.css";

function Layout(){
    return(
        <>
        <Header />
        <Outlet />
        <AppDownload/>
        <Footer />
        </>
    )
}

export default Layout