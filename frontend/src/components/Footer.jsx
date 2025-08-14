import React from "react";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm ">
        <div>
          <img className="mb-5 w-32" src={assets.logo1} alt="" />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
            beatae fugiat aliquid distinctio quasi inventore, ullam fuga
            mollitia labore suscipit.
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <NavLink to="/" className="flex flex-col">
              <p>HOME</p>
            </NavLink>
            <NavLink to="/about" className="flex flex-col">
              <p>ABOUT</p>
            </NavLink>
            <NavLink to="/orders" className="flex flex-col">
              <p>ORDERS</p>
            </NavLink>
            <NavLink to="/collection" className="flex flex-col">
              <p>COLLECTION</p>
            </NavLink>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+91 324-654-8765</li>
            <li>contact@dezire.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2025@ dezire.com - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
