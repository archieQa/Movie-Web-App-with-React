import React from 'react'
import './header.css';


const header = () => {
    return (
        <div className='navbar'>
            <span onClick={()=> window.scroll(0,0)} className='navbar_name'>ArchMovies</span> 
        </div>
    )
}

export default header
