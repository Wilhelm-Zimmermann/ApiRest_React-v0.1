import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import camera from '../../images/camera.png'
import { logout } from '../../services/auth'

import './header.css'

export default function Header() {
    const [link, setLink] = useState({
        link : false
    })
    const changeLocation = () => {
        // When we receive the event the link state, will be true or false
        setLink({...link, link : !link.link})
    }

    return(
        <header>
            <div className='center_header'>
                <div className='logo'><h2>f</h2><span>acebook</span></div>
                <div className='logout'onClick={logout}><FontAwesomeIcon icon={faSignOutAlt} size='2x'/></div>
                <div className='icon' onClick={() => changeLocation()}>
                    {/*Link to the path.This is a conditonal link*/ }
                    {/*if link is true the path will be '/' and false '/add_post' */}
                    <Link to={link.link ? '/app' : '/app/add_post'}>
                        <img alt='camera_icon' src={camera}/>
                    </Link>
                </div>
            </div>
        </header>
    )
}

