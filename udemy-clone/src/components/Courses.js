import React from "react";
import { useEffect,useState } from "react";
import Course from "./Course";
import { data } from "../service/data";

function Courses(){
    const [courses, setCourses]=useState([]);
    useEffect(()=>{
        data().then(items=>{
            setCourses(items)
        })
    },[])
    return(
        <div className="flex flex-col items-start mx-8 space-y-3 mt-14 mb-8">
            <h2 className="text-4xl font-bold">A broad selection of courses</h2>
            <h3 className="text-xl">Choose from 183,000 online video courses with new addition published every month</h3>
            <div className="text-xs lg:text-xl flex space-x-4 ,l-1 font-bold text-gray-500 cursor-pointer">
                <h3 className="text-black">Python</h3>
                <h3>Excel</h3>
                <h3>Web Development</h3>
                <h3>JavaScript</h3>
                <h3>Data Science</h3>
                <h3>AWS Certification</h3>
                <h3>Drawing</h3>
            </div>
            <div className="text-left w-full border border-gray-300 p-7">
                <h2>Expand your career opportunities with Python</h2>
                <h3>
                    Below you can see some of my project already on my Youtube channel, and also what I'm preparing guys. Subcribe to the channel and click the Like button, thank for the support.
                </h3>
                <button className="border border-black font-bold text-sm p-2 mt-4 mb-8">Explore Python</button>
                <div className="flex gap-5 flex-wrap lg:flex-none items-center justify-center">
                    {courses.map(item =>
                        <div style={{width:"210px"}} className="h-60 w-50" key={item.id}>
                            <Course item={item}/>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
export default Courses;