import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  pageInfo: PageInfo;
};

function About({ pageInfo }: Props) {
  return (
    <div className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative -mb-20 flex-shrink-0 rounded-full h-56 w-56 object-cover 
            md:mb-0 md:rounded-lg  md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]"
        src={urlFor(pageInfo?.profilePic).url()}
        alt="Profile Picture"
      />

      <motion.div
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="space-y-10 px-0 md:px-10"
      >
        <h4 className="text-3xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]">little</span>{" "}
          background
        </h4>
        <p className="text-base">{pageInfo?.backgroundInformation}</p>
      </motion.div>
    </div>
  );
}

export default About;
