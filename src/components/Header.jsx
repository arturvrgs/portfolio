import { User, CodeXml, /*PanelsTopLeft,*/ Contact} from "lucide-react";
import {motion} from 'framer-motion'

const headerItems = [
  {
    label: "Sobre",
    icon: User,
    rel: '#about'
  },
  {
    label: "Skills",
    icon: CodeXml,
    rel: '#skills'
  },
  // {
  //   label: "Projetos",
  //   icon: PanelsTopLeft,
  //   rel: '#projects'
  // },
  {
    label: "Contato",
    icon: Contact,
    rel: '#contact'
  },
];

function Header() {
  return (
    <header
      className="flex justify-center items-center text-zinc-100 py-5 text-md font-medium bg-zinc-900/40 backdrop-blur-sm fixed z-1 "
    >
      <nav className="w-screen">
        <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
            viewport={{once: true}}
        >
          <ul className="flex justify-center gap-20">
            {headerItems.map((item, i) => {
              return (
                <li
                  key={i}
                  className="flex gap-1 items-center hover:cursor-pointer hover:underline decoration-[#D08700] decoration-3 underline-offset-4 transition hover:scale-105 hover:animate-pulse"
                >
                  <item.icon />
                  <a href={item.rel}>{item.label}</a>
                </li>
              );
            })}
          </ul>
        </motion.div>
      </nav>
    </header>
  );
}

export default Header;
