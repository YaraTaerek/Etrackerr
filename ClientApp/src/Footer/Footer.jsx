import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope,faPhone } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin , faTwitter, faFontAwesome , faFacebook } from '@fortawesome/free-brands-svg-icons'

import './Footer.css'
import nbeLogo from '../img/nbeLogo.jpeg'



library.add( faLinkedin ,faTwitter, faFontAwesome,faFacebook,faEnvelope,faPhone)




export default function Footer() {
  
  return (
    <>
  <div className='footer'>
    <span className='icons'>
    <FontAwesomeIcon icon={faTwitter} />
    <FontAwesomeIcon icon={faFacebook} />
    <FontAwesomeIcon icon={faLinkedin} />
    </span>
    <br/>
    <span className='contact'>
        <span>
        <FontAwesomeIcon icon={faEnvelope} />  example@mail.com
        </span>
        <span>
        <FontAwesomeIcon icon={faPhone} />  +02 0123456789
        </span>
    </span>
    <br/>
     <img src={nbeLogo} alt="logo" />
     <div className='copyright'>
        Copyrighrs reserved©2023.
    </div> 
  </div>

   </>
  )
}
