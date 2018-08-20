import React from 'react'
import {Link} from 'react-router-dom'

import SearchBar from './SearchBar'
const Header = () => {

    return(
        <div className="header">
            <h3>Collection Collective</h3>
            <Link to="/Home"> Home </Link>
            <SearchBar/>
            <Link to="/AddMix"> Add </Link>
        </div>
    )

}

export default Header