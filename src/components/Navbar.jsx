import { useState, useRef } from 'react';
import '@/styles/Navbar.module.css';
import { useOnClickOutside } from './useOnClickOutside';
import { Route, Routes, Link } from 'react-router-dom';
import Aboutus from './Aboutus';
import Contact from './Contactus';

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const ref = useRef();

  useOnClickOutside(ref, dropdown, () => setDropdown(false));

  return (
    <>
      <Routes>
        <Route path="/"/>
        <Route path="/about-us" element={<Aboutus />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <nav>
        <ul>
          <li><Link to={"/"}>Home</Link></li>
          <li>
            <button onClick={() => setDropdown((prev) => !prev)}>
              About <span>&#8595;</span>
            </button>
            {dropdown && (
              <ul>
                <li><Link to={"/about-us"}>About Us</Link></li>
                <li><Link to={"/contact"}>Contact</Link></li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Navbar;
