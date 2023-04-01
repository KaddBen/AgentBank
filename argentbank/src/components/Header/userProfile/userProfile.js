import React  from 'react'
import { FaUserCircle } from 'react-icons/fa';
import { FaSignOutAlt } from 'react-icons/fa';
import { logOut } from "../../../features/auth/authSlice";
import { selectCurrentFirstname } from '../../../features/auth/authSlice';
import { useSelector } from 'react-redux';
import '../Header.css'

const UserProfile = () => {
  let currentUser = useSelector(selectCurrentFirstname)
  return ( 
  <div className='sign_out'>
    <a class="main-nav-item" href="./user.html">
    <FaUserCircle/>
     {currentUser}
    </a>
    <a class="main-nav-item" href="./" onClick={logOut()}>
      <FaSignOutAlt/>
      Sign Out
    </a>
    </div>
  )
}

export default UserProfile;