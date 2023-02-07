import React from 'react'
import {Link} from 'react-router-dom'
import bulldawg from '../../assets/bulldawg.png'
import search from '../../assets/search.png'
import house from "../../assets/house.png"
import book from "../../assets/book.png"
import bed from "../../assets/bed.png"

import './Navbar.css'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='container'>
                <img className="nav-image2" src={bulldawg} />
                <div className="searchbar">
                    <input className='searchbar-input' type='text' placeholder='Search...'></input>
                    <img src={search} />
                </div>
                <img className="nav-image" src={house} />
                <img className="nav-image" src={book} />
                <img className="nav-image" src={bed} />
            </div>
        </div>
    )
}

export default Navbar


