import React from 'react';
import {
    GlobeAltIcon,
} from "@heroicons/react/outline";

function Footer() {
    return (
        <div style={{ padding: "24px 48px 0px", height: "300px" }} className='w-full bg-[#1c1d1f] border-t border-[#3e4143]'>
            <div className='flex' style={{ justifyContent: "space-between", height: "138px" }}>
                <ul style={{ color: "white", textAlign: 'left' }}>
                    <li style={{ padding: "4px" }}><a className='hover:underline' href='#'>Udemy Business</a></li>
                    <li style={{ padding: "4px" }}><a className='hover:underline' href='#'>Teach on Udemy</a></li>
                    <li style={{ padding: "4px" }}><a className='hover:underline' href='#'>Get the app</a></li>
                    <li style={{ padding: "4px" }}><a className='hover:underline' href='#'>About us</a></li>
                    <li style={{ padding: "4px" }}><a className='hover:underline' href='#'>Contact us</a></li>
                </ul>
                <ul style={{ color: "white", textAlign: 'left' }}>
                    <li style={{ padding: "4px" }}><a className='hover:underline' href='#'>Careers</a></li>
                    <li style={{ padding: "4px" }}><a className='hover:underline' href='#'>Blog</a></li>
                    <li style={{ padding: "4px" }}><a className='hover:underline' href='#'>Help and Support</a></li>
                    <li style={{ padding: "4px" }}><a className='hover:underline' href='#'>Affiliate</a></li>
                    <li style={{ padding: "4px" }}><a className='hover:underline' href='#'>Investors</a></li>
                </ul>
                <ul style={{ color: "white", textAlign: 'left' }}>
                    <li style={{ padding: "4px" }}><a className='hover:underline' href='#'>Terms</a></li>
                    <li style={{ padding: "4px" }}><a className='hover:underline' href='#'>Privacy policy</a></li>
                    <li style={{ padding: "4px" }}><a className='hover:underline' href='#'>Cookie settings</a></li>
                    <li style={{ padding: "4px" }}><a className='hover:underline' href='#'>Sitemap</a></li>
                    <li style={{ padding: "4px" }}><a className='hover:underline' href='#'>Accessibility statement</a></li>
                </ul>
                <div style={{ width: "140px", height: "138px", marginLeft: "254px", paddingBottom: "24px" }}>
                    <button style={{ width: "140px", height: "40px", paddingLeft: "16px", paddingRight: "16px" }} className='border border-white text-white flex items-center hover:bg-gray-800'>
                        <GlobeAltIcon className='h-5 w-5' />
                        <span style={{ marginLeft: "5px" }}>English</span>
                    </button>
                </div>
            </div>
            <div className='flex flex-row items-center' style={{ padding: "64px 0px 32px", height: "131px" }}>
                <div >
                    <a href='#'>
                        <img style={{ height: "34px", width: "91px" }} src='https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg' alt='logo' />
                    </a>
                </div>
                <div style={{ width: "100%", height: "16px", color: "white", fontWeight: 400, fontSize: "70%", display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
                    © 2022 VuTu, Inc.
                </div>
            </div>
        </div>
    );
}

export default Footer;