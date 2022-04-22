import React from "react";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="text-center m-2">
      <div className="flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:space-x-8 sm:justify-center ">
        {navLinks}
      </div>
    </div>
  );
}

const pages = [
  { name: "Les contributeurs", href: "/contributors" },
  { name: "Mentions légales", href: "/mentions" },
  { name: "Contacts", href: "/contact" },
];

const navLinks = pages.map((page, index) => {
  return (
    <Link
      key={index}
      to={page.href}
      className="text-white font-semibold hover:text-gmlime-light text-xs md:text-sm  ease-in-out transform translate hover:transition-all duration-500"
    >
      {page.name}
    </Link>
  );
});

export default Footer;
