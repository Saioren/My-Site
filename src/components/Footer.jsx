import { useState } from 'react'
import './Footer.css'

function FooterBar (){
    return (
        <>
            <div className='footer-wrap'>
                <div className='footer-info'>
                    <p>Contact me at mikrutevan@gmail.com</p>
                    
                </div>
                <div className='footer-copyright'>
                    <div> ©Saioren LLC 2023</div>
                </div>
                <div className='div-logo'>
                    <img className='site-logo' src='src\images\sai.JPG'></img>
                </div>

            </div>
        </>
    )
}

export default FooterBar