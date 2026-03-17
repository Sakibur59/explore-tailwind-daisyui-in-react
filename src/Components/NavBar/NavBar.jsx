import { Menu } from 'lucide-react';
import React from 'react';

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
    return (
        <nav className='flex justify-between'>
            <Menu className='md:hidden'></Menu>
            <h2>My Nav Bar</h2>
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