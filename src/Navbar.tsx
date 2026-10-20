import { useState } from "react";
import {
  FaHome,
  FaUser,
  FaCode,
  FaFolderOpen,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar = ({ currentPage, setPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    {
      name: "Home",
      page: "home",
      icon: FaHome,
    },
    {
      name: "About",
      page: "about",
      icon: FaUser,
    },
    {
      name: "Skills",
      page: "skills",
      icon: FaCode,
    },
    {
      name: "Projects",
      page: "projects",
      icon: FaFolderOpen,
    },
    {
      name: "Contact",
      page: "contact",
      icon: FaEnvelope,
    },
  ];

  const handleNavigation = (page) => {
    setPage(page);
    setIsOpen(false);
  };

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 px-4 pt-4">
      <div className="mx-auto max-w-6xl">
        <div className="relative rounded-2xl border border-slate-800/80 bg-slate-950/80 shadow-2xl shadow-black/20 backdrop-blur-xl">
          <div className="flex h-16 items-center justify-between px-5 sm:px-6">
            {/* Logo */}
            <button
              onClick={() => handleNavigation("home")}
              className="group cursor-pointer"
            >
              <div className="text-xl font-extrabold tracking-tight">
                <span className="text-white">Ali</span>{" "}
                <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
                  Izadi
                </span>
              </div>

              <div className="h-0.5 w-0 rounded-full bg-sky-400 transition-all duration-300 group-hover:w-full" />
            </button>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-1 md:flex">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = currentPage === item.page;

                return (
                  <button
                    key={item.page}
                    onClick={() => handleNavigation(item.page)}
                    className={`group relative flex cursor-pointer items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? "text-sky-400"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    <Icon
                      className={`text-sm transition-transform duration-300 ${
                        isActive ? "scale-110" : "group-hover:-translate-y-0.5"
                      }`}
                    />

                    {item.name}

                    {/* Active indicator */}
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-sky-400 shadow-lg shadow-sky-400/50" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-slate-300 transition hover:border-slate-700 hover:bg-slate-800 hover:text-white md:hidden"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? (
                <FaTimes className="text-lg" />
              ) : (
                <FaBars className="text-lg" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`overflow-hidden transition-all duration-300 md:hidden ${
              isOpen
                ? "max-h-96 border-t border-slate-800 opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="space-y-1 p-3">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = currentPage === item.page;

                return (
                  <button
                    key={item.page}
                    onClick={() => handleNavigation(item.page)}
                    className={`flex w-full cursor-pointer items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-medium transition-all ${
                      isActive
                        ? "bg-sky-500/10 text-sky-400"
                        : "text-slate-400 hover:bg-slate-900 hover:text-white"
                    }`}
                  >
                    <Icon className="text-sm" />

                    {item.name}

                    {isActive && (
                      <span className="ml-auto h-2 w-2 rounded-full bg-sky-400 shadow-lg shadow-sky-400/50" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
