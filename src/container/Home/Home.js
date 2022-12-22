import React from 'react'
import "./home.css"

const Home = () => {
  return (
    <div className="form__container">

    <div className='form__container-input'>
      <p>Name</p>
      <input type='text'/>
    </div>
    <div className='form__container-input'>
      <p>Contact no</p>
      <input type='text'/>
    </div>
    <div className='form__container-input'>
      <p>Address</p>
      <input type='text'/>
    </div>
    <div className='form__container-input'>
      <p>State</p>
      <input type='text'/>
    </div>
    <div className='form__container-input'>
      <p>City</p>
      <input type='text'/>
    </div>
    <div className='form__container-input'>
      <p>Pincode</p>
      <input type='text'/>
    </div>

    <div className="form__container-submit-btn">
      <button type='button'>Submit</button>
    </div>

    </div>
  )
}

export default Home