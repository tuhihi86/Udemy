import React from "react";
import { useEffect,useState } from "react";
import { learn } from "../service/data";
import Learn from "./Learn";
import {MdChevronLeft,MdChevronRight} from 'react-icons/md';
import {  NavLink } from "react-router-dom";

function Learns() {
    const sliderLeft = ()=> {
        var slider =document.getElementById('slider1')
        slider.scrollLeft =slider.scrollLeft-500
    };
    const sliderRight = ()=> {
        var slider =document.getElementById('slider1')
        slider.scrollLeft =slider.scrollLeft+500
    }
    const [learns, setLearn]=useState([]);
    useEffect(()=>{
        learn().then(items=>{
            setLearn(items)
        })
    },[])
    return (
        <div>
            <div style={{ background: "#f7f9fa", height: "88px", width: "100%", marginTop: "64px", display: 'flex', alignItems: 'center' }}>
                <div style={{ height: "40px", width: '100%', padding: "0px 24px" }}>
                    <div style={{ justifyContent: 'space-between', display: 'flex' }}>
                        <div style={{ height: "40px", width: "344px", display: "flex", alignItems: "center" }}>
                            <img style={{ height: "40px", width: "40px" }} src="https://png.pngitem.com/pimgs/s/255-2554901_play-icon-youtube-play-button-on-video-hd.png" alt="hihi" />
                            <h2 style={{ fontSize: "14px", fontWeight: 700, textAlign: "left", marginLeft: "10px" }}>Learn in-demand skills with over 204,000 video courses</h2>
                        </div>
                        <div style={{ height: "40px", width: "344px", display: "flex", alignItems: "center" }}>
                            <img style={{ height: "40px", width: "40px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT99S8Ea-AxMpYAja6Jmw411fiHaCrdi5kaaX_5EDTi3UmYMKVbVD01_N70RHKHhteWhUk&usqp=CAU" alt="hihi" />
                            <h2 style={{ fontSize: "14px", fontWeight: 700, textAlign: "left", marginLeft: "10px" }}>Choose courses taught by real-world experts</h2>
                        </div>
                        <div style={{ height: "40px", width: "344px", display: "flex", alignItems: "center" }}>
                            <img style={{ height: "40px", width: "40px" }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Infinity_in_circle.svg/768px-Infinity_in_circle.svg.png" alt="hihi" />
                            <h2 style={{ fontSize: "14px", fontWeight: 700, textAlign: "left", marginLeft: "10px" }}>Learn at your own pace, with lifetime access on mobile and desktop</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-start mx-8 space-y-3" style={{marginTop:"64px",marginBottom:"96px"}}>
                <div >
                    <h2 className="text-2xl font-bold">Students are viewing</h2>
                </div>
                <div className="relative flex items-center w-full">
                    <MdChevronLeft className="opacity-50 cursor-pointer hover:opacity-100 mb-24" onClick={sliderLeft} size={40}/>
                    <div id="slider1" className="scrollbar-hide gap-5 items-center flex w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth duration-300">
                    {learns.map(item =>
                        <div style={{width:"220px"}} className="inline-block" key={item.id}>
                            <NavLink to="courseDetail">
                            <Learn item={item}/>
                            </NavLink>
                        </div>
                        )}
                </div>
                <MdChevronRight className="opacity-50 cursor-pointer hover:opacity-100 mb-24" onClick={sliderRight} size={40}/>
                </div>
            </div>
        </div>
    )
}
export default Learns;