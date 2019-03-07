import React from "react"

import AboutCss from '../css/About.css'
import {text} from '../assets/json/aboutme.json'

class About extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      aboutMeText: text,
    }
  }


  render(){
    return(
      <div className="about">
          <div className="mobile">
            <div className="row aboutTitle">
              <div className="col-12">
                <h1>About Me</h1>
              </div>
            </div>
            <div className="row aboutBody">
              <div className="col-12">
                <p>
                  Hi, my name is Tyler Matthews. In May of 2019, I graduated from the Univerity of Akron (B.S.E.E.)
                  with a specialization in both Embedded and Power Systems.
                  During my time there I worked at FirstEnergy Corp as an engineering co-op where I
                  comissioned substation equipment, wrote custom software to do data analysis on databases containing over
                  a million entries, and did real time analysis on their transmission system. On top of that, I worked
                  on the biomedical engineering design team where we designed and built a robotic arm for a girl at Akron
                  Children's hospital, I worked on the FSAE electric vehicle team where we designed and built a custom
                  80kW electric vehicle to compete against other universities, and I was the lead for my senior design team
                  "Cycle-Assist".
                  <br /> <br />
                  My interests very from design and implementation of small scale electronics to writing full scale software
                  applications. In my spare time I enjoy learning about all types of current day technology.
                  Whenever I have time, I build various projects that implement the knowledge I gained during my undergraduate
                  degree as well as things I have decided to learn on my own. As far as electronics go, my current interests lie
                  in battery management systems and A/C motor controllers (both synchronous and permanent magnet machines). My
                  software interests mainly focus on C (for writing to MCUs), python (for quick testing and simulations), and
                  javascript for building projects such as this website (which is written via React).
                  <br /><br />
                  On this site you'll find short blogs about the projects I have been involved in. The projects I am currently
                  working on will be listed with snippets about the progress that has been made, while the projects that have
                  all ready been completed will be listed with all of the snippets compiled into one post. If you have any questions
                  feel free to contact me on LinkedIn or the email listed below. If you want to view any of the schematics, board layouts,
                  or software for my projects feel free to check out my GitHub.
                </p>
              </div>
            </div>
          </div>

          <div className="mid-size">
            <div className="row aboutTitle">
              <div className="col-12">
                <h1>About Me</h1>
              </div>
            </div>
            <div className="row aboutBody">
              <div className="col-6">
                <p>
                  Hi, my name is Tyler Matthews. In May of 2019, I graduated from the Univerity of Akron (B.S.E.E.)
                  with a specialization in both Embedded and Power Systems.
                  During my time there I worked at FirstEnergy Corp as an engineering co-op where I
                  comissioned substation equipment, wrote custom software to do data analysis on databases containing over
                  a million entries, and did real time analysis on their transmission system. On top of that, I worked
                  on the biomedical engineering design team where we designed and built a robotic arm for a girl at Akron
                  Children's hospital, I worked on the FSAE electric vehicle team where we designed and built a custom
                  80kW electric vehicle to compete against other universities, and I was the lead for my senior design team
                  "Cycle-Assist".
                  <br /><br />
                  My interests very from design and implementation of small scale electronics to writing full scale software
                  applications. In my spare time I enjoy learning about all types of current day technology.
                  Whenever I have time, I build various projects that implement the knowledge I gained during my undergraduate
                </p>
              </div>
              <div className="col-6">
                <p>
                  degree as well as things I have decided to learn on my own. As far as electronics go, my current interests lie
                  in battery management systems and A/C motor controllers (both synchronous and permanent magnet machines). My
                  software interests mainly focus on C (for writing to MCUs), python (for quick testing and simulations), and
                  javascript for building projects such as this website (which is written via React).
                  <br /><br />
                  On this site you'll find short blogs about the projects I have been involved in. The projects I am currently
                  working on will be listed with snippets about the progress that has been made, while the projects that have
                  all ready been completed will be listed with all of the snippets compiled into one post. If you have any questions
                  feel free to contact me on LinkedIn or the email listed below. If you want to view any of the schematics, board layouts,
                  or software for my projects feel free to check out my GitHub.
                </p>
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
                  "Cycle-Assist".
                </p>
              </div>
              <div className="col-4">
                <p>
                  My interests very from design and implementation of small scale electronics to writing full scale software
                  applications. In my spare time I enjoy learning about all types of current day technology.
                  Whenever I have time, I build various projects that implement the knowledge I gained during my undergraduate
                  degree as well as things I have decided to learn on my own. As far as electronics go, my current interests lie
                  in battery management systems and A/C motor controllers (both synchronous and permanent magnet machines). My
                  software interests mainly focus on C (for writing to MCUs), python (for quick testing and simulations), and
                  javascript for building projects such as this website (which is written via React).
                </p>
              </div>
              <div className="col-4">
                <p>
                  On this site you'll find short blogs about the projects I have been involved in. The projects I am currently
                  working on will be listed with snippets about the progress that has been made, while the projects that have
                  all ready been completed will be listed with all of the snippets compiled into one post. If you have any questions
                  feel free to contact me on LinkedIn or the email listed below. If you want to view any of the schematics, board layouts,
                  or software for my projects feel free to check out my GitHub.
                </p>
              </div>
            </div>
          </div>
      </div>
    )
  }
}

export default About;
