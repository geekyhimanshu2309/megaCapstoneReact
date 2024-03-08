import React from 'react'
import { useDispatch } from 'react-redux';
import authService from '../../appwrite/auth';
import { logout } from '../../store/authFile';


function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout());
        })
        //TODO: catch block
    }
  return (
    <button className='inline-block px-6 py-2 duration-200
    hover:bg-blue-100 rounded-full'
    onClick={logoutHandler}>
      Logout
    </button>
  )
}

export default LogoutBtn
