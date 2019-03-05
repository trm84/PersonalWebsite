import React from "react"
import NavBarCss from '../css/NavBar.css'
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


  render(){
    return(
      <div className="navbar">
      {/*Stuff here*/}
        <div className="row test">

        {/*DEFAULT -- TITLE ALWAYS THERE*/}

          {/*MOBILE BELOW*/}
          <div className="mobile">
            <a href={this.state.hrefLink}>
              <div className="col-5 selection">
                <p id="title" className="text">{this.props.siteName}</p>
              </div>
            </a>
            <div className="col-3"> {/*Dead Space*/}</div>
            <div className="col-4 parent-menu">
              <p className='border-menu text'>Menu</p>
            </div>
            <div className="sub-menu">
              <div className="row">
                <div className="col-4"> {/*Dead Space*/}</div>
                <div className="col-4"> {/*Dead Space*/}</div>
                <a onClick={this.props.goAbout}>
                  <div className="col-4 selection">
                    <p className="text">About</p>
                  </div>
                </a>
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
            <a href={this.state.hrefLink}>
              <div className="col-3 selection">
                <p id="title" className="text">{this.props.siteName}</p>
              </div>
            </a>
            <div className="col-3">{/*Dead Space*/}</div>

            <a onClick={this.props.goAbout}>
              <div className="col-1-5 selection">
                <p className="text">About</p>
              </div>
            </a>

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
            <a onClick={this.props.goHome}>
              <div className="col-2 selection">
                <p id="title" className="text">{this.props.siteName}</p>
              </div>
            </a>
            <div className="col-5">{/*Dead Space*/}</div>
            <div className="col-1">{/*Dead Space*/}</div>

            <a onClick={this.props.goAbout}>
              <div className="col-1 selection">
                <p className="text">About</p>
              </div>
            </a>

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
