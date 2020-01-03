<<<<<<< HEAD
import React, { useState, useEffect } from 'react';

const LoginForm = ({ status }) => {
    const [users, setUsers] = useState({
        email: "",
        password: ""
    });

    const handleChanges = event => {
        setUsers({ ...users, [event.target.email]: event.trget.value });
    };

    const submitForm = event => {
        event.preventDefault();

        status(users);

        setUsers({ email: "", password: "" });
    };
    console.log("user state", users);
=======
import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

>>>>>>> df7dcdacdb2c63274ca2ce7ad74ce60513957c9f

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
            {...credentials, [event.target.name]: event.target.value}
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
                localStorage.setItem('token', response.data.payload);
            })
            .catch(error => console.log(error));
    }


    return (
        <div>
<<<<<<< HEAD
            <form onSubmit={submitForm}>
                <label htmlFor="name">Email:</label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    onChange={handleChanges}
                    value={users.email}
                />
                <label htmlFor="name">Password:</label>
                <input
                    id="password"
                    type="password"
                    name="password"
                    onChange={handleChanges}
                    value={users.password}
                />
=======
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
                <button>Log in</button>
                {isFetching && 'Logging in...'}
>>>>>>> df7dcdacdb2c63274ca2ce7ad74ce60513957c9f
            </form>
        </div>
    )
}



export default LoginForm;