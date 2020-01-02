import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const SignupForm = () => {
    // Set initial state for credentials and fetch check
    const [credentials, setCredentials] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    })
    const [isFetching, setIsFetching] = useState(false);

    // Sets credentials to it's state
    const handleChanges = event => {
        setCredentials(
            {...credentials, [event.target.name]: event.target.value}
        )
        console.log('New credentials from LoginForm', credentials);
    }

    // Post credentials to local storage token
    const signup = event => {
        event.preventDefault();
        setIsFetching(true);
        axiosWithAuth()
            .post('/signup', credentials)
            .then(response => {
                localStorage.setItem('token', response.data.payload);
            })
            .catch(error => console.log(error));
    }


    return (
        <div>
            <form onSubmit={signup}>
                <input
                    type="firstName"
                    name="firstName"
                    placeholder="First Name"
                    value={credentials.firstName}
                    onChange={handleChanges}
                />
                <input
                    type="lastName"
                    name="lastName"
                    placeholder="Last Name"
                    value={credentials.lastName}
                    onChange={handleChanges}
                />
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
                <button>Sign up</button>
                {isFetching && 'Signing up...'}
            </form>
        </div>
    )
}

export default SignupForm;