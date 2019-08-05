import React from "react"
import NavBarCss from '../assets/css/NavBar.css'
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


class NavBar extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      dropdown: 'dropdown-hide',
      dropdownButton: 'dropdownButton-show',
      hrefLink: '#'
    }
  }

  openDropdown = () => {
    this.setState({
      dropdownButton: 'dropdownButton-hide',
      dropdown: 'dropdown-show'
    });
    document.addEventListener('click', this.closeDropdown);
  }

  closeDropdown = () => {
    this.setState({
      dropdownButton: 'dropdownButton-show',
      dropdown: 'dropdown-hide'
    });
    document.removeEventListener('click', this.closeDropdown);
  }

  f1 = () => {
    console.log("Entered");
  }

  f2 = () => {
    console.log("Left");
  }


  render(){
    return(
      <div className="navbar">
      {/*Stuff here*/}
        <div className="row test">

        {/*DEFAULT -- TITLE ALWAYS THERE*/}

          {/*MOBILE BELOW*/}
          <div className="mobile">
            <Link activeClass="active" to="home" spy={true} smooth={true} duration={500} >
              <div className="col-5 selection">
                <p id="title" className="text">{this.props.siteName}</p>
              </div>
            </Link>
            <div className="col-3"> {/*Dead Space*/}</div>
            <div className="col-4 parent-menu">
              <p className='border-menu text'>Menu</p>
            </div>
            <div className="sub-menu">
              <div className="row">
                <div className="col-4"> {/*Dead Space*/}</div>
                <div className="col-4"> {/*Dead Space*/}</div>
                <Link activeClass="active" to="about" offset={-80} spy={true} smooth={true} duration={500} >
                  <div className="col-4 selection" >
                    <p className="text">About</p>
                  </div>
                </Link>
              </div>
              <div className="row">
                <div className="col-4"> {/*Dead Space*/}</div>
                <div className="col-4"> {/*Dead Space*/}</div>
                <div className="col-4 selection">
                  <p className="text">Links</p>
                </div>
              </div>
              <div className="row">
                <div className="col-4"> {/*Dead Space*/}</div>
                <div className="col-4"> {/*Dead Space*/}</div>
                <div className="col-4 selection">
                  <p className="text">Projects</p>
                </div>
              </div>
              <div className="row">
                <div className="col-4"> {/*Dead Space*/}</div>
                <div className="col-4"> {/*Dead Space*/}</div>
                <div className="col-4 selection">
                  <p className="text">Contact</p>
                </div>
              </div>
            </div>
          </div>
          {/*MIDSISZED BELOW*/}
          <div className="mid-size">
            <Link activeClass="active" to="home" spy={true} smooth={true} duration={500} >
              <div className="col-3 selection">
                <p id="title" className="text">{this.props.siteName}</p>
              </div>
            </Link>
            <div className="col-3">{/*Dead Space*/}</div>

            <Link activeClass="active" to="about" offset={-80} spy={true} smooth={true} duration={500} >
              <div className="col-1-5 selection">
                <p className="text">About</p>
              </div>
            </Link>

            <div className="col-1-5 selection">
              <p className="text">Projects</p>
            </div>

            <div className="col-1-5 selection">
              <p className="text">Links</p>
            </div>
            <div className="col-1-5 selection">
              <p className="text">Contact</p>
            </div>
          </div>
          {/*DESKTOP BELOW*/}
          <div className="full-size">
            <Link activeClass="active" to="home" spy={true} smooth={true} duration={500} >
              <div className="col-2 selection">
                <p id="title" className="text">{this.props.siteName}</p>
              </div>
            </Link>
            <div className="col-5">{/*Dead Space*/}</div>
            <div className="col-1">{/*Dead Space*/}</div>

            <Link activeClass="active" to="about" offset={-80} spy={true} smooth={true} duration={500} >
                <div className="col-1 selection">
                  <p className="text">About</p>
                </div>
            </Link>

            <div className="col-1 selection">
              <p className="text">Projects</p>
            </div>

            <div className="col-1 selection">
              <p className="text">Links</p>
            </div>

            <div className="col-1 selection">
              <p className="text">Contact</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NavBar;
