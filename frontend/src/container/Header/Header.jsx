import React from 'react';
import { motion } from 'framer-motion';
import { FcFlowChart } from 'react-icons/fc';
import { ImEye } from 'react-icons/im'

import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import './Header.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = () => (
  <div className="app__header app__flex">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >
      <div className="app__header-badge">
        <div className="app__flex">
            <img src={images.logo2} alt="logo2" style={{ width: '800px', height: 'auto' }} />
          </div>
          <div>
          <p className="p-text" >Thapu Wealth Creation is a 100% black owned company established in South Africa focused on comprehensive estate planning services. Partnered with Capital Legacy Solutions, a Wills and Estate Planning company with years of experience, we understand the importance of preserving and protecting your assets for future generations.</p>
          </div>
        </div>
    </motion.div>

    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
      {/* Replace the image elements with the desired icons */}
      <div className="circle-cmp app__flex" data-tooltip="Vision">
        <ImEye size={80} />
        <div className="tooltip">Vision</div>
      </div>

      <div className="circle-cmp app__flex" data-tooltip="Mission">
        <FcFlowChart size={120} />
        <div className="tooltip">
          Mission
        </div>
      </div>
    </motion.div>
  </div>
);

// export default Header
export default AppWrap(Header, 'home');