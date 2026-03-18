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
  const [open,setOpen]=useState(false)
    return (
        <nav className='flex justify-between'>
            <span className='flex'onClick={()=>setOpen(!open)}>
              {
                open ? <X className='md:hidden'></X>: <Menu className='md:hidden'></Menu>
              }
              
            <h2>My Nav Bar</h2>
            </span>
            <ul className='flex'>
                {
                    navData.map(route => <li className='mr-10'><a href={route.path}>{route.name}</a></li>)
                }
            </ul>
            <button>SignOut</button>
        </nav>
    );
};

export default NavBar;