import React from 'react';

function Footer() {
    return (
        <div style={{padding:"24px 48px 0px", height:"300px"}} className='w-full bg-[#1c1d1f] border-t border-[#3e4143]'>
            <div>

            </div>
            <div className='flex flex-row items-center' style={{padding:"64px 0px 32px", height:"131px"}}>
                <div >
                    <a href='#'>
                        <img style={{height:"34px", width:"91px"}} src='https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg' alt='logo'/>
                    </a>
                </div>
                <div  style={{width:"106px",height:"16px",color:"white", fontSize:"70%"}}>
                © 2022 VuTu, Inc.
                </div>
            </div>
        </div>
    );
}

export default Footer;