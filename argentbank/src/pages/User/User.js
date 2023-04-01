import React, {useState} from 'react'
import Header from "../../components/Header/Header";
import Foot from "../../components/Foot/Foot.js";
import Modal from '../../components/Modal/Modal';
import { useSelector } from 'react-redux';
import { selectCurrentFirstname } from '../../features/auth/authSlice';
import { selectCurrentLastname } from '../../features/auth/authSlice';
function User() {
  const [isOpen, setIsOpen] = useState(false)
  const user = useSelector(selectCurrentFirstname)
  const amount = useSelector(selectCurrentLastname)
  const welcome = user ? `${user}` : " "
  return (
    <div className='div_container'>
    <Header/>
    <main className={"main " + ( isOpen ? 'bg-light':'bg-dark')}>
      <div class="header">
        <h1>Welcome back<br />{welcome} {amount}!</h1>
        <button class="edit-button"  onClick={() => setIsOpen(true)}>Edit Name</button>
        <Modal open={isOpen} onClose={() => setIsOpen(false)} text="Welcome Back"
       >
      </Modal>
      </div>
      <h2 class="sr-only">Accounts</h2>
      <section class="account">
        <div class="account-content-wrapper">
          <h3 class="account-title">Argent Bank Checking (x8349)</h3>
          <p class="account-amount">$2,082.79</p>
          <p class="account-amount-description">Available Balance</p>
        </div>
        <div class="account-content-wrapper cta">
          <button class="transaction-button">View transactions</button>
        </div>
      </section>
      <section class="account">
        <div class="account-content-wrapper">
          <h3 class="account-title">Argent Bank Savings (x6712)</h3>
          <p class="account-amount">$10,928.42</p>
          <p class="account-amount-description">Available Balance</p>
        </div>
        <div class="account-content-wrapper cta">
          <button class="transaction-button">View transactions</button>
        </div>
      </section>
      <section class="account">
        <div class="account-content-wrapper">
          <h3 class="account-title">Argent Bank Credit Card (x8349)</h3>
          <p class="account-amount">$184.30</p>
          <p class="account-amount-description">Current Balance</p>
        </div>
        <div class="account-content-wrapper cta">
          <button class="transaction-button">View transactions</button>
        </div>
      </section>
    </main>
    <Foot/>
   </div>
  )
}

export default User;