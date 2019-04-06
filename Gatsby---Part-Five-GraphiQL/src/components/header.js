import React from "react"
import Link from "gatsby"
const ListLink = props =>(
    <li style={{displat: 'inline-block', marginRight: '1rem'}}>
        <Link to={props.to}>{props.children}</Link>
    </li>
)


export default ({children}) => (
    <div>
        <header>
            <Link to="/">
                <h3>MySweetSite</h3>
            </Link>

            <ul>
                <ListLink to="/">Home</ListLink>
                <ListLink to="/about/">About</ListLink>
            </ul>
        </header>
        {children}
    </div>



)