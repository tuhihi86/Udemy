import React from "react";
import {StarIcon} from "@heroicons/react/solid"

function Learn({item}){
    return(
        <div className="w-[220px] flex flex-col items-start space-y[1px]">
            <img src={item.image} alt="imgCoures" className="h-32 w-full"/>
            <h2 style={{fontSize:"14sp"}} className="font-bold text-md pt-1 text-left">{item.title}</h2>
            <h2 className="text-xs text-gray-700">{item.username}</h2>
            <div className="flex space-x-1">
                <h3 className="text-[#db9b0e] font-bold tex-sm">{item.vote}</h3>
                <div className="flex items-center">
                    <StarIcon className="w-4 text-[#db9b0e]"/>
                    <StarIcon className="w-4 text-[#db9b0e]"/>
                    <StarIcon className="w-4 text-[#db9b0e]"/>
                    <StarIcon className="w-4 text-[#db9b0e]"/>
                    <StarIcon className="w-4 text-[#db9b0e]"/>
                </div>
                <h3 className="text-xs">{item.students}</h3>
            </div>
            <div className="flex space-x-4 items-center">
                <h3 className="text-black font-bold">{item.price}</h3>
                <h3 className="text-gray-800 text-sm line-through">{item.oldPrice}</h3>
            </div>
        </div>
    )
}
export default Learn;