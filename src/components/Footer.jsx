import React from "react";

function Footer() {
  return (
    <div className="text-center m-6">
      <div className="space-x-12">{navLinks}</div>
    </div>
  );
}

const pages = [
  { name: "Les contributeurs", href: "/contributors" },
  { name: "Mentions légales", href: "/mentions" },
  { name: "Contacts", href: "/contact" },
];

const navLinks = pages.map((page) => {
  return (
    <a
      key={page}
      href={page.href}
      className="text-gmkaki font-semibold hover:text-gray-600"
    >
      {page.name}
    </a>
  );
});

export default Footer;
