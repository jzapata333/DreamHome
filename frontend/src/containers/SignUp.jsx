import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUp } from '../reducks/users/operations';
import ImgLogoIcon from '../assets/img/dh.png';
import ImgCloseIcon from '../assets/img/icon-close.svg';
import MainImage from '../components/Common/MainImage';
import { push } from 'connected-react-router';
import Header from '../components/Common/Header';

function SignUp() {
    const dispatch = useDispatch();

    const closeButton = () => {
        dispatch(push('/'));
    };

    const [user_name, setUserName] = useState(''),
        [email, setEmail] = useState(''),
        [password, setPassword] = useState('');

    const inputUserName = event => {
        setUserName(event.target.value);
    };

    const inputEmail = event => {
        setEmail(event.target.value);
    };

    const inputPassword = event => {
        setPassword(event.target.value);
    };

    const signUpButton = () => {
        dispatch(signUp(user_name, email, password));
        setUserName('');
        setEmail('');
        setPassword('');
    };

    return (
        <div>
            <MainImage />
            <div class="main2">
                <div class="signin">
                    <img onClick={closeButton} class="close" src={ImgCloseIcon} alt="" />
                    <img class="logo signup" src={ImgLogoIcon} alt="" />
                    <p class="head">Sign up</p>
                    <p>Username</p>
                    <input type="text" onChange={inputUserName} name="" placeholder="Enter your username" id="" />
                    <p>Email</p>
                    <input type="text" onChange={inputEmail} name="" placeholder="Enter your email" id="" />
                    <p>Password</p>
                    <input type="password" onChange={inputPassword} name="" placeholder="Enter your password" id="" />
                    <button className="signup-submit" onClick={signUpButton} class="signup-button">
                        Sign up
                    </button>
                    <div class="foot"></div>
                    <p id="joinus">Already have an account? <span onClick={() => dispatch(push('/signin'))} style={{textDecoration: 'underline', color: '#3377cc', cursor: 'pointer'}}>Sign in</span></p>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
