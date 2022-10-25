import React from "react";
import { data } from "../service/data";
import { useEffect, useState } from "react";
import { StarIcon } from "@heroicons/react/solid"

const AllCourses = () => {
    const [clicked, setClicked] = useState(1);
    const [clicked1, setClicked1] = useState(1);
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        data().then(items => {
            setCourses(items)
        })
    }, [])
    return (
        <div className="p-6 mt-12">
            <div className="mb-4 h-28 text-left">
                <div className="mb-4 h-7">
                    <h2 className="text-2xl font-bold">All JavaScript courses</h2>
                </div>
                <p className="h-20 mt-4 w-[800px]">
                    Join more than 12 million learners and train up on JavaScript on Udemy. Choose from a wide range of top-rated JavaScript courses. From back-end development to app or website building, we’ve got you covered. Our real-world experts can lead you through hands-on projects to apply your skills.
                </p>
            </div>
            <div className="mb-6 h-[66px] w-[1258px] border border-gray-300 flex justify-center items-center">
                <div className="h-8 p-4 border border-white w-[1224px] flex justify-center items-center">
                    <img src="https://e7.pngegg.com/pngimages/620/983/png-clipart-exclamation-mark-computer-icons-question-mark-interjection-word-term-miscellaneous-word-thumbnail.png" alt="hihi" className="h-8 w-8" />
                    <div className="h-8 w-[1176px] ml-4 font-bold text-left flex items-center">Not sure? All courses have a 30-day money-back guarantee</div>
                </div>
            </div>
            <div className="mb-6 h-[62px] w-[1258px] flex flex-row justify-between">
                <div className="w-[285px] h-[62px] flex flex-row">
                    <div
                        onClick={
                            () => {
                                setClicked(!clicked)
                            }
                        }
                        className="h-[62px] w-[89px] px-3 mx-1 border border-black flex flex-row items-center cursor-pointer hover:bg-gray-100">
                        <img src="https://cdn.iconscout.com/icon/free/png-256/filter-list-1779906-1518558.png" alt="" className="w-5 h-5" />
                        <h3 className="font-bold ml-1">Filter</h3>
                    </div>
                    <div className="h-[62px] w-[180px] mx-1 border border-black flex flex-row justify-around items-center cursor-pointer hover:bg-gray-100">
                        <div className="flex flex-col text-left">
                            <h2 className="text-xs font-bold">Sort by</h2>
                            <h2>Most Popular</h2>
                        </div>
                        <div className="flex items-center justify-center ">
                            <img src="https://static.thenounproject.com/png/1123247-200.png" alt="" className="w-5 h-5" />
                        </div>
                    </div>
                </div>
                <div className="w-[92px] flex items-center">
                    <p className="font-bold text-gray-600 text-[15px]">1,106 results</p>
                </div>
            </div>
            <div className={` w-[1258px] flex flex-row ${clicked ? "" : "tran"}`}>
                <div className={` w-[280px] mr-4 ${clicked ? "" : "filterne"}`}>
                    <div className="border border-l-0 border-r-0 w-[240px]">
                        <div className="flex flex-row h-[55px] w-[240px] items-center justify-between">
                            <h2 className="font-bold text-[19px]">Ratings</h2>
                            <div className="flex items-center justify-center cursor-pointer" onClick={
                            () => {
                                setClicked1(!clicked1)
                            }
                        }>
                                <img src="https://static.thenounproject.com/png/1123247-200.png" alt="" className="w-5 h-5" />
                            </div>
                        </div>
                        <div className={`${clicked1 ? "h-[144px] w-[240px]" : "h-0 w-[240px] hidden"}`}>
                            <div className="flex items-center mb-4">
                                <input id="default-checkbox" type="radio" value="" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label for="default-checkbox" className="ml-2 text-sm font-medium flex flex-row items-center text-gray-900 dark:text-gray-300">
                                    <StarIcon className="w-4 text-[#db9b0e]" />
                                    <StarIcon className="w-4 text-[#db9b0e]" />
                                    <StarIcon className="w-4 text-[#db9b0e]" />
                                    <StarIcon className="w-4 text-[#db9b0e]" />
                                    <img src="https://spng.pngfind.com/pngs/s/536-5360734_half-star-icon-white-hd-png-download.png" alt="" className="h-[12px] w-[12px]" />
                                    4.5 &amp; up (434)</label>
                            </div>
                            <div className="flex items-center mb-4">
                                <input checked="" id="checked-checkbox" type="radio" value="" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label for="checked-checkbox" className="ml-2 text-sm font-medium flex flex-row items-center text-gray-900 dark:text-gray-300">
                                    <StarIcon className="w-4 text-[#db9b0e]" />
                                    <StarIcon className="w-4 text-[#db9b0e]" />
                                    <StarIcon className="w-4 text-[#db9b0e]" />
                                    <StarIcon className="w-4 text-[#db9b0e]" />
                                    <img src="https://toppng.com/uploads/preview/yellow-star-border-frame-png-11546682563dxn24bwljg.png" alt="" className="h-[12px] w-[12px]" />
                                    4.0 &amp; up (796)</label>
                            </div>
                            <div className="flex items-center mb-4">
                                <input checked="" id="checked-checkbox" type="radio" value="" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label for="checked-checkbox" className="ml-2 text-sm font-medium flex flex-row items-center text-gray-900 dark:text-gray-300">
                                    <StarIcon className="w-4 text-[#db9b0e]" />
                                    <StarIcon className="w-4 text-[#db9b0e]" />
                                    <StarIcon className="w-4 text-[#db9b0e]" />
                                    <img src="https://spng.pngfind.com/pngs/s/536-5360734_half-star-icon-white-hd-png-download.png" alt="" className="h-[12px] w-[12px]" />
                                    <img src="https://toppng.com/uploads/preview/yellow-star-border-frame-png-11546682563dxn24bwljg.png" alt="" className="h-[12px] w-[12px]" />
                                    3.5 &amp; up (977)</label>
                            </div>
                            <div className="flex items-center mb-4">
                                <input checked="" id="checked-checkbox" type="radio" value="" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label for="checked-checkbox" className="ml-2 text-sm font-medium flex flex-row items-center text-gray-900 dark:text-gray-300">
                                    <StarIcon className="w-4 text-[#db9b0e]" />
                                    <StarIcon className="w-4 text-[#db9b0e]" />
                                    <StarIcon className="w-4 text-[#db9b0e]" />
                                    <img src="https://toppng.com/uploads/preview/yellow-star-border-frame-png-11546682563dxn24bwljg.png" alt="" className="h-[12px] w-[12px]" />
                                    <img src="https://toppng.com/uploads/preview/yellow-star-border-frame-png-11546682563dxn24bwljg.png" alt="" className="h-[12px] w-[12px]" />
                                    3.0 &amp; up (1,021)</label>
                            </div>

                        </div>
                    </div>
                    <div className="border border-l-0 border-r-0 border-t-0 h-[55px] py-4 w-[240px] flex items-center justify-between">
                        <h2 className="font-bold text-[19px]">Video Duration</h2>
                        <div className="flex items-center justify-center cursor-pointer ">
                            <img src="https://static.thenounproject.com/png/1123247-200.png" alt="" className="w-5 h-5" />
                        </div>
                    </div>
                    <div className="border border-l-0 border-r-0 border-t-0 h-[55px] py-4 w-[240px] flex items-center justify-between">
                        <h2 className="font-bold text-[19px]">Topic</h2>
                        <div className="flex items-center justify-center cursor-pointer ">
                            <img src="https://static.thenounproject.com/png/1123247-200.png" alt="" className="w-5 h-5" />
                        </div>
                    </div>
                </div>

                <div className={` w-[970px] ${clicked ? "" : "filterne1"}`} >
                    {courses.map(item =>
                        <div className="h-[166px] border border-t-0 border-l-0 border-r-0 mb-4 pb-4" key={item.id}>
                            <div className="h-[159px] flex flex-row ">
                                <div className="mr-4 h-[146px] w-[360px] border">
                                    <img src={item.image} alt="" className="h-[145px] w-[360px]" />
                                </div>
                                <div className="h-[159px]  w-full flex flex-row justify-between">
                                    <div className="text-left">
                                        <h2 className="font-bold ">{item.title}</h2>
                                        <p className="text-sm">The modern JavaScript course for everyone! Master JavaScript with projects, challenges and theory. Many courses in one!</p>
                                        <p className="text-sm text-gray-400">{item.username}</p>
                                        <div className="flex space-x-1">
                                            <h3 className="text-[#db9b0e] font-bold tex-sm">{item.vote}</h3>
                                            <div className="flex items-center">
                                                <StarIcon className="w-4 text-[#db9b0e]" />
                                                <StarIcon className="w-4 text-[#db9b0e]" />
                                                <StarIcon className="w-4 text-[#db9b0e]" />
                                                <StarIcon className="w-4 text-[#db9b0e]" />
                                                <StarIcon className="w-4 text-[#db9b0e]" />
                                            </div>
                                            <h3 className="text-xs">{item.students}</h3>
                                        </div>
                                        <p className="text-sm text-gray-400">69 total &middot; hours 320 lectures &middot; All Levels</p>
                                    </div>
                                    <div className="w-[96px] text-right">
                                        <h2 className="font-bold ">{item.price}</h2>
                                        <h3 className="text-gray-800 text-sm line-through">{item.oldPrice}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

            </div>
        </div>
    )
}

export default AllCourses;