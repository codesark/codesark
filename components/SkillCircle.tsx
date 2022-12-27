import { motion } from 'framer-motion'
import React from 'react'

type Props = {
    directionLeft?: boolean;
}

export default function SkillCircle({ directionLeft }: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.img
            initial={{
                x: directionLeft ? -100 : 100,
            }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="h-20 w-20 xl:w-32 xl:h-32 rounded-full object-cover border border-gray-500
                filter group-hover:opacity-10 transition duration-300 ease-in-out"
            src="/images/favicon.ico"
            alt="Tech Used"
        />
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20 xl:w-32 xl:h-32 rounded-full z-0'>
            <div className="flex items-center justify-center h-full">
                <p className="text-3xl font-bold text-black opacity-100">100%</p>
            </div>
        </div>
    </div>
  )
}