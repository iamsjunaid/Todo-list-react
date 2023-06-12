import { useState, useRef } from 'react';
import '@/styles/Navbar.module.css'; 
import { useOnClickOutside } from './useOnClickOutside';

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const ref = useRef();

  useOnClickOutside(ref, dropdown, () => setDropdown(false));

  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>
          <button onClick={() => setDropdown((prev) => !prev)}>
            About <span>&#8595;</span>
          </button>
          {dropdown && (
            <ul>
              <li>About Us</li>
              <li>Contact</li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
