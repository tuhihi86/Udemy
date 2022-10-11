import React from 'react';
import {
    ShoppingCartIcon,
    SearchIcon,
    GlobeAltIcon,
    MenuIcon,
} from "@heroicons/react/outline";
function Header() {
    return (
        <div>
            <div className='flex space-x-4 bg-white h-[74px] shadow-lg text-center justify-between items-center px-4'>
                <MenuIcon className='h-6 w-6 md:hidden' />
                <button>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Udemy_logo.svg/2560px-Udemy_logo.svg.png' alt='logo' width='91' height='34'></img>
                </button>
                <div>
                    <button style={{ position: 'relative', width: "110px", height: "72px" }} className='peer bg-white hidden text-sm md:block'><h3 style={{ height: "72px", marginTop: "27px" }} className='hover:text-[#5624d0]'>Categories</h3> </button>
                    {/* <!-- the menu here --> */}
                    <div style={{ position: 'absolute', marginTop: '4px', zIndex: 1010 }} class="hidden peer-hover:flex hover:flex
                    w-[200px] text-left
                    flex-col bg-white drop-shadow-lg">
                        <a class="px-5 py-2 hover:text-[#5624d0]" href="#">Development</a>
                        <a class="px-5 py-2 hover:text-[#5624d0]" href="#">Business</a>
                        <a class="px-5 py-2 hover:text-[#5624d0]" href="#">Finance &#38; Accounting</a>
                        <a class="px-5 py-2 hover:text-[#5624d0]" href="#">IT &#38; Software</a>
                        <a class="px-5 py-2 hover:text-[#5624d0]" href="#">Office productivity</a>
                        <a class="px-5 py-2 hover:text-[#5624d0]" href="#">Personal Development</a>
                        <a class="px-5 py-2 hover:text-[#5624d0]" href="#">Design</a>
                        <a class="px-5 py-2 hover:text-[#5624d0]" href="#">Marketing</a>
                        <a class="px-5 py-2 hover:text-[#5624d0]" href="#">Lifestyle</a>
                        <a class="px-5 py-2 hover:text-[#5624d0]" href="#">Photography &#38; Video</a>
                        <a class="px-5 py-2 hover:text-[#5624d0]" href="#">Health &#38; Fitness</a>
                        <a class="px-5 py-2 hover:text-[#5624d0]" href="#">Music</a>
                        <a class="px-5 py-2 hover:text-[#5624d0]" href="#">Teaching &#38; Academics</a>
                    </div>
                </div>
                <form className='hidden bg-[#f8fafb] border md:flex border-black rounded-3xl flex-1 h-12 items-center'>
                    <button>
                        <SearchIcon placeholder="Search for anything" className='h-5 w-5 mx-4 text-gray-400' />
                    </button>
                    <input className='bg-transparent text-sm outline-0' type="text" placeholder="Search for anything"></input>
                </form>
                <div>
                    <button style={{ position: 'relative', width: "110px", height: "72px" }} className='peer bg-white hidden text-sm lg:block'>
                        <h3 style={{ height: "72px", marginTop: "27px" }} className='hover:text-[#5624d0]'>Udemy Business</h3>
                    </button>
                    <div style={{ position: 'absolute', marginTop: '4px', zIndex: 1010 }} class="hidden peer-hover:flex hover:flex
                    w-[250px]
                    flex-col bg-white drop-shadow-lg">
                        <div style={{ margin: '4px' }}>
                            <h1 style={{ fontWeight: 'bold', fontSize: '20sp', margin: "5px" }}>
                                Get your team access to over 17,000 top Udemy courses, anytime, anywhere
                            </h1>
                            <button style={{ margin: "5px" }} className='border bg-gray-900 text-white border-black h-10 text-sm font-bold w-60 hover:bg-black'>Try Udemy Business</button>
                        </div>
                    </div>
                </div>
                <div>
                    <button style={{ position: 'relative', width: "110px", height: "72px" }} className='peer bg-white hidden text-sm lg:block'>
                        <h3 style={{ height: "72px", marginTop: "27px" }} className='hover:text-[#5624d0]'>Teach on Udemy</h3>
                    </button>
                    <div style={{ position: 'absolute', marginTop: '4px', zIndex: 1010 }} class="hidden peer-hover:flex hover:flex
                    w-[250px]
                    flex-col bg-white drop-shadow-lg">
                        <div style={{ margin: '4px' }}>
                            <h1 style={{ fontWeight: 'bold', fontSize: '20sp', margin: "5px" }}>
                                Turn what you know into an opportunity and reach millions around the world
                            </h1>
                            <button style={{ margin: "5px" }} className='border bg-gray-900 text-white border-black h-10 text-sm font-bold w-60 hover:bg-black'>Learn more</button>
                        </div>
                    </div>
                </div>
                <div className='flex'>
                    <button>
                        <SearchIcon className='h-6 w-6 md:hidden' />
                    </button>
                    <div>
                        <button style={{ position: 'relative', height: "72px" }} className='peer'>
                            <ShoppingCartIcon className='h-6 w-6 hover:text-[#5624d0]' />
                        </button>
                        <div style={{ position: 'absolute', marginTop: '4px', zIndex: 1010 }} class="hidden peer-hover:flex hover:flex
                    w-[250px]
                    flex-col bg-white drop-shadow-lg">
                            <div style={{ margin: '4px' }}>
                                <h1 style={{ fontSize: '20sp', margin: "5px" }}>
                                    Your card is empty.
                                </h1>
                                <button style={{ margin: "5px" }} className='font-bold hover:text-[#5650d0] text-[#5624d0]'>Keep shopping</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='hidden md:flex pr-4 space-x-4 justify-end'>
                    <button className='border border-black h-10 text-sm font-bold w-20 hover:bg-[#f5f5f5]'>Log in</button>
                    <button className='border bg-black text-white border-black h-10 text-sm font-bold w-20'>Sign up</button>
                    <button className='border border-black w-10 flex items-center justify-center hover:bg-[#f5f5f5]'>
                        <GlobeAltIcon className='h-5 w-5' />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Header;