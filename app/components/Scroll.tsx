import React from 'react'
import { HiArrowDown } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Scroll = ({page}:{page:string}) => {
  return (
    <div className="flex flex-row items-center text-center justify-center ">
      <Link
        to={page}
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
      >
        <HiArrowDown size={35} className="animate-bounce" />
      </Link>
    </div>
  );
}

export default Scroll