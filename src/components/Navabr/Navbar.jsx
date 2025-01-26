"use client";
import { navItems } from "@/data/data";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { HiMiniBars3 } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const navigation = (
        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-24">
        {
            navItems.map((item, index) => (
                <Link href={item?.path} key={index}>{item?.name}</Link>
            ))
        }
      </div>
    )
    const socialNavigation = (
        <div className="flex flex-row space-x-4 md:space-x-10">
        <Link href={'/'} className="text-xl"><FaFacebookF/></Link>
        <Link href={'/'} className="text-xl"><FaTwitter/></Link>
        <Link href={'/'} className="text-xl"><FaInstagram/></Link>
      </div>
    )
  return (
    <>
        <nav className=" px-10 md:px-20 py-5 md:py-10 border-b border-b-gray-300 flex flex-row justify-between items-center">
      <div>
        <Image alt="logo" width={110} height={30} src={"/assets/logo.png"}/>
      </div>
      <div className="hidden md:block">
        {navigation}
      </div>
      <div className="hidden md:block">
        {socialNavigation}
      </div>
      <div className="md:hidden">
        <HiMiniBars3 onClick={() =>setOpen(true)} className="text-xl cursor-pointer"/>
      </div>
    </nav>
    <div className={`md:hidden fixed top-5 right-10 p-12 border border-gray-300 rounded-md bg-white z-50 ${open ? 'block' : 'hidden'}`}>
      <div className="flex flex-col items-center justify-center h-full space-y-4">
        <RxCross2 className="text-3xl cursor-pointer" onClick={() => setOpen(false)}/>
        {navigation}
        {socialNavigation}
      </div>
      </div>
    </>
  );
};

export default Navbar;
