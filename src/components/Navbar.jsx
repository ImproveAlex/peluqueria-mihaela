import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';
import whatsappIcon from '../assets/whatsapp.svg';


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#d8b26e] to-[#f1e0c2] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo + nombre */}
          <div className="flex items-center space-x-4">
            <img src={logo} alt="Mihaela Logo" className="h-16 w-auto" />
            <div className="flex flex-col">
                <span className="text-3xl font-cursive text-black leading-none">
                    Mihaela
                </span>
                <span className="text-sm font-display text-black tracking-wide -mt-1">
                    Hair Studios
                </span>
                </div>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex space-x-10 text-lg font-elegant text-black">
            <a href="#inicio" className="hover:text-white transition">Inicio</a>
            <a href="#servicios" className="hover:text-white transition">Servicios</a>
            <a href="#galeria" className="hover:text-white transition">Galería</a>
            <a href="#contacto" className="hover:text-white transition">Contacto</a>
        </nav>

        <div className="hidden md:flex items-center space-x-2 text-black font-elegant text-sm">
            <img src={whatsappIcon} alt="WhatsApp" className="w-5 h-5" />
            <a
                href="https://wa.me/34614401841"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-700 transition"
            >
                614 401 841
            </a>
        </div>


          {/* Mobile menu icon */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-black hover:text-white transition">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-4">
            <nav className="flex flex-col space-y-4 text-lg text-black font-elegant">
                <a href="#inicio" className="hover:text-white transition">Inicio</a>
                <a href="#servicios" className="hover:text-white transition">Servicios</a>
                <a href="#galeria" className="hover:text-white transition">Galería</a>
                <a href="#contacto" className="hover:text-white transition">Contacto</a>
            </nav>
            <div className="flex items-center space-x-2 text-sm text-black font-elegant pt-2 border-t border-black/20">
                <img src={whatsappIcon} alt="WhatsApp" className="w-5 h-5" />
                <a
                    href="https://wa.me/34614401841"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-green-700 transition"
                >
                    614 401 841
                </a>
            </div>
        </div>

        )}

    </header>
  );
}

export default Navbar;
