/* eslint-disable react/prop-types */
// import React from 'react'

import { Link } from "react-router-dom";
import styles from "../../Styles/styles";
import { navItems } from "../../static/data";

const Navbar = ({ active }) => {
  return (
    <div className={`${styles.normalFlex}`}>
      {navItems &&
        navItems.map((i, index) => (
          <div key={i} className="flex">
            <Link
              to={i.url}
              className={`${
                active === index + 1 ? "text-[#17DD1F]" : "text-[#FFF]"
              } font-[500] px-6 cursor-pointer`}
            >
              {i.title}
            </Link>
          </div>
        ))}
    </div>
  );
};

export default Navbar;
