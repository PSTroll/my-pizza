import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <div>
      <Link href="/">
        <Image
          width={100}
          height={100}
          src="/images/icons/logo.svg"
          alt="logo"
        />
      </Link>
    </div>
  );
};

export default Logo;
