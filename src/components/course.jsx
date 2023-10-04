import React from 'react'
import Skill from '../assets/course.png'
import { motion } from 'framer-motion';

const Course = () => {
  return (
    <div className="relative isolate px-6 lg:px-8">
      <div className="text-left flex justify-center flex-row lg:flex-row xs:flex-col gap-[64px] items-center mx-auto max-w-[65rem] pt-28 sm:pt-48 lg:pt-28">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 1.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.5 } }, // Add staggerChildren
          }}
          className="max-w-[25rem]"
        >
          <motion.p
            transition={{ delay: 0.4, duration: 0.8 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-base font-medium mb-4 text-[#000]"
          >
            ELEVATE YOUR SKILLS
          </motion.p>
          <motion.h3
            transition={{ delay: 0.6, duration: 1 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-[#013CFD] font-semibold mb-4 text-4xl"
          >
            Enriching Online Learning Experiences.
          </motion.h3>
          <motion.p
            transition={{ delay: 0.8, duration: 1.2 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-[20px] tracking-[-0.8] mb-4 font-normal text-[#00000080;]"
          >
            Explore a wide range of courses and expand your knowledge from industry experts, anytime and anywhere."
          </motion.p>
        </motion.div>
        <motion.div initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 1.6, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }} className="p-[55px] bg-[#F9FBFF] rounded-xl">
          <img src={Skill} alt="careers" className="shadow-lg rounded-xl" />
        </motion.div>
      </div>
    </div>
  )
}

export default Course