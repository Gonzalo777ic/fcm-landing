"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HiMenu, HiX, HiChevronDown } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const productLinks = [
    { name: "Fibra TP18", href: "/productos/tp18" },
    { name: "Fibra PS50", href: "/productos/ps50" },
    { name: "Fibra PS60", href: "/productos/ps60" },
    { name: "Fibra PS50P", href: "/productos/ps50p" },
  ];

  const applicationLinks = [
    { name: "Minería", href: "/aplicaciones/mineria" },
    { name: "Construcción", href: "/aplicaciones/construccion" },
    { name: "Pavimentos", href: "/aplicaciones/pavimentos" },
  ];

  const navLinks = [
    { name: "NOSOTROS", href: "/nosotros" },
    { name: "PRODUCTOS", href: "/productos", dropdown: productLinks },
    { name: "APLICACIONES", href: "/aplicaciones", dropdown: applicationLinks },
    { name: "DOCUMENTOS", href: "/documentos" },
  ];

  return (
    <>
      <nav className="bg-[#002B36] w-full z-[100] sticky top-0 border-none shadow-none h-20 flex items-center">
        {" "}
        <div className="container mx-auto px-4 md:px-8 py-3 flex justify-between items-center">
          {/* Logo Principal */}
          <Link
            href="/"
            className="flex items-center hover:opacity-80 transition-opacity"
          >
            <Image
              src="/images/logo_blanco.png"
              alt="FCM Logo"
              width={140}
              height={50}
              className="object-contain"
              priority
            />
          </Link>

          {/* Menú Desktop */}
          <div className="hidden lg:flex space-x-8 items-center text-[11px] font-bold tracking-[0.15em] text-white/90">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group py-4">
                <Link
                  href={link.href}
                  className="hover:text-fcm-yellow transition-colors flex items-center gap-1 uppercase"
                >
                  {link.name}{" "}
                  {link.dropdown && (
                    <HiChevronDown className="text-fcm-yellow group-hover:rotate-180 transition-transform" />
                  )}
                </Link>

                {/* Dropdown Menu Desktop */}
                {link.dropdown && (
                  <div className="absolute top-full left-0 w-52 bg-[#002B36] border border-white/10 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 rounded-sm overflow-hidden z-[110]">
                    {link.dropdown.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        className="block px-6 py-4 text-[10px] hover:bg-fcm-yellow hover:text-fcm-blue border-b border-white/5 transition-colors uppercase font-black"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <Link
              href="/contacto"
              className="bg-fcm-yellow text-fcm-blue px-6 py-2.5 rounded-sm font-black hover:bg-yellow-500 transition-all uppercase text-[11px] tracking-tighter shadow-md"
            >
              CONTÁCTANOS
            </Link>
          </div>

          {/* Mobile Toggle Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white p-2 hover:bg-white/5 rounded-full transition-colors"
            >
              <HiMenu size={32} />
            </button>
          </div>
        </div>
      </nav>

      {/* --- SIDEBAR MOBILE --- */}
      {/* Background Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 z-[110] transition-opacity duration-300 lg:hidden ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={toggleMenu}
      />

      {/* Sidebar Content */}
      <div
        className={`
        fixed top-0 right-0 h-full w-[80%] max-w-sm bg-[#002B36] z-[120] transform transition-transform duration-500 ease-in-out lg:hidden border-l border-white/10 shadow-2xl
        ${isOpen ? "translate-x-0" : "translate-x-full"}
      `}
      >
        {/* Sidebar Header */}
        <div className="flex justify-between items-center p-6 border-b border-white/10 bg-black/10">
          <Image
            src="/images/logo_blanco.png"
            alt="FCM Logo"
            width={110}
            height={40}
            className="object-contain"
          />
          <button
            onClick={toggleMenu}
            className="text-fcm-yellow p-2 hover:bg-white/5 rounded-full transition-colors"
          >
            <HiX size={32} />
          </button>
        </div>

        {/* Sidebar Navigation Links */}
        <div className="flex flex-col p-8 space-y-6 overflow-y-auto h-[calc(100%-80px)]">
          {navLinks.map((link) => (
            <div key={link.name} className="flex flex-col space-y-4">
              <Link
                href={link.href}
                onClick={() => !link.dropdown && setIsOpen(false)}
                className="text-white text-lg font-black tracking-widest hover:text-fcm-yellow transition-colors border-b border-white/5 pb-2 uppercase"
              >
                {link.name}
              </Link>

              {/* Sub-enlaces en móvil */}
              {link.dropdown && (
                <div className="pl-4 flex flex-col space-y-3">
                  {link.dropdown.map((sub) => (
                    <Link
                      key={sub.name}
                      href={sub.href}
                      onClick={() => setIsOpen(false)}
                      className="text-white/60 text-sm font-bold hover:text-fcm-yellow uppercase tracking-wider border-l-2 border-fcm-yellow/30 pl-4"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <Link
            href="/contacto"
            onClick={() => setIsOpen(false)}
            className="bg-fcm-yellow text-fcm-blue px-6 py-4 rounded-sm text-center font-black uppercase tracking-widest mt-8 shadow-xl active:scale-95"
          >
            CONTÁCTANOS
          </Link>
        </div>
      </div>
    </>
  );
}
