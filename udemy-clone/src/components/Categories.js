import React from "react";

function Categories() {
    return (
        <>
            <div >
                <div style={{ marginTop: "64px" }} className="flex flex-col items-start mx-8 space-y-3">
                    <div style={{ marginBottom: "24px" }} >
                        <h2 className="text-2xl font-bold">Top categories</h2>
                    </div>
                    <div className="w-full gap-3 flex flex-wrap lg:float-none items-center justify-center">
                        <div style={{ width: "300px", height: "350px" }}>
                            <div className="overflow-hidden" style={{ width: "300px", height: "300px" }}>
                                <img style={{ width: "300px", height: "300px" }} className="hover:scale-105" src="https://s.udemycdn.com/home/top-categories/lohp-category-design-v2.jpg" alt="hihi" /></div>
                            <h2 className="text-2sm font-bold text-left m-2">Design</h2>
                        </div>
                        <div style={{ width: "300px", height: "350px" }}>
                            <div className="overflow-hidden" style={{ width: "300px", height: "300px" }}>
                                <img style={{ width: "300px", height: "300px" }} className="hover:scale-105" src="https://s.udemycdn.com/home/top-categories/lohp-category-development-v2.jpg" alt="hihi" /></div>
                            <h2 className="text-2sm font-bold text-left m-2">Development</h2>
                        </div>
                        <div style={{ width: "300px", height: "350px" }}>
                            <div className="overflow-hidden" style={{ width: "300px", height: "300px" }}>
                                <img style={{ width: "300px", height: "300px" }} className="hover:scale-105" src="https://s.udemycdn.com/home/top-categories/lohp-category-marketing-v2.jpg" alt="hihi" /></div>
                            <h2 className="text-2sm font-bold text-left m-2">Marketing</h2>
                        </div>
                        <div style={{ width: "300px", height: "350px" }}>
                            <div className="overflow-hidden" style={{ width: "300px", height: "300px" }}>
                                <img style={{ width: "300px", height: "300px" }} className="hover:scale-105" src="https://s.udemycdn.com/home/top-categories/lohp-category-it-and-software-v2.jpg" alt="hihi" /></div>
                            <h2 className="text-2sm font-bold text-left m-2">IT and Software</h2>
                        </div>
                        <div style={{ width: "300px", height: "350px" }}>
                            <div className="overflow-hidden" style={{ width: "300px", height: "300px" }}>
                                <img style={{ width: "300px", height: "300px" }} className="hover:scale-105" src="https://s.udemycdn.com/home/top-categories/lohp-category-personal-development-v2.jpg" alt="hihi" /></div>
                            <h2 className="text-2sm font-bold text-left m-2">Personal Development</h2>
                        </div>
                        <div style={{ width: "300px", height: "350px" }}>
                            <div className="overflow-hidden" style={{ width: "300px", height: "300px" }}>
                                <img style={{ width: "300px", height: "300px" }} className="hover:scale-105" src="https://s.udemycdn.com/home/top-categories/lohp-category-business-v2.jpg" alt="hihi" /></div>
                            <h2 className="text-2sm font-bold text-left m-2">Business</h2>
                        </div>
                        <div style={{ width: "300px", height: "350px" }}>
                            <div className="overflow-hidden" style={{ width: "300px", height: "300px" }}>
                                <img style={{ width: "300px", height: "300px" }} className="hover:scale-105" src="https://s.udemycdn.com/home/top-categories/lohp-category-photography-v2.jpg" alt="hihi" /></div>
                            <h2 className="text-2sm font-bold text-left m-2">Photography</h2>
                        </div>
                        <div style={{ width: "300px", height: "350px" }}>
                            <div className="overflow-hidden" style={{ width: "300px", height: "300px" }}>
                                <img style={{ width: "300px", height: "300px" }} className="hover:scale-105" src="https://s.udemycdn.com/home/top-categories/lohp-category-music-v2.jpg" alt="hihi" /></div>
                            <h2 className="text-2sm font-bold text-left m-2">Music</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-8 bg-[#f7f9fa] w-full h-[490px] px-[24px] py-[64px]">
                <h2 className="text-left font-bold text-2xl mb-[24px]">Featured topics by category</h2>
                <div className="w-[1258px] h-[309px]">
                    <div className="h-[255px] mb-[24px]" >
                        <div className="flex justify-between">
                            <div className="w-[299px] h-[269px] mb-[24px] pr-[8px] inline-block ">
                                <h2 className="text-left font-bold text-xl pb-[24px]">Development</h2>
                                <div className="h-[198px]">
                                    <div className="h-[50px] text-left">
                                        <div><a className="text-[#5624d0] font-bold underline hover:text-[#3a1479]" href="#">Python</a></div>
                                        <div className="text-[#6a6f73] text-sm">36,354,994 students</div>
                                    </div>
                                    <div className="h-[50px] text-left mt-[24px]">
                                        <div><a className="text-[#5624d0] font-bold underline hover:text-[#3a1479]" href="#">Web Development</a></div>
                                        <div className="text-[#6a6f73] text-sm">11,415,615 students</div>
                                    </div>
                                    <div className="h-[50px] text-left mt-[24px]">
                                        <div><a className="text-[#5624d0] font-bold underline hover:text-[#3a1479]" href="#">Machine Learning</a></div>
                                        <div className="text-[#6a6f73] text-sm">7,070,015 students</div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[299px] h-[269px] mb-[24px] pr-[8px] inline-block">
                                <h2 className="text-left font-bold text-xl pb-[24px]">Business</h2>
                                <div className="h-[50px] text-left">
                                    <div><a className="text-[#5624d0] font-bold underline hover:text-[#3a1479]" href="#">Financial Analysis</a></div>
                                    <div className="text-[#6a6f73] text-sm">1,195,282 students</div>
                                </div>
                                <div className="h-[50px] text-left mt-[24px]">
                                    <div><a className="text-[#5624d0] font-bold underline hover:text-[#3a1479]" href="#">SQL</a></div>
                                    <div className="text-[#6a6f73] text-sm">5,977,561 students</div>
                                </div>
                                <div className="h-[50px] text-left mt-[24px]">
                                    <div><a className="text-[#5624d0] font-bold underline hover:text-[#3a1479]" href="#">PMP</a></div>
                                    <div className="text-[#6a6f73] text-sm">1,733,398 students</div>
                                </div>
                            </div>
                            <div className="w-[299px] h-[269px] mb-[24px] pr-[8px] inline-block">
                                <h2 className="text-left font-bold text-xl pb-[24px]">IT and Software</h2>
                                <div className="h-[50px] text-left">
                                    <div><a className="text-[#5624d0] font-bold underline hover:text-[#3a1479]" href="#">AWS Certification</a></div>
                                    <div className="text-[#6a6f73] text-sm">6,078,244 students</div>
                                </div>
                                <div className="h-[50px] text-left mt-[24px]">
                                    <div><a className="text-[#5624d0] font-bold underline hover:text-[#3a1479]" href="#">Ethical Hacking</a></div>
                                    <div className="text-[#6a6f73] text-sm">10,931,066 students</div>
                                </div>
                                <div className="h-[50px] text-left mt-[24px]">
                                    <div><a className="text-[#5624d0] font-bold underline hover:text-[#3a1479]" href="#">Cyber Security</a></div>
                                    <div className="text-[#6a6f73] text-sm">3,998,037 students</div>
                                </div>
                            </div>
                            <div className="w-[299px] h-[269px] mb-[24px] pr-[8px] inline-block">
                                <h2 className="text-left font-bold text-xl pb-[24px]">Design</h2>
                                <div className="h-[50px] text-left">
                                    <div><a className="text-[#5624d0] font-bold underline hover:text-[#3a1479]" href="#">Photoshop</a></div>
                                    <div className="text-[#6a6f73] text-sm">10,909,736 students</div>
                                </div>
                                <div className="h-[50px] text-left mt-[24px]">
                                    <div><a className="text-[#5624d0] font-bold underline hover:text-[#3a1479]" href="#">Graphic Design</a></div>
                                    <div className="text-[#6a6f73] text-sm">3,381,052 students</div>
                                </div>
                                <div className="h-[50px] text-left mt-[24px]">
                                    <div><a className="text-[#5624d0] font-bold underline hover:text-[#3a1479]" href="#">Drawing</a></div>
                                    <div className="text-[#6a6f73] text-sm">2,410,849 students</div>
                                </div>
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>
                    <div className="w-[156px] h-[40px]">
                        <button className='border w-[156px] h-[40px] text-sm border-black font-bold hover:bg-[#f5f5f5]'>Explore more topics</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Categories;