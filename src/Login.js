import React, { useState } from 'react'
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = event => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then((auth) => {
            history.push("/");
        }).catch((e) => alert(e.message));
    };

    const register = event => {
        event.preventDefault();

        auth.createUserWithEmailAndPassword(email, password).then((auth) => {
            history.push("/");
        }).catch((e) => alert(e.message));
    };

    return (
        <div className="login">
            <Link to="/">
                <img 
                    className="login__logo"
                    src="http://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon__logo.svg.png" 
                    alt="" 
                />
            </Link>

            <div className="login__container">
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input onChange={event => setEmail(event.target.value)} type="email" value={email}/>
                    <h5>Password</h5>
                    <input onChange={event => setPassword(event.target.value)} type="password" value={password} />
                    <button onClick={login} type="submit" className="login__signinbutton">Sign In</button>
                </form>

                <p>*By signing in you agree to our <strong><em>Terms & Conditions</em> </strong> policy.</p>
                <button onClick={register} className="login__registerbutton">Create Your Account</button>
            </div>
        </div>
    )
}

export default Login;