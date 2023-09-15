import React from "react";
import "./About.scss";
import { AppWrap } from "../../wrapper";
import { legacy } from "./data";
import { PieChart } from "../../components";

const About = () => {
  return (
    <div className="about__section">
      <br />
      <div className="about__details">
        <h2 className="head-text">
          <span>Introduction</span>
          <br />
        </h2>
        <p className="p-text">
            Thapu Wealth Creation is a 100% black owned company established in South Africa focused on comprehensive estate planning services. Partnered with Capital Legacy Solutions, a Wills and Estate Planning company with years of experience, we understand the importance of preserving and protecting your assets for future generations. Our team of expert estate planners, attorneys, tax experts and financial advisors work together to offer our clients tailor- made solutions to meet their unique needs and ensure that your wealth and legacy are safeguarded. 
            We, as Thapu Wealth, identified a gap in the financial planning and advisory sector when it comes to Estate planning. Coupled with a growing lack of understanding about the importance of a Last Will and Testament, we continued to meet clients that did not understand the consequences of the lack of Estate Planning. This neglected aspect of financial planning, for years, has resulted in many families suffering, sometimes losing assets, when the primary breadwinner, or even the only breadwinner, passing away. 
          </p>

          <br />
          <br />
          <br />

        <h2 className="head-text">
          Why Choose <span>Thapu Wealth?</span>
        </h2>

        <p className="p-text">
          <ul>
            ⚫ Expertise: Our team consists of highly qualified estate planners,
            attorneys, and financial advisors with extensive knowledge and
            experience in the field of estate planning.
          </ul>
          <ul>
            ⚫ Tailor-made Solutions: We recognize that every client's situation
            is unique, and we provide personalized solutions that align with
            their specific needs and objectives.{" "}
          </ul>
          <ul>
            ⚫ Client-Centric Approach: Our clients are at the heart of
            everything we do. We prioritize open communication, active
            listening, and building long-lasting relationships.{" "}
          </ul>
          <ul>
            ⚫ Integrity and Transparency: We adhere to the highest ethical
            standards, maintaining transparency throughout the entire estate
            planning process, during the draft process and execution of estate.{" "}
          </ul>
          <ul>
            ⚫ Comprehensive Support: From initial consultation to ongoing
            support, we guide our clients at every step, ensuring that their
            estate plan remains up-to-date and relevant.{" "}
          </ul>
          <ul>
            ⚫ Local Knowledge: As a South African company, we understand the
            country's legal and financial landscape, allowing us to offer
            specialized insight relevant to our clients' needs. Ensuring that
            our clients, and their families, do not worry about the complexities
            of our legal system.{" "}
          </ul>
        </p>
      </div>
    
        <br />
        <br />
        <br />

<div className="about__container">
  <div id="vision">
    <h2 className="head-text">Vision</h2>
    <p className="p-text"> 
        To provide excellent estate clients. Combining legal planning services,
        through education and guidance to all expertise and financial acumen,
        while maintaining high ethical standards, transparency, and
        client-centric approach, ensuring accurate family legacy transfer.
    </p>
  </div>
  <div id="mission">
    <h2 className="head-text"><span>Mission</span></h2>
    <p className="p-text">
        To be the most trusted estate planning institution. Helping families and
        individuals understand, build and secure their financial future and
        bequeath their legacy with peace of mind, through partnerships with
        institutions across African.
    </p>
  </div>
</div>
        <br />
        <br />
        <br />
      <div className="about__container">
  <div id="hurdles">
    <h2 className="head-text">Legacy<span> Hurdles</span></h2>
    <p className="p-text"> 
    <ul>
    ⚫ Largest Real Estate Owner is deceasted estates (Cemeteries)
      </ul>
      <ul>
    ⚫ Will Estates without liquidity
      </ul>
    </p>
  </div>
  <div id="statistics">
    <h2 className="head-text"><span>Legacy </span>Stats</h2>
    <p className="p-text">
    <ul>
    ⚫ The Deceased own more than 50% of Real Estate due to open estates 
      </ul>
      <ul>
    ⚫ Over 40% of Wills do not have Estate Liquidity 
      </ul>
    </p>
  </div>
</div>
<div>
<br />
<br />
<br />
  <p className="p-text">
<h2 className="head-text">Generational Wealth vs <span>Generational Collapse</span></h2>
<ul>
⚫ GW - Updated Last Will & Testament; Estate Liquidity; Family Succession Plan 
</ul>
<ul>
  ⚫ GC - No Last Will & Testament in place; No Estate Liquidity; Family Feuds
</ul>
</p>
</div>
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
export default AppWrap(About, "about");
