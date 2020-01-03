import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

<<<<<<< HEAD
// const SignupForm = ({ status }) => {
//     const [users, setUsers] = useState([]);
=======
const SignupForm = () => {
    // Set initial state for credentials and fetch check
    const [credentials, setCredentials] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    })
    const [isFetching, setIsFetching] = useState(false);
>>>>>>> df7dcdacdb2c63274ca2ce7ad74ce60513957c9f

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

<<<<<<< HEAD
//     useEffect(() => {
//         console.log("Status has changed!", status);
//         status && setUsers(users => [...users, status])
//     }, [status]);

//     return (
//         <div>
//             <form>
//                 <label>
//                     Email:
//                     <input type="email" />
//                 </label>
//                 <label>
//                     Password:
//                     <input type="password" />
//                 </label>
//                 <label>
//                     Confirm Password:
//                     <input type="password" />
//                 </label>
//             </form>
//         </div>
//     )
// }
=======

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
>>>>>>> df7dcdacdb2c63274ca2ce7ad74ce60513957c9f

export default SignupForm;