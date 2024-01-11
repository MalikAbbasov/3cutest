import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.scss"

function Navbar() {
  return (
    <div>
        <div id="navbar">
            <div className="container">
                <div className="page_name">
                    <h3>Floral Studio</h3>
                </div>
                <div className="pages">
                    <ul>
                        <Link to="/"><li>Home</li></Link>
                        <Link to="/add"><li>Add</li></Link>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Blog</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar