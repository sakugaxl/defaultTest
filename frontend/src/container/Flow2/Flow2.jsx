import React from "react";
import { motion } from "framer-motion";
import thapuChart from '../../assets/thapuchart2.png';

import { AppWrap } from "../../wrapper";
import "./Flow2.scss";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Flow2 = () => (
  <div className="app__chartb app__flex">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__chartb-info"
    >
    </motion.div>
  </div>
);

// export default Flow2
export default AppWrap(Flow2, "flowchartb");
