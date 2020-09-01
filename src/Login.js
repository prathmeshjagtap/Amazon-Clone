import React ,{useState} from 'react'
import './Login.css'
import { Link ,useHistory} from 'react-router-dom'
import {auth} from './firebase'

function Login() {

    const history= useHistory();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

     const login = event =>{
        event.preventDefault(); // stops the default refreshing
        auth
        .signInWithEmailAndPassword(email, password)
        .then((auth) => {
            history.push('/');
        })
        .catch((e) => alert(e.message));
    }
     const register = event =>{
        event.preventDefault(); // stops the default refreshing
            //  register logic
       auth
            .createUserWithEmailAndPassword(email,password)
            .then((auth) =>{
                // created a user and logged in ,  redirect to home page
                history.push("/")
            }) 
            .catch((e) => alert(e.message))
    }

    return (
        <div className="login">
            <Link to='/'>
            <img className='login_logo' 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" 
            alt="logo of amazon">
            </img>
            </Link>
            <div className='login_container'>
                <h1>Sign in </h1>
                <form>
                    <h5>E-mail</h5>
                    <input value={email} onChange={e =>setEmail(e.target.value)} type='email'/>
                    <h5>Password</h5>
                    <input value={password} onChange={e => setPassword(e.target.value)} type='password'/>
                    <button onClick={login} type='submit' className='login_signinButton'>Sign In</button>
                </form>
                <p>
                By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
                </p>
                <button onClick={register} className='login_registrationButton'>Create your Amazon account</button>

            </div>
            </div>
    )
}

export default Login
