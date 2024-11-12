import React from 'react'
import {Link, useNavigate } from 'react-router-dom'

function Header() {
  const Navigate = useNavigate()

  const handleClickHome = () => {
    Navigate('/DashBoard')
  }
  return (
    <div className='p-3 bg-secondary'>
        <h3 className='text-warning link'>Qtree Shop</h3>
      <div className='row justify-content-center pt-2 pb-2'>
        <div className='col-sm-12 col-md-7 col-lg-6 col-xl-5 d-flex justify-content-center'>
        <button className='btn btn-success me-2' onClick={handleClickHome}>Home</button>
        <input className='from-control' type='search' placeholder='search...' list='data'/>
        <Link to='/Cart'><button className='btn btn-success ms-2'>Cart</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Header
