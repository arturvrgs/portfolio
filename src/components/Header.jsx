import { User, CodeXml, PanelsTopLeft, Contact} from "lucide-react";


const headerItems = [
  {
    label: "Sobre",
    icon: User,
  },
  {
    label: "Skills",
    icon: CodeXml,
  },
  {
    label: "Projetos",
    icon: PanelsTopLeft,
  },
  {
    label: "Contato",
    icon: Contact,
  },
];

function Header() {
  return (
    <header
      className="flex justify-center items-center text-zinc-100 py-5 text-md bg-zinc-900/40 backdrop-blur-sm"
    >
      <nav className="w-screen">
        <ul className="flex justify-center gap-20">
          {headerItems.map((item, i) => {
            return (
              <li
                key={i}
                className="flex gap-1 items-center hover:cursor-pointer hover:underline decoration-[#D08700] decoration-3 underline-offset-4 transition hover:scale-105 hover:animate-pulse"
              >
                <item.icon />
                <a>{item.label}</a>
              </li>
            );
          })}
        </ul>
          <div>
            
          </div>
      </nav>
    </header>
  );
}

export default Header;
