import { Menu, X } from 'lucide-react';
import React, { useState } from 'react';

const navData = [
  {
    id: 1,
    name: "Home",
    path: "/"
  },
  {
    id: 2,
    name: "About",
    path: "/about"
  },
  {
    id: 3,
    name: "Services",
    path: "/services"
  },
  {
    id: 4,
    name: "Blog",
    path: "/blog"
  },
  {
    id: 5,
    name: "Contact",
    path: "/contact"
  }
];
const NavBar = () => {
  const [open,setOpen]=useState(false);
  const links = navData.map(route => <li key={route.id} className='mr-10 px-4 hover:bg-amber-300'><a href={route.path}>{route.name}</a></li>);
    return (
        <nav className='flex justify-between mt-4'>
            <span className='flex'onClick={()=>setOpen(!open)}>
              {
                open ? <X className='md:hidden'></X>: <Menu className='md:hidden'></Menu>
              }
              <ul className={`md:hidden absolute duration-1000
                ${open ? 'top-12':'-top-40'}
                `}>
                {links}
              </ul>
            <h2 className='ml-3'>My Nav Bar</h2>
            </span>
            <ul className='md:flex hidden'>
                {
                    links
                }
            </ul>
            <button>SignOut</button>
        </nav>
    );
};

export default NavBar;