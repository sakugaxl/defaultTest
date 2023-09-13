import React from 'react';
import { motion } from 'framer-motion';

import './TrainOverlay.scss';

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const TrainOverlay = ({ train, onClose }) => {
  return (
    <motion.div
      className="information-overlay"
      variants={overlayVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="overlay-content">
        <h2>{train.title}</h2>
        <p>{train.description}</p>
        {train.warmup && (
          <div>
            <h3>Warm-Up Routine:</h3>
            <ul>
              {train.warmup.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            </div>
        )}

        {train.workout && (
          <div>
            <h3>Workout:</h3>
            <ul>
              {train.workout.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            </div>
        )}

        {train.skills && (
          <div>
            <h3>Skills:</h3>
            <ul>
              {train.skills.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            </div>
        )}

        {train.stretch && (
          <div>
            <h3>Stretch:</h3>
            <ul>
              {train.stretch.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            </div>
        )}

        <button onClick={onClose}>Close</button>
      </div>
    </motion.div>
  );
};

export default TrainOverlay;
