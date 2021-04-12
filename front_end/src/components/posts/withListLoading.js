import React from 'react'
import './list.css'
function WithListLoading(Component){
    // This is will show only when the page is loading
    return function WihLoadingComponent({ isLoading, ...props}){
        if(!isLoading) return <Component { ...props }/>
        return(
            <p className='loading'>Loading...</p>
        )
    }
}
export default WithListLoading