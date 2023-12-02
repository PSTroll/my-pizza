"use client";
import React, { useState } from "react";
import { Logo, MainNavigation } from "..";

const Header = () => {
  return (
    <header className="flex bg-black bg-opacity-30 z-10 absolute w-full top-0">
      <div className="flex w-full justify-around items-center">
        <Logo />
        <MainNavigation />
      </div>
    </header>
  );
};

export default Header;
