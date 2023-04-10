import React, {useState} from 'react'
import Header from "../../components/Header/Header";
import Foot from "../../components/Foot/Foot.js";
import Modal from '../../components/Modal/Modal';
import { useSelector } from 'react-redux';
import { getName, selectCurrentFirstname } from '../../features/auth/authSlice';
import { selectCurrentLastname } from '../../features/auth/authSlice';
import { useGetUserMutation } from '../../features/getUser/getUser';
import { useEffect } from 'react';
import { useDispatch } from "react-redux";


function User() {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false)
  const user = useSelector(selectCurrentFirstname)
  const amount = useSelector(selectCurrentLastname)
  const welcome = user ? `${user}` : " "

  const [getUser, isLoading] = useGetUserMutation();
  let firstname;
  let lastname;
useEffect(() => {
  //Retrieve user profile
 let userProfile = async () =>  {
 const data =  await getUser().then(
 (data) => data.data.body
);
firstname = data.firstName;
lastname = data.lastName;
 dispatch(getName({ firstname, lastname }));
 }
 userProfile()
  }, [])
  return (
    <div className='div_container'>
    <Header/>
    <main className={"main " + ( isOpen ? 'bg-light':'bg-dark')}>
      <div className="header">
        <h1>Welcome back<br />{welcome} {amount}!</h1>
        <button className="edit-button"  onClick={() => setIsOpen(true)}>Edit Name</button>
        <Modal open={isOpen} text="Welcome Back" onClose={() => setIsOpen(false) } state={isOpen}>
      </Modal>
      </div>
      <h2 className="sr-only">Accounts</h2>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    </main>
    <Foot/>
   </div>
  )
}

export default User;