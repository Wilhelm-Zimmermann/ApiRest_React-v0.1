import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/error.css'

export default function Errors(){
    return(
        <div className='center_error'>
            <h1>Page not found</h1>
            <Link to='/app'>Go back to the app</Link>
        </div>
    )
}