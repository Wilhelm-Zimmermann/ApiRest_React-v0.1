import React, {useEffect, useState} from 'react'
import List from './List'
import WithListLoading from './withListLoading'
import api from '../../services/api'


function Get(){
    const ListLoading = WithListLoading(List)
    const [ appState, setAppState ] = useState({
        loading: false,
        data : null
    })

    useEffect(() => {
        // setting loading to true
        setAppState({ loading : true })
        // geting all posts on backend
        api.get('/posts')
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
