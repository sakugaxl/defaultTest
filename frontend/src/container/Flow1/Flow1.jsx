import React from "react";
import { motion } from "framer-motion";

import { AppWrap } from "../../wrapper";
import "./Flow1.scss";

const Flow1 = () => (
  
  <div className="app__charta app__flex">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__charta-info"
    >
    </motion.div>
  </div>
);

// export default Flow1
export default AppWrap(Flow1, "flowcharta");
