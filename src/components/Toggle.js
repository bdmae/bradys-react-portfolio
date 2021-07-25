import { motion } from "framer-motion";
import { fade } from "../animation";
import React, { useState } from "react";
//when you wrap content up, you can have access to it via the 'children' parameter
// we have useState in here, so we can use the toggle functionality

//animate shared layout has a weird bug which can be fixed by putting 'layout' in the function of the component itself
// in order for everything to work, you can't have normal divs
// you need to change every normal div to 'motion.div'

const Toggle = ({ children, title }) => {
  const [toggle, setToggle] = useState(true);
  return (
    <motion.div layout onClick={() => setToggle(!toggle)}>
      <motion.h4 layout variants={fade}>
        {title}
      </motion.h4>
      {toggle ? children : ""}
    </motion.div>
  );
};

export default Toggle;
