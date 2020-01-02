import React, { useState, useEffect } from 'react';
import axios from "axios";

const LoginForm = ({ status }) => {
    const [users, setUsers] = useState([]);


    useEffect(() => {
        console.log("Status has changed!", status);
        status && setUsers(users => [...users, status])
    }, [status]);

    return (
        <div>
            <form>
                <label>
                    Email:
                    <input type="email" />
                </label>
                <label>
                    Password:
                    <input type="password" />
                </label>
            </form>
        </div>
    )
}

export default LoginForm;