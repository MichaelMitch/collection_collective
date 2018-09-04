import React from 'react'
import {Link} from 'react-router-dom'

import SearchBar from './SearchBar'
const Header = () => {

    return(
        <div className="header">
            <h3 className=" header-title">Collection Collective</h3>
            <Link to="/Mixes" className="header-child header-element"> Home </Link>
            <Link to="/AddMix" className="header-child header-element"> Add </Link>
            <SearchBar className="header-child"/>
        </div>
    )

}

export default Header