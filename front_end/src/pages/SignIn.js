import React ,{useState} from 'react'
import { Link } from 'react-router-dom'

import api from '../services/api'
import Logo from '../images/face_logo.jpg'
import { login } from '../services/auth'

import { Form, Container } from './styles'

export default function SignIn(){
    const [loginInfo , setLoginInfo] = useState({
        email : '',
        password: '',
        error: ''
    })

    const handleSignIn = async e => {
        e.preventDefault()
        const { email, password } = loginInfo
        if(!email || !password){
            setLoginInfo({ error : 'Dont let fields empty'})
        }else{
            try{
                const response = await api.post('/user/login',{email,password})
                login(response.data.token)
                window.location.href = '/app'
            }catch(err){
                setLoginInfo({ error : 'There is a problem with login'})
            }
        }
    }

    return (
        <Container>
          <Form onSubmit={handleSignIn}>
          <img src={Logo} alt="Facebook logo" />
            {loginInfo.error !== '' ? <p>{loginInfo.error}</p> : false}
            <input
              type="email"
              placeholder="E-mail address"
              onChange={e => setLoginInfo({...loginInfo, email: e.target.value })}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={e => setLoginInfo({...loginInfo, password: e.target.value })}
            />
            <button type="submit">Join</button>
            <hr />
            <Link to="/signup">Create a free account</Link>
          </Form>
        </Container>
      )
}