import Link from "next/link";
import React from "react";

const MenuItem = ({ title, address, Icon }) => {
  return (
    <Link href={address} className="mx-4 lg:mx-6 hover:text-amber-600">
      <Icon className="text-2xl sm:hidden" />
      <p className="hidden sm:inline">{title}</p>
    </Link>
  );
};

export default MenuItem;
