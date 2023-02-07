import React,{useState} from 'react'
// import PropTypes from 'prop-types'

export default function Navbar(props) {
  
  return (
    <div className={`text-${props.mode==='dark'?'light':'dark'}`}>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.title}</a>
    <buthrefn className="navbar-hrefggler" type="buthrefn" data-bs-hrefggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="hrefggle navigation">
      <span className="navbar-hrefggler-icon"></span>
    </buthrefn>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auhref mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-a active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-a" href="#">link</a>
        </li>
        <li className="nav-item">
          <a className="nav-a active" aria-current="page"href="#">About</a>
        </li>
      </ul>
      <div className="form-check form-switch">
      <input className="form-check-input" onClick={props.hrefgglemode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.txt}</label>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}
// Navbar.propTypes={
//   title: PropTypes.string.isRequired
// };
// Navbar.defaultProps={
//   title:'set title'
// };
