import React, { useState } from 'react'

export default function Signup(props) {

    const [newUser, setNewUser] = useState({})

    const handleChange = (e) => {
        const user = {...newUser};
        user[e.target.name] = e.target.value;
        console.log(user);
        setNewUser(user);
    }
    const registerHandler = (e) => {
        e.preventDefault();
        props.register(newUser);
        e.target.reset();
    }

    return (
        <div>
            <h1>Signup</h1>
            <form onSubmit={registerHandler}>
                <div>
                    <label>First Name</label>
                    <input type='text' name='firstName' onChange={handleChange} className='form-control'></input>
                </div>

                <div>
                    <label>Last Name</label>
                    <input type='text' name='lastName' onChange={handleChange} className='form-control'></input>
                </div>

                <div>
                    <label>Username</label>
                    <input type='text' name='userName' onChange={handleChange} className='form-control'></input>
                </div>

                <div>
                    <label>Email Address</label>
                    <input type='email' name='emailAddress' onChange={handleChange} className='form-control'></input>
                </div>

                <div>
                    <label>Phone Number</label>
                    <input type='text' name='phoneNumber' onChange={handleChange} className='form-control'></input>
                </div>

                <div>
                    <p>Why are you using Stadium Spotter?</p>
                    <div>
                        <label for="stadiumOwner">Stadium Owner</label>
                        <input
                         className='form-check-input'
                         type="radio" 
                         name="role" 
                         id="stadiumOwner" 
                         value="stadium owner" 
                         onChange={handleChange}
                         ></input>
                    </div>
                    <div>
                        <label for='renter'>Booking a Stadium</label>
                        <input 
                        className='form-check-input' 
                        type='radio' 
                        name='role' 
                        id='renter'
                        value="renter"
                        onChange={handleChange}
                        ></input>
                    </div>
                </div>

                <div>
                    <label>Password</label>
                    <input type='password' name='password' onChange={handleChange} className='form-control'></input>
                </div>

                <div>
                    <input type='submit' value='Register' className='btn btn-primary'></input>
                </div>
            </form>
        </div>
    )
}
