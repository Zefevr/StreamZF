import React from "react"
import { Link } from "react-router-dom"
import GoogleAuth from "./GoogleAuth"

const Header = () => {
  return (
    <div className="ui fixed inverted pointing menu">
      <Link to="/" className="header item">
      <i className="large middle aligned podcast icon" />
      StreamZF
      </Link>
      <Link to="/" className="item">
        All Streams
      </Link>
      <div className="right menu">
        <GoogleAuth />
      </div>
    </div>
  )
}

export default Header
