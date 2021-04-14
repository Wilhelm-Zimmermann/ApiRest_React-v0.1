import React, { useState } from 'react'
import './form.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImages, faUpload } from '@fortawesome/free-solid-svg-icons'
import api from '../../services/api'

export default function Form() {
    // create states to title and image
    const [ formData , setFormData ] = useState({
        title : '',
        img : '',
        error : ''
    })

    const submit = async () => {
        const { title, img } = formData
        // We put all in form data, because we have an image
        const data = new FormData()
        data.append('title',title)
        data.append('file',img)

        if(!title || !img){
            setFormData({ error : 'Dont let fieds emtpy'})
        }else{
            try{
                // Here we send the method post to the backend
                await api.post('/posts',data)
                window.location.href = '/'
            }catch(err){
                setFormData({ error : 'There is a problem with posts'})
            }
        }
        
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
                onChange={e => setFormData({...formData,title: e.target.value})}
                placeholder='Title'
            />
        </div>
        <div className='w20'>
            <label htmlFor='file'>
                <FontAwesomeIcon id='icon_img' icon={faImages} size='2x' />
                <input type='file'
                    id='file'
                    onChange={ (e) => {
                        setFormData({...formData,img: e.target.files[0]})
                        predictImage(e.target.files[0])
                    }
                    }
                />
            </label></div>
            {formData.error !== null ? <p>{formData.error}</p>: false}
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
