import React from "react";

function Feed() {
    return (
        <>
            <div className="w-full h-[400px] mt-[64px] pt-[40px] pb-[40px]">
                <div className="h-[320px] flex items-center justify-center">
                    <div className="h-[400px] w-[896px] flex">
                        <img className="h-[400px] w-[400px]" src="https://s.udemycdn.com/home/non-student-cta/instructor-1x-v3.jpg" alt="hihi" />
                        <div className="h-[400px] w-[400px] ml-[96px] flex justify-center text-left flex-col">
                            <h3 className="font-bold text-4xl mb-[8px]">Become an instructor</h3>
                            <p className="mb-[16px]">Instructors from around the world teach millions of students on Udemy. We provide the tools and skills to teach what you love.</p>
                            <div className="w-[400px] h-[48px]">
                                <button className='border bg-[#1c1d1f] hover:bg-black text-white border-black h-[48px] text-sm font-bold w-[176px]'>Start teaching today</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-[195px] mt-[64px] mb-[96px] bg-[#f7f9fa]">
                <div className="h-[195px] p-[32px]">
                    <div className="h-[131px] flex items-center flex-col text-center">
                        <h2 className="font-bold text-2xl">Trusted by the best</h2>
                        <p className="mt-[8px] mb-[24px]">Leading companies use the same courses to help employees keep their skills fresh.</p>
                        <div className="h-[44px] w-full flex justify-between">
                            <img className="w-[115px] h-[44px]" src="https://s.udemycdn.com/partner-logos/v4/nasdaq-dark.svg" alt="hihi" />
                            <img className="w-[44px] h-[44px]" src="https://s.udemycdn.com/partner-logos/v4/volkswagen-dark.svg" alt="hihi" />
                            <img className="w-[67px] h-[44px]" src="https://s.udemycdn.com/partner-logos/v4/box-dark.svg" alt="hihi" />
                            <img className="w-[115px] h-[44px]" src="https://s.udemycdn.com/partner-logos/v4/netapp-dark.svg" alt="hihi" />
                            <img className="w-[115px] h-[44px]" src="https://s.udemycdn.com/partner-logos/v4/eventbrite-dark.svg" alt="hihi" />
                            <img className="w-[115px] h-[44px]" src="https://s.udemycdn.com/partner-logos/v4/tcs-dark.svg" alt="hihi" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-[400px] w-full mb-[96px] ">
                <div className="h-[400px] py-[40px]">
                    <div className="h-[320px]  flex justify-center">
                        <div className="h-[400px] w-[896px] flex flex-row-reverse">
                            <img className="h-[400px] w-[400px]" src="https://s.udemycdn.com/home/non-student-cta/ub-1x-v3.jpg" alt="hihi"></img>
                            <div className="h-[400px] w-[400px] mr-[96px] flex flex-col justify-center text-left">
                                <img className="w-[235px] h-[40px] mb-[8px]" src="https://www.udemy.com/staticx/udemy/images/v7/logo-ub.svg" alt="hihi" />
                                <p className="text-lg mb-[16px]">Get unlimited access to 17,000+ of Udemy’s top courses for your team. Learn and improve skills across business, tech, design, and more.</p>
                                <div className="w-[400px] h-[48px]">
                                    <button className='border bg-[#1c1d1f] hover:bg-black text-white border-black h-[48px] text-sm font-bold w-[176px]'>Get Udemy Business</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-[400px] w-full py-[40px] mb-[96px]">
                <div className="h-[320px] flex justify-center items-center ">
                    <div className="h-[400px] w-[896px] flex">
                        <img className="h-[400px] w-[400px] mr-[96px]" src="https://s.udemycdn.com/home/non-student-cta/transform-1x-v3.jpg" alt="hihi" />
                        <div className="h-[400px] w-[400px] text-left">
                            <h3 className="font-bold text-4xl mb-2">Transform your life through education</h3>
                            <p className="text-lg mb-4">Learners around the world are launching new careers, advancing in their fields, and enriching their lives.</p>
                            <div className="w-[400px] h-[48px]">
                                <button className='border bg-[#1c1d1f] hover:bg-black text-white border-black h-[48px] px-3 text-sm font-bold w-[120px]'>Find out how</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Feed;