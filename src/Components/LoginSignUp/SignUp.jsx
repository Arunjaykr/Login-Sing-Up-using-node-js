import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <>
        <div className="container">
            <h1>Sign Up</h1>
            <form action="">
                <input type="text" placeholder='Full name' />
                <input type="text" placeholder='Username' />
                <input type="password" placeholder='Password' />
                <input type="password" placeholder='Re-Enter Password' />
                <input type="email" placeholder='Email' />
                <input type="tel" placeholder='Phone Number' />
            </form>
            <div className="terms">
                <input type="checkbox"  id="checkbox" />
                <label htmlFor="checkbox">I agree to the <a href="#">Terms & Condition</a></label>
            </div>
            <button>Sign Up</button>
            <div className="member">
                Already have an account? <Link to='/login'>Login</Link>
            </div>
        </div>
    </>
  )
}

export default SignUp