import React from "react"

import AboutCss from '../css/About.css'


class About extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    }
  }

  links = () => {
    console.log("WORKS");
  }


  render(){
    return(
      <div className="about">
          <div className="mobile">
            <div className="row">
              <div className="col-12">
                <h1>About Me</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <p>This column number 1.This column number 1.This column number 1.</p>
              </div>
            </div>
          </div>

          <div className="mid-size">
            <div className="row">
              <div className="col-12">
                <h1>About Me</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <p>This column number 1.This column number 1.This column number 1.</p>
              </div>
              <div className="col-6">
                <p>This column number 2.This column number 2.This column number 2.</p>
              </div>
            </div>
          </div>

          <div className="full-size">
            <div className="row aboutTitle">
              <div className="col-12">
                <h1>About Me</h1>
              </div>
            </div>
            <div className="row aboutBody">
              <div className="col-4">
                <p>
                  Hi, my name is Tyler Matthews. In May of 2019, I graduated from the Univerity of Akron (B.S.E.E.)
                  with a specialization in both Embedded and Power Systems.
                  During my time there I worked at FirstEnergy Corp as an engineering co-op where I
                  comissioned substation equipment, wrote custom software to do data analysis on databases containing over
                  a million entries, and did real time analysis on their transmission system. On top of that, I worked
                  on the biomedical engineering design team where we designed and built a robotic arm for a girl at Akron
                  Children's hospital, I worked on the FSAE electric vehicle team where we designed and built a custom
                  80kW electric vehicle to compete against other universities, and I was the lead for my senior design team
                  Cyle-Assist.
                </p>
              </div>
              <div className="col-4">
                <p>My interests very from design and implementation of small scale electronics. </p>
              </div>
              <div className="col-4">
                <p>This column number 3.This column number 3.This column number 3.</p>
              </div>
            </div>
          </div>
      </div>
    )
  }
}

export default About;
