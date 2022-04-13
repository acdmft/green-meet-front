import React from "react";

function Footer() {
  return <div className="">{navLinks}</div>;
}

const pages = [
  { name: "Les contributeurs", href: "/contributors" },
  { name: "Mentions légales", href: "/mentions" },
  { name: "Contacts", href: "/contact" },
];

const navLinks = pages.map((page) => {
  return (
    <a key={page} href={page.href} className="">
      {page.name}
    </a>
  );
});

export default Footer;
