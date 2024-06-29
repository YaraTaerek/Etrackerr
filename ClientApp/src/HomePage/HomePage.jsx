import React from 'react'

import './HomePage.css'

export default function HomePage() {
  return (
    <>
      <div className='background'></div>
      <div className='our-section'>
        <div className='our-srvices'>
            <p>Our Services</p>
            <ul>
                <li>Manage your finances</li>
                <li>Take a small digital loan</li>
                <li>Send  money to friends</li>
                <li> View monthly reports of your spendings</li>
            </ul>
        </div>
        <div className='our-team'>
            <p>Our Team</p>
            <ul>
                <li>Karen Ossama</li>
                <li>Yara Tarek</li>
                <li>Abdelrahman Hanafy</li>
                <li>Abdulrahman Allam</li>
            </ul>
        </div>
      </div>

    </>
  )
}
