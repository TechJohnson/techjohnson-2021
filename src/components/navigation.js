import React from "react"
import { Link } from "gatsby"

const Navigation = () => {

    return (
        <div className='container'>
            <div className="navigation">
                <div>
                    <p>This is where the navigation will be placed.</p>
                </div>
                <div>
                    <Link className="menuItem" to={'/'}>About</Link>
                    <Link className="menuItem">Projects</Link>
                    <Link className="menuItem">Services</Link>
                    <Link className="menuItem">Blog</Link>
                    <Link className="menuItem">Hire Me</Link>
                </div>
            </div>
        </div>
    )

}

export default Navigation