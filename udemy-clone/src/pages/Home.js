import React from "react";
import Banner from '../layouts/Banner'
import Courses from "../components/Courses";
import Learns from "../components/Learns";
import Categories from "../components/Categories";
import Feed from "../components/Feed";

function Home() {
    return (
        <div>
            <Banner />
            <Courses />
            <Learns />
            <Categories />
            <Feed />
        </div>
    )
}

export default Home;