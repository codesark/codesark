import { motion } from "framer-motion";
import React from "react";

type Props = {};

function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="h-screen relative overflow-hidden flex flex-col md:flex-row text-left items-center max-w-full justify-evenly mx-auto z-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {projects.map((project, i) => (
          <div key={i} className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
            <motion.img 
                initial={{ y: -300, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                src="/images/favicon.ico" alt="" />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-2xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  {" "}
                  Case Study {i + 1} of {projects.length}
                </span>
                : Instagram Clone
              </h4>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
                accusamus eligendi laborum commodi quod illum facere
                voluptatibus, atque temporibus, quisquam perferendis. Illo
                maiores culpa consequatur id quia odio tenetur namlore
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
}

export default Projects;
