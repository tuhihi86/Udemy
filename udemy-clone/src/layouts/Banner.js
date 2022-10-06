import React from 'react';

function Banner() {
    return (
        <div className='w-full h-96 border border-gray-100 relative'>
            <img src='https://img-c.udemycdn.com/notices/home_banner/image_udlite/256dc72f-5590-4e64-b80d-18b2b98b913e.jpg' alt='banner' className='h-full w-full object-cover bg-no-repeat bg-bottom' />
            <div className='absolute bg-white top-12 left-8 p-4 flex flex-col items-start justify-center shadow-lg h-50 w-[430px]'>
                <h1 style={{fontSize:32}} className='font-bold mb-2 text-left'>
                    So many courses starting at ₹649
                </h1>
                <p style={{fontSize:17}} className='text-left'>
                Your future&rsquo;s wide open, and so is our course library. Log in now for special savings on courses. Sale ends Oct 6.
                </p>
            </div>
        </div>
    );
}

export default Banner;