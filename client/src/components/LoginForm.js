import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useHistory } from 'react-router-dom';


const LoginForm = () => {
    // Set initial state for credentials and fetch check
    const [credentials, setCredentials] = useState({
        email: "",
        password: ""
    })
    const [isFetching, setIsFetching] = useState(false);

    // Sets credentials to it's state
    const handleChanges = event => {
        setCredentials(
            { ...credentials, [event.target.name]: event.target.value }
        )
        console.log('New credentials from LoginForm', credentials);
    }

    // Post credentials to local storage token
    const login = event => {
        event.preventDefault();
        setIsFetching(true);
        axiosWithAuth()
            .post('/login', credentials)
            .then(response => {
                localStorage.setItem('token', response.data.token);
            })
            .catch(error => console.log(error));
    }

    // Setting up useHistory to use on the signup button
    let history = useHistory();
    const handleClick = () => {
        history.push('/');
    };


    return (
        <div>
            <form onSubmit={login}>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={credentials.email}
                    onChange={handleChanges}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={credentials.password}
                    onChange={handleChanges}
                />
                <button onClick={handleClick}>Log in</button>
                {isFetching && 'Logging in...'}
            </form>
        </div>
    )
}



export default LoginForm;