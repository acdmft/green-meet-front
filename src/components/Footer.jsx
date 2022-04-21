import React from "react";

function Footer() {
  return (
    <div className="text-center m-2">
      <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row md:space-x-8 md:justify-center ">
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
    <a
      key={index}
      href={page.href}
      className="text-white font-semibold hover:text-gmlime-light text-xs md:text-sm  ease-in-out transform translate hover:transition-all duration-500"
    >
      {page.name}
    </a>
  );
});

export default Footer;
