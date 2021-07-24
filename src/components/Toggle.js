import { motion } from "framer-motion";
import React, { useState } from "react";
//when you wrap content up, you can have access to it via the 'children' parameter
// we have useState in here, so we can use the toggle functionality
const Toggle = ({ children, title }) => {
  const [toggle, setToggle] = useState(true);
  return (
    <div onClick={() => setToggle(!toggle)}>
      <motion.h4>{title}</motion.h4>
      {toggle ? children : ""}
    </div>
  );
};

export default Toggle;
