import React from "react";
import Link from "next/link";

export const NavBar = ({cart}) =>  {
    return (
        <div>
            <header className=" body-font text-white bg-black">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <Link href="/" legacyBehavior><a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                <img className="w-8" src="/logo.svg"></img>
                <span className="ml-3 text-xl text-white">MyShop</span>
            </a></Link>
            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                <Link href="/" legacyBehavior><a className="mr-4 hover:text-gray-300">Home</a></Link>
                <Link href="/about" legacyBehavior><a className="mr-4 hover:text-gray-300">About</a></Link>
                <Link href="/products" legacyBehavior><a className="mr-4 hover:text-gray-300">Products</a></Link>
                <Link href="/contact" legacyBehavior><a className="mr-4 hover:text-gray-300">Contact Us</a></Link>
                <Link href="/checkout" legacyBehavior><a className="mr-4 hover:text-gray-300">Cart({cart.length}) </a></Link>

            </nav>
            <button className ="my-2 text-white bg-indigo-500 border-0 py-1 md:py-2 px-2 md:px-4 focus:outline-none hover:bg-indigo-600 rounded text-sm">Login</button>
            </div>
        </header>
      </div>
    )
}

