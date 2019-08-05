import React from "react"

import HomeCss from '../assets/css/Home.css'
import LabImage from '../images/LAB.jpg';


class Home extends React.Component{
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
      <div className="home">
          <img src={LabImage} className="homeImage"/>
          <div className="title">
            <h1>Welcome To</h1>
            <h3>Tyler Matthews' Website</h3>
          </div>
      </div>
    )
  }
}

export default Home;
