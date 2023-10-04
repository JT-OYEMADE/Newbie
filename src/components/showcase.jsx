import React from 'react'
import ShowImg from '../assets/showcase.png'
import { useNavigate, Link } from 'react-router-dom'
import { motion } from 'framer-motion';





const ShowCase = () => {
  const navigate = useNavigate()
  const buttonRoute = () => {
    navigate('/')
  };
  return (
    // <div className="  mx-auto md:h-full mt-30 xs:mt-8 sm:mt-8 w-full text-black">
    //   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo nisi, quae ducimus reprehenderit autem recusandae accusamus exercitationem repellat ut rerum consequatur, temporibus aperiam quam reiciendis aut cupiditate asperiores dolores sit doloribus distinctio atque quidem voluptatem. Odio animi quisquam sunt in repellat, esse error aperiam ipsa nihil est ea, incidunt assumenda veritatis facere. Rem, officiis ratione assumenda aliquid, dolore totam quisquam culpa maiores pariatur, facere eveniet. Laborum dignissimos dolorum saepe temporibus quae voluptates molestias accusamus, esse nemo, facere consectetur impedit excepturi consequatur. Debitis corrupti quos aspernatur mollitia suscipit voluptatem, ab et optio voluptatibus minus culpa asperiores, doloremque libero aut iusto quisquam.
    // </div>
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div className="mx-auto max-w-[65rem] pt-28 ">
        {/* <div className="hidden sm:mb-8 sm:flex sm:justify-center">

        </div> */}
        <div className="text-center">
          <motion.h1 initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }} className="text-4xl  font-bold tracking-tight text-gray-900 md:text-[64px] md:leading-[76.8px] lg:w-[698px] mx-auto">
            <span className='text-[#013DFE]'> Revolutionalizing </span>  the next billion workforce.
          </motion.h1>
          <motion.p initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }} className="mt-6 text-xl text-gray-600 max-w-[41.9375rem] mx-auto  font-normal">
            Providing a platform to build careers, connect with mentors, expand professional networks, and gain industry experience.
          </motion.p>
          <motion.div initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }} className="mt-8 flex items-center justify-center gap-x-6">
            <Link
              to='/waitlist'
              className="rounded-[24px] bg-[#003CFF] py-2.5 px-8 text-sm font-semibold text-white shadow-sm "
              onClick={buttonRoute}
            >
              Join waitlist
            </Link>
            <Link
              to="/"
              className="rounded-[24px] border border-[#003CFF] py-2.5 px-8 text-sm font-semibold text-[#013CFC] shadow-sm "
              onClick={buttonRoute}
            >
              Learn More
            </Link>
          </motion.div>
          <motion.div initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ delay: 0, duration: 0.5 }}
            variants={{
              hidden: { opacity: 1, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}>
            <img src={ShowImg} className='rounded-[16px] shadow-lg mt-[61px] xl:mt-[100px]' alt="" />
          </motion.div>
        </div>
      </div>
    </div>

  )
}

export default ShowCase

