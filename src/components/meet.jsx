import React from 'react'
import Connect from '../assets/mentor.png'
import { motion } from 'framer-motion';

const Meet = () => {
  return (
    <div className="relative isolate px-6 lg:px-8">
      <div className="text-left flex justify-center  xl:flex-row xs:flex-col gap-[64px] items-center mx-auto max-w-[65rem] pt-28 sm:pt-48 lg:pt-28">
        <motion.div initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ delay: 1.6, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }} className="md:p-[55px] xs:p-[20px] bg-[#013CFD1A] rounded-xl xs:order-1 xl:order-none ">
          <img src={Connect} alt="careers" className=' shadow-lg rounded-xl' />
        </motion.div>

        <div className='max-w-[25rem]'>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 1.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.5 } }, // Add staggerChildren
            }}
            className="max-w-[25rem] xs:order-none xl:order-1"
          >
            <motion.p
              transition={{ delay: 0.4, duration: 0.8 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              className="text-base font-medium md:mb-4 xs:mb-2 text-[#000]"
            >
              CONNECT WITH EXPERIENCED MENTORS
            </motion.p>
            <motion.h3
              transition={{ delay: 0.6, duration: 1 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              className="text-[#013CFD] font-semibold mb-4 text-4xl"
            >
              Unleash Your Full Potential.
            </motion.h3>
            <motion.p
              transition={{ delay: 0.8, duration: 1.2 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              className="lg:text-[20px] xs:text-[15px] tracking-[-0.8] xs:mb-1 lg:mb-4 font-normal text-[#00000080;]"
            >
              Gain valuable guidance and insights to accelerate your professional growth on our mentor-matching platform."
            </motion.p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Meet