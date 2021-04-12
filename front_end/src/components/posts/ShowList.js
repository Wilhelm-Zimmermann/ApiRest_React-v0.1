import React, {useEffect, useState} from 'react'
import List from './List'
import WithListLoading from './withListLoading'
import axios from 'axios'

function Get(){
    const ListLoading = WithListLoading(List)
    const [ appState, setAppState ] = useState({
        loading: false,
        data : null
    })

    useEffect(() => {
        // setting loading to true
        setAppState({ loading : true })
        const url = 'http://localhost:8080/posts'
        // geting all posts on backend
        axios.get(url)
        .then(data => {
            const allPosts = data.data
            // when all is done loading is set to false
            setAppState({ loading : false, data : allPosts})
        })
    }, [setAppState])
    return (
        <div>
            <ListLoading isLoading={appState.loading} posts={appState.data}></ListLoading>
        </div>
    )
}
export default Get