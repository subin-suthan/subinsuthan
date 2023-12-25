import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import { styles } from '../styles'
import { navLinks } from '../constants'
import { logo, menu, close } from '../assets'



const Navbar = () => {

  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  return (
    <nav className={`${styles.paddingX} w-full flex
                    items-center py-5 fixed z-20 bg-primary`}>
      <div className="w-full flex justify-between
                     items-center max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}>

          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex"><span className="sm:block hidden">Subin Suthan &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp;</span> <a href="https://github.com/subin-suthan">   <img src="./old_computers/git.png" width="25" height="25"></img></a> &nbsp;
          &nbsp;&nbsp; <a href="https://leetcode.com/CodeToThrive/">   <img src="./old_computers/leet.png" width="25" height="25"></img></a>
          &nbsp;
          &nbsp;&nbsp; <a href="https://www.linkedin.com/in/subin-suthan">   <img src="./old_computers/linkedin.png" width="25" height="25"></img></a></p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((Link) => (
            <li key={Link.id} className={`${active === Link.title
              ? "text-white"
              : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(Link.title)}>
              <a href={`#${Link.id}`}>{Link.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img src={toggle ? close : menu} alt="menu" className="w-[28px] h-[28px]
                              object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)} />

          <div className={`${!toggle ? 'hidden' :
            'flex'} p-6 black-gradient absolute
                                        top-20 right-0 mx-4 my-2 min-w[140px]
                                        z-10 rounded-x1`}>


            <ul className="list-none flex justtify-end items-start flex-col gap-4 ">
              {navLinks.map((Link) => (
                <li key={Link.id} className={`${active === Link.title
                  ? "text-white"
                  : "text-secondary"}font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    settoggle(toggle);
                    setActive(Link.title);
                  }}>
                  <a href={`#${Link.id}`}>{Link.title}</a>
                </li>
              ))}
            </ul>

          </div>
        </div>
      </div>

    </nav>
  )
}

export default Navbar