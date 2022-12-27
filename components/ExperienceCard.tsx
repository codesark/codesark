import { motion } from "framer-motion";
import React from "react";
import { urlFor } from "../sanity";
import { Experience } from "../typings";

type Props = {
  experience: Experience;
};

function ExperienceCard({ experience }: Props) {
  console.log(experience);
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] 
        snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden"
    >
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="rounded-full h-32 w-32 xl:w-[200px] xl:h-[200px] object-cover object-center"
        src={urlFor(experience?.companyImage).url()}
        alt="Company Logo"
      />

      <div className="px-5 md:px-10">
        <h4 className="text-4xl font-light">CTO of BETABRAINS</h4>
        <p className="font-bold text-2xl mt-1">BETABRAINS</p>
        <div className="flex space-x-2 my-2">
          {experience.technologies.map((tech) => (
            <img
              key={experience._id}
              className="h-10 w-10 rounded-full"
              src={urlFor(tech.image).url()}
              alt={tech.title}
            />
          ))}
        </div>
        <p className="uppercase py-5 text-gray-500">
          {new Date(experience.dateStarted).toDateString()} -{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience.dateEnded).toDateString()}
        </p>

        <ul className="list-disc space-y-4 ml-5 text-md">
          {experience.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
