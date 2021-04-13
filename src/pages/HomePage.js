import React from 'react';
import { Link } from 'react-router-dom';
import './styles/HomePage.css';
import heroLogo from '../images/platziconf-logo.svg';
import logo from '../images/astronauts.svg';

class HomePage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="main">
          <div className="row">
            <div className="col-4 info">
              <div>
                <img className="img-fluid logo" src={heroLogo} alt="logo"/>
              </div>
              <h1 className="pt-4">PRINT YOUR BADGES</h1>
              <p className="pt-2">The easiets way to manage your<br/>conference</p>
              <div className="buton">
                <Link to="/badges/new" className="btn btn-primary link">Start Now</Link>
              </div>
            </div>
            <div className="col-6">
              <img src={logo} alt="logo"/>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default HomePage;
