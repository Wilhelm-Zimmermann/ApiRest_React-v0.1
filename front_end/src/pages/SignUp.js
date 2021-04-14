import React, {useState} from 'react'
import { Link, withRouter } from 'react-router-dom'

import { Form, Container } from './styles'
import api from '../services/api'
import Logo from '../images/face_logo.jpg'



function SignUp (){
    const [ userInfo, setUserInfo ] = useState({
        user : '',
        email : '',
        password : '',
        error : ''
    })
    
    const handleSignUp = async e => {
        e.preventDefault()

        console.log(userInfo)
        const { user , email, password } = userInfo
        if(!user || !email || !password){
            setUserInfo({ error : 'Dont let empty fields'})
        }else{
            try{
                
                await api.post('/user/signup',{user, email, password})
                window.location.href = '/'
            }catch(err){
                console.log(err)
                setUserInfo({ error : 'An error ocurred plese try again'})
            }
        }

    }
    return(
    <Container>
        <Form>
        <img src={Logo} alt="Facebook logo" />
        {userInfo.error !== '' ? <p>{userInfo.error}</p>: false}
          <input
            type="text"
            placeholder="User name"
            onChange={e => setUserInfo({...userInfo, user : e.target.value})}
          />
          <input
            type="email"
            placeholder="E-mail address"
            onChange={e => setUserInfo({...userInfo, email: e.target.value})}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={e => setUserInfo({...userInfo,password: e.target.value})}
          />
          <button type="submit" onClick={handleSignUp}>Register</button>
          <hr />
          <Link to="/">Login</Link>
        </Form>
      </Container>
    )
}

export default withRouter(SignUp)