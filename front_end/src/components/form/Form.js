import React, { useState } from 'react'
import './form.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImages, faUpload } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'

export default function Form() {
    // create states to title and image
    const [title, setTitle] = useState('')
    const [img, setImg] = useState('')

    

    const submit = async () => {
        // url to post
        const url = 'http://localhost:8080/posts'
        // we put the elements into the form data 
        // to send to the backend
        const formData = new FormData()

        formData.append('title', title)
        formData.append('file', img)

        //creating a method post to the backend
        await axios.post(url, formData)
        .then(res => window.location.href = '/')
        .catch(err => alert('There are fields empty'))
        // when post as mode succesfully you will be redirected to '/'
        
    }

    const predictImage = (render) => {
        // the render is the input type file value
        // this function show a preview of the image

        // we get the img tag on the body
        let img = document.getElementById('img')

        // create reader.This will read our image
        let reader = new FileReader()

        reader.onload = (e) => {
            // here we set the img attribute to reader result
            img.setAttribute('src', e.target.result)
        }
        reader.readAsDataURL(render)
    }
return (
    <div className='form_center'>
        <div className='w80'>
            <input type='text'
                required
                id='title'
                onChange={e => setTitle( e.target.value )}
                placeholder='Title'
            />
        </div>
        <div className='w20'>
            <label htmlFor='file'>
                <FontAwesomeIcon id='icon_img' icon={faImages} size='2x' />
                <input type='file'
                    id='file'
                    onChange={async (e) => {
                        await setImg(e.target.files[0])
                        predictImage(e.target.files[0])
                    }
                    }
                />
            </label></div>
        <div className='img_preview'>
            <img id='img' src='#' alt='your img'/>
        </div>
        <div id='send'>
            <button id='btn_submit' onClick={() => submit()}>
                <FontAwesomeIcon icon={faUpload} size='3x' />
            </button>
        </div>
    </div>
)
}
