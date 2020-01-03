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


    useEffect(() => {
        console.log("Status has changed!", status);
        status && setUsers(users => [...users, status])
    }, [status]);

    return (
        <div>
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
            </form>
        </div>
    )
}



export default LoginForm;