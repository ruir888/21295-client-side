import React from 'react';
import { logout, update } from '../actions/userActions';
import { useDispatch, useSelector } from 'react-redux';

function ProfileScreen(props) {

  const dispatch = useDispatch();

  const userSignin = useSelector(state => state.userSignin);
  const { userInfo } = userSignin;
  const handleLogout = () => {
    dispatch(logout());
    props.history.push("/signin");
  }

  const userUpdate = useSelector(state => state.userUpdate);
  const { loading, success, error } = userUpdate;




  return <div className="profile">
    <div className="profile-info">
      <div className="form">
       
          <ul className="form-container">
            <li>
              <button type="button" onClick={handleLogout} className="button secondary full-width">Logout</button>
            </li>

          </ul>
       
      </div>
    </div>
  </div>
}

export default ProfileScreen;