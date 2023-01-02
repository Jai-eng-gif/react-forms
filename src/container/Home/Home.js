import React, { useState } from 'react'
import "./home.css"







const Home = () => {
  const [Data,setData]= useState({
    name:'',
    contact_no:'',
    address:'',
    state:'',
    city:'',
    pincode:'',
  })

  


  const onformChange=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    setData({...Data,[name]:value })
 }
 
const onSubmit=()=>{
  console.log(Data)
}

  return (
    <div className="form__container">
    <div className='form__container-input'>
      <p>Name</p>
      <input type='text' name='name' onChange={onformChange} value={Data.name}  />
    </div>
    <div className='form__container-input'>
      <p>Contact no</p>
      <input type='text' name='contact_no' onChange={onformChange} value={Data.contact_no} />
    </div>
    <div className='form__container-input'>
      <p>Address</p>
      <input type='text' name='address' onChange={onformChange} value={Data.address} />
    </div>
    <div className='form__container-input'>
      <p>State</p>
      <input type='text' name='state' onChange={onformChange} value={Data.state} />
    </div>
    <div className='form__container-input'>
      <p>City</p>
      <input type='text' name='city' onChange={onformChange} value={Data.city} />
    </div>
    <div className='form__container-input'>
      <p>Pincode</p>
      <input type='text' name='pincode' onChange={onformChange} value={Data.pincode} />
    </div>
    <div className="form__container-submit-btn">
      <button type='button' onClick={onSubmit}>Submit</button>
    </div>

    </div>
  )
}

export default Home