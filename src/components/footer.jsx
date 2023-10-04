import { useNavigate, Link } from 'react-router-dom'

const footlink = [
  { name: "Jobs", href: "#" },
  { name: "Learn", href: "#" },
  { name: "Find a Mentor", href: "#" },
  { name: "Become a Mentor", href: "#" },
];

const Footer = () => {
  const navigate = useNavigate()
  const buttonRoute = () => {
    navigate('/')
  };
  return (
    <footer className='bg-[#003CFF] text-white lg:mt-[21rem] mx-auto '>
      <div className=' pt-[50px] lg:pt-[117px] text-center'>
        <h1 className=' lg:text-5xl text-[28px] lg:px-[6rem]  xl:px-[19rem] font-semibold'>Revolutionary platform designed to develop the next billion workforce.</h1>
        <p className=' text-xs md:text-2xl  font-normal my-8'>We are building the next generation workforce.</p>
        <Link
          to='/waitlist'
          className="rounded-[24px] bg-white py-2.5 px-8 text-sm font-semibold text-[#003CFF] shadow-sm  "
          onClick={buttonRoute}
        >
          Join waitlist
        </Link>
      </div>
      <div className=' mt-[6.9rem] flex flex-col lg:flex-row justify-between lg:items-center  w-10/12 mx-auto lg:pb-[117px] border-t border-white py-[77px]'>
        <h5 className='text-2xl hidden lg:block'>newbii</h5>
        <div className='lg:gap-8 gap-4 text-sm flex flex-col lg:flex-row  justify-between items-center'>
          {footlink.map((item) => (
            <Link className='gap-8' key={item.name} href={item.href}>{item.name}</Link>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer