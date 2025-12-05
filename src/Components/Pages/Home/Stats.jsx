
import React, { useState } from "react";
import CountUp from "react-countup";



const Stats = () => {
  const [isCounting, setIsCounting] = useState(false);
  const handleVisibilityChange = () => {
    setIsCounting(true);
  };
  return (
    <div className="text-center mt-[2rem] md:p-[4rem] ">
      <div>
        <h2 className="text-2xl font-bold text-primary">Statistics Says It All</h2>
        <p>
          Our Impact in Numbers. We provide the best to ensure the well-being of
          your family.
        </p>
      </div>

      <div>
        <div className=" grid grid-cols-2 md:grid-cols-4  shadow-xl md:mt-[2rem]">
          <div className="stat">
            <div className="stat-title">Total Doctors</div>
            <div className="stat-value">
              <CountUp
                start={0}
                end={65}
                delay={0}
                duration={20}
                enableScrollSpy
                suffix="+"
              >
                {({ countUpRef }) => (
                  <div>
                    <span ref={countUpRef} />
                  </div>
                )}
              </CountUp>
            </div>
            <div className="stat-desc">24/7 Availability</div>
          </div>

          <div className="stat">
            <div className="stat-title">Total Reviews</div>
            <div className="stat-value">
              <CountUp
                start={0}
                end={769}
                delay={0}
                duration={20}
                enableScrollSpy
                suffix="+"
              >
                {({ countUpRef }) => (
                  <div>
                    <span ref={countUpRef} />
                  </div>
                )}
              </CountUp>
            </div>
            <div className="stat-desc">
             Highest Rated 
            </div>
          </div>

          <div className="stat">
            <div className="stat-title">Patients</div>
            <div className="stat-value">
              <CountUp
                start={0}
                end={11379}
                delay={0}
                duration={20}
                suffix="+"
                enableScrollSpy
              >
                {({ countUpRef }) => (
                  <div>
                    <span ref={countUpRef} />
                  </div>
                )}
              </CountUp>
            </div>
            <div className="stat-desc">Cured and Satisfied</div>
          </div>
          <div className="stat">
            <div className="stat-title">Staff</div>
            <div className="stat-value">
              <CountUp
                start={0}
                end={179}
                delay={0}
                duration={20}
                enableScrollSpy
                suffix="+"
              >
                {({ countUpRef }) => (
                  <div>
                    <span ref={countUpRef} />
                  </div>
                )}
              </CountUp>
            </div>
            <div className="stat-desc">Professionals</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
