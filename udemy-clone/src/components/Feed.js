import React from "react";

function Feed() {
  return (
    <div className="w-full h-[400px] mt-[64px] pt-[40px] pb-[40px]">
        <div className="h-[320px] flex items-center justify-center">
            <div className="h-[400px] w-[896px] flex">
                <img className="h-[400px] w-[400px]" src="https://s.udemycdn.com/home/non-student-cta/instructor-1x-v3.jpg" alt="hihi"/>
                <div className="h-[400px] w-[400px] ml-[96px] flex justify-center text-left flex-col">
                    <h3 className="font-bold text-4xl mb-[8px]">Become an instructor</h3>
                    <p className="mb-[16px]">Instructors from around the world teach millions of students on Udemy. We provide the tools and skills to teach what you love.</p>
                    <div className="w-[400px] h-[48px]">
                    <button className='border bg-black text-white border-black h-[48px] text-sm font-bold w-20'>Start teaching today</button>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  );
}

export default Feed;