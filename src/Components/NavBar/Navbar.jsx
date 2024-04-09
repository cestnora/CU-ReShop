import React from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import profile from '../Assets/profile.png'
import { Link } from 'react-router-dom'


const Navbar = () => {

    const [menu,setMenu] = React.useState("browse");

    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="" 
                width="100" 
                height="100"/>
                <p>CU@ReShop</p>
            </div>
            <ul className="nav-menu">
                <li onClick={()=>{setMenu("browse")}}><Link style={{ textDecoration: 'none'}} to='/'>Browse</Link>{menu==="browse"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("messages")}}><Link style={{ textDecoration: 'none'}} to='/messages'>Messages</Link>{menu==="messages"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("listing")}}><Link style={{ textDecoration: 'none'}} to='/listing'>Listing</Link>{menu==="listing"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("wishlist")}}><Link style={{ textDecoration: 'none'}} to='/wishlist'>Wishlist</Link>{menu==="wishlist"?<hr/>:<></>}</li>
            </ul>
            <div className="nav-profile">
                <Link to='profile'>
                    <img src={profile} alt="" width="30" height="30"/>
                </Link>
                
            </div>
        </div>
    )
}

export default Navbar