"use client";
import React, { useState } from "react";
import { Logo, MainNavigation } from "..";

const Header = () => {
  return (
    <header className="flex bg-black bg-opacity-30 z-10">
      <div className="flex w-full justify-around">
        <Logo />
        <MainNavigation />
      </div>
    </header>
  );
};

export default Header;
