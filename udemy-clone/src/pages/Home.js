import React from "react";
import Header from '../layouts/Header';
import Banner from '../layouts/Banner'
import Courses from "../components/Courses";
import Footer from '../layouts/Footer'
import Learns from "../components/Learns";
import Categories from "../components/Categories";
import Feed from "../components/Feed";

function Home() {
    return (
        <div>
            <Header />
            <Banner />
            <Courses />
            <Learns />
            <Categories />
            <Feed />
            <Footer />
        </div>
    )
}

export default Home;