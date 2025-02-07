import javascript from "../assets/img/js.png";
import html from "../assets/img/html.png";
import css from "../assets/img/css.png";
import tailwind from "../assets/img/tailwind.png";
import typescript from "../assets/img/typescript.png";
import react from "../assets/img/react.png";
import sass from "../assets/img/sass.png";
import php from "../assets/img/php.png";
import java from "../assets/img/java.png";
import python from "../assets/img/python.png";
import selenium from "../assets/img/selenium.png";
import drawio from "../assets/img/draw.io.png";
import git from "../assets/img/git.png";
import mysql from "../assets/img/mysql.png";
import netbeans from "../assets/img/netbeans.png";
import { motion } from "framer-motion";
import {useTypewriter, Cursor} from 'react-simple-typewriter'

const skillItemsDev = [
  {
    skillIcon: javascript,
    skillName: "Javascript",
  },
  {
    skillIcon: html,
    skillName: "HTML5",
  },
  {
    skillIcon: css,
    skillName: "CSS3",
  },
  {
    skillIcon: tailwind,
    skillName: "Tailwind",
  },
  {
    skillIcon: typescript,
    skillName: "Typescript",
  },
  {
    skillIcon: react,
    skillName: "React",
  },
  {
    skillIcon: sass,
    skillName: "Sass",
  },
  {
    skillIcon: php,
    skillName: "PHP",
  },
  {
    skillIcon: java,
    skillName: "Java",
  },
  {
    skillIcon: python,
    skillName: "Python",
  },
];

const skillItemsDevOps = [
  {
    skillIcon: selenium,
    skillName: "Selenium",
  },
  {
    skillIcon: drawio,
    skillName: "Draw.io",
  },
  {
    skillIcon: git,
    skillName: "Git",
  },
  {
    skillIcon: mysql,
    skillName: "MySQL",
  },
  {
    skillIcon: netbeans,
    skillName: "NetBeans",
  },
];

function Skills() {

  const[text]=useTypewriter({
    words:['Dev /'],
    loop:1000
})

  return (
    <section className="flex flex-col items-center justify-center gap-30 text-zinc-100 tracking-[12px] text-2xl mt-65 w-full ">
      <h1 className="flex">EXPERIÊNCIA</h1>

      <motion.div 
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 2, x: 0, transition: { duration: 1.0 } }}
      >
        <div className="flex items-baseline gap-40">
          <div className="flex flex-col items-center justify-center gap-6">
            <h1 className="text-xl tracking-[8px] text-zinc-300">{'<'}{text}{'>'}</h1>
            <div className="h-1 w-full bg-zinc-700/30 "></div>
            <div className="grid grid-cols-4 gap-5">
              {skillItemsDev.map((item, i) => {
                return (
                  <div
                    className="flex flex-col items-center gap-2 font-medium"
                    key={i}
                  >
                    <img src={item.skillIcon} />
                    <p className="text-xs font-bold tracking-normal text-zinc-300">
                      {item.skillName}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-6">
            <h1 className="text-xl tracking-[8px] text-zinc-300">
              {"<DevOps />"}
              <Cursor />
            </h1>
            <div className="h-1 w-full bg-zinc-700/30"></div>
            <div className="grid grid-cols-3 gap-6">
              {skillItemsDevOps.map((item, i) => {
                return (
                  <div
                    className="flex flex-col items-center gap-2 font-medium"
                    key={i}
                  >
                    <img src={item.skillIcon} />
                    <p className="text-xs font-bold tracking-normal text-zinc-300">
                      {item.skillName}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>

    </section>
  );
}

export default Skills;
