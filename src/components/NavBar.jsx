import { React, useState, useContext } from "react";
import { Link } from "react-router-dom";
// isAuthenticated context
import { AuthContext } from "../App";
// toastify
import { toast } from "react-toastify";

function NavBar() {
  // context isAuthenticat
  const context = useContext(AuthContext);
  // state of the menu
  const [menuOpen, setMenuOpen] = useState(false);
  // logout user if he clicked on 'Deconnexion'
  const handleClick = (cl) => {
    if (cl.name !== "Déconnexion") {
      return;
    }
    fetch("logout")
      .then((res) => {
        context.setIsAuthenticated(false);
        toast.success("Tu es déconnecté");
      })
      .catch((err) => toast.error(err));
  };

  const pages = [
    // { name: "Aller au contenu", href: "#contenu" },
    { name: "Accueil", href: "/" },
    { name: "Les actions", href: "/actions" },
    { name: "Créer mon action", href: "/addAction" },
  ];
  const connexionLinks = context.isAuthenticated
    ? [
        { name: "Déconnexion", href: "" },
        { name: "Profil", href: "/profile" },
      ]
    : [
        { name: "Connexion", href: "/login" },
        { name: "S'enregistrer", href: "/register" },
      ];
  const navLinks = pages.map((page, index) => {
    // if (index !== 0) {
    return (
      <Link
        key={index}
        className="text-white font-semibold hover:text-gmlime-light ease-in-out transform translate hover:transition-all duration-500"
        to={page.href}
      >
        {page.name}
      </Link>
    );
    // }
  });
  const navConnexion = connexionLinks.map((cl, index) => (
    <Link
      key={index}
      className="text-white font-semibold hover:text-gmlime-light ease-in-out transform translate hover:transition-all duration-500"
      to={cl.href}
      onClick={() => handleClick(cl)}
    >
      {cl.name}
    </Link>
  ));

  return (
    <div className="sticky z-10 top-0 bg-gray-800">
      <Navbar
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        navLinks={navLinks}
        navConnexion={navConnexion}
      />
      {menuOpen && (
        <MobileMenu>
          {/* <div className=""> */}
          <div className="flex flex-col space-y-2">
            <a
              className="text-white font-semibold hover:text-gmlime-light"
              href="#contenu"
            >
              Aller au contenu
            </a>
            {navLinks}
          </div>
          <div className="flex flex-col space-y-2 py-5">{navConnexion}</div>
          {/* </div> */}
        </MobileMenu>
      )}
    </div>
  );
}

const Navbar = ({ menuOpen, setMenuOpen, navLinks, navConnexion }) => (
  <div className="flex items-center justify-between h-16">
    <div className="flex items-center">
      <Link to="/">
        <img src="../../img/logo4.jpeg" className="h-16 w-28 m-0 p-0" />
      </Link>
    </div>
    <nav className="hidden lg:block mr-10">
      <div className="flex flex-row space-x-32 text-white">
        <div className="space-x-10">
          <a
            className="text-white font-semibold hover:text-gmlime-light ease-in-out transform translate hover:transition-all duration-500"
            href="#contenu"
          >
            Aller au contenu
          </a>
          {navLinks}
        </div>
        <div className="space-x-6">{navConnexion}</div>
      </div>
    </nav>
    <button
      type="button"
      aria-label="Toggle mobile menu"
      onClick={() => setMenuOpen(!menuOpen)}
      className="rounded lg:hidden focus:outline-none focus:ring focus:ring-gray-500 focus:ring-opacity-50"
    >
      <MenuAlt4Svg menuOpen={menuOpen} />
    </button>
  </div>
);

const MobileMenu = ({ children }) => (
  <nav className="p-4 flex flex-col space-y-3 lg:hidden">{children}</nav>
);

// const FireSvg = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     className="h-10 w-10"
//     viewBox="0 0 20 20"
//     fill="currentColor"
//   >
//     <path
//       fillRule="evenodd"
//       d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
//       clipRule="evenodd"
//     />
//   </svg>
// );

const MenuAlt4Svg = ({ menuOpen }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={` text-white mr-10 transition duration-100 ease h-8 w-8 ${
      menuOpen ? "transform rotate-90" : ""
    }`}
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
      clipRule="evenodd"
    />
  </svg>
);

export default NavBar;
