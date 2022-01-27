import React, { useState, useEffect } from 'react';
import ImgUseIcon from '../../assets/img/icon-user.svg';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { signOut } from '../../reducks/users/operations';
import Signin from '../../containers/Signin';
import { getUser } from '../../reducks/users/selectors';
import { push } from 'connected-react-router';
import {getTags} from '../../reducks/tags/selectors'

function Option({ setShowOption }) {
    const dispatch = useDispatch();
    const selector = useSelector(state => state);
    const key = localStorage.getItem('HOME_LOGIN_USER_KEY');
    const [checkUser, setCheckUser] = useState(false);
    const user = JSON.parse(localStorage.getItem('HOME_LOGIN_USER_KEY'));
    const tags = getTags(selector)

    const signOutButton = () => {
        dispatch(signOut());
        setCheckUser(false);
        dispatch(push('/signin'));
    };

    useEffect(() => {
        if (key != null) {
            setCheckUser(true);
        }
    }, [key]);
    return (
        <>
            <div class="main2" onClick={() => setShowOption(false)}>
                <div class="options">
                    <ul>
                        <li class="first">
                            <img src={ImgUseIcon} alt="" />
                            {checkUser && <p>{user.user_name}</p> ? <p>{user.user_name}</p> : <p>Welcome! <br/>Please Sign in</p>}
                        </li>
                        <li onClick={() => dispatch(push('/saved'))} class="first options-li">
                            Favorites
                        </li>
                        {tags && tags.length ? tags.map (t => {
                            if (t.type === 'Sell'){
                                return <li class="options-li" onClick={() => dispatch(push('/sale'))}>Sell</li>
                            } else {
                                return (<li class="options-li" onClick={() => dispatch(push(`Search?tag_id=${t.id}&tag_type=${t.type}`))}>{t.type}</li>)
                            }
                        }) : ''}
                        {checkUser && <p>{user.user_name}</p> ? <li class="options-li" onClick={signOutButton}>Sign Out</li> : <li class="options-li" onClick={signOutButton}>Sign in</li>}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Option;
