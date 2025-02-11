import { User, CodeXml, Contact, Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const headerItems = [
  { label: "Sobre", icon: User, rel: "#about" },
  { label: "Skills", icon: CodeXml, rel: "#skills" },
  { label: "Contato", icon: Contact, rel: "#contact" },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex justify-between items-center text-zinc-100 py-5 px-5 text-md font-medium lg:bg-zinc-900/40 lg:backdrop-blur-sm fixed w-full z-10">
      <button
        className="border rounded-md border-2 border-zinc-700 p-2 hover:cursor-pointer lg:hidden"
        onClick={() => setIsMenuOpen(true)}
        aria-label="Abrir menu"
      >
        <Menu />
      </button>

      <nav className="w-screen hidden lg:flex justify-center">
        <motion.ul
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
          className="flex gap-20"
        >
          {headerItems.map((item) => (
            <li
              key={item.label}
              className="flex gap-1 items-center hover:cursor-pointer hover:underline decoration-[#D08700] decoration-3 underline-offset-4 transition hover:scale-105 hover:animate-pulse"
            >
              <item.icon />
              <a href={item.rel}>{item.label}</a>
            </li>
          ))}
        </motion.ul>
      </nav>

      {isMenuOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-md z-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="relative bg-zinc-900 p-8 rounded-2xl shadow-xl text-center w-80 flex flex-col items-center"
          >

            <button
              className="text-zinc-400 hover:text-white transition"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Fechar menu"
            >
              <X size={24} />
            </button>

            <ul className="flex flex-col gap-6 mt-6">
              {headerItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.rel}
                    className="flex items-center justify-center gap-2 text-lg text-zinc-100 hover:text-[#D08700] transition"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <item.icon />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      )}
    </header>
  );
}

export default Header;
