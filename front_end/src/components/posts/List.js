import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import './list.css'

const List = (props) => {
    const { posts } = props
    const [ coment, setComent ] = useState('')
    if(posts === null || posts.msg === 4) return <p id='notFound'>No posts found.Add a new post clicking on the camera icon</p>


    const deleteComent = async (id) => {
        // this functions delete a coment
        const url = 'http://localhost:8080/posts/'+id+'/delete'
        await axios.delete(url)
        window.location.reload()
    }

    const insertComent = async (id,coment) => {
        // this function add a new coment
        const url = 'http://localhost:8080/posts/'+id+'/coment'    
        
        const formData = new FormData()
        formData.append('coment', coment)
        await axios.put(url,formData)
        window.location.reload()
    }

    return(
        <div>
            <div className='center'>
                <div className='posts'>
                    {posts.map(post => {
                        // here we will get the backend
                        // the code below render the posts
                        return(
                            <div key={'post_'+post._id} className='single_post'>
                                <h3 key={'title_'+post._id}>{post.title}</h3>
                                <img key={'img_'+post._id} className='img_post' alt={post.title} src={'http://localhost:8080/uploads/'+post.img_url}/>
                                <div className='coments_container'>
                                    {// this is a conditional render
                                    // if has coments inside render the coments
                                    // else we put 'No coments'
                                    post.coments !== undefined?
                                    post.coments.map(i => {
                                        return(
                                            <div key={'single-coment_'+i.id_coment} className='single_coment'>
                                            <h5 key={'coment_'+i.id_coment}>{i.coment}</h5>
                                            <button key={'del_'+i.id_coment} id={i.id_coment} onClick={(e) => deleteComent(e.target.id)}>X</button>
                                            </div>
                                        )
                                    }):
                                    <h4>No Coments....</h4>
                                    }
                                    {/* the code below add a new coment based on post 'id' */}
                                    <div className='add_coment'>
                                        <input type='text' onChange={e => setComent(e.target.value)} placeholder='Type...'/>
                                        <button id={post._id} onClick={e => insertComent(e.target.id,coment)}>
                                            <FontAwesomeIcon icon={faPaperPlane} size='2x'/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default List