import React from 'react';
import './About.scss';
import { AppWrap } from '../../wrapper';
import { legacy } from './data';
import { PieChart } from '../../components';

const About = () => {  

  return (
    <div className="about__section">
      <br />
      <div className="about__details">
        <h2 className="head-text">
          <span>Introduction</span>
        <br />
        </h2>

        <h2 className="head-text">
        Why Choose <span>Thapu Wealth?</span>
      </h2>

      <p className="p-text">
        <ul>⚫ Expertise: Our team consists of highly qualified estate planners, attorneys, and financial advisors with extensive knowledge and experience in the field of estate planning.</ul>
        <ul>⚫ Tailor-made Solutions: We recognize that every client's situation is unique, and we provide personalized solutions that align with their specific needs and objectives. </ul>
        <ul>⚫ Client-Centric Approach: Our clients are at the heart of everything we do. We prioritize open communication, active listening, and building long-lasting relationships. </ul>
        <ul>⚫ Integrity and Transparency: We adhere to the highest ethical standards, maintaining transparency throughout the entire estate planning process, during the draft process and execution of estate. </ul>
        <ul>⚫ Comprehensive Support: From initial consultation to ongoing support, we guide our clients at every step, ensuring that their estate plan remains up-to-date and relevant. </ul>
        <ul>⚫ Local Knowledge: As a South African company, we understand the country's legal and financial landscape, allowing us to offer specialized insight relevant to our clients' needs. Ensuring that our clients, and their families, do not worry about the complexities of our legal system. </ul>
      </p>
      </div>
      
      <h2 className="head-text"><span>Vision</span></h2>

      <p className="p-text">
      To provide excellent estate clients. Combining legal 
planning services, through education and guidance to all expertise and financial acumen, while maintaining high ethical standards, transparency, and client-centric approach, ensuring accurate family legacy transfer. 
      </p>
      <h2 className="head-text"><span>Mission</span></h2>

      <p className="p-text">
      To be the most trusted estate planning institution. Helping families and individuals understand, build and secure their financial future and bequeath their legacy with peace of mind, through partnerships with institutions across African. 
      </p>
      <br />
      <br />
      <div className="pie__chart">
        <p className="p-text">
          <PieChart legacy={legacy} />
        </p>
      </div>
    </div>
  );
};

// export default About;
export default AppWrap(About, 'about');