import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useHistory } from 'react-router-dom';

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
            { ...credentials, [event.target.name]: event.target.value }
        )
        console.log('New credentials from SignupForm', credentials);
    }

    // Post credentials to local storage token
    let history = useHistory();
    const signup = event => {
        event.preventDefault();
        setIsFetching(true);
        axiosWithAuth()
            .post('/signup', credentials)
            .then(response => {
                console.log(response.data);
                response.data.authorized===true ? history.push('/login') : alert("This account has already been created.");
            })
            .catch(error => console.log(error));
    }


    return (
        <div>
            <form name="signupForm" onSubmit={signup}>
                <input
                    type="firstName"
                    name="firstName"
                    placeholder="First Name"
                    value={credentials.firstName}
                    onChange={handleChanges}
                    required
                />
                <input
                    type="lastName"
                    name="lastName"
                    placeholder="Last Name"
                    value={credentials.lastName}
                    onChange={handleChanges}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={credentials.email}
                    onChange={handleChanges}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={credentials.password}
                    onChange={handleChanges}
                    required
                />
                <button>Sign up</button>
                {isFetching && 'Signing up...'}
            </form>
        </div>
    )
}

export default SignupForm;