import React from 'react';
import './EstatePlanning.scss';
import { PieChart } from '../../components';
import { legacy } from './data';
// import { AppWrap } from '../../wrapper';

import 'react-vertical-timeline-component/style.min.css';

const EstatePlanning = () => {  
  return (
    <div className="pie__section">
      <div className="pie-chart-container">
        <PieChart legacy={legacy} />
      </div>
    </div>
  );
};

export default EstatePlanning;
// export default AppWrap(EstatePlanning, 'estateplanning');