import { useState } from 'react'
import './AboutMe.css'

function AboutMe (){
    return (
        <div className='content-wrap'><div className='content'>
        <div className='about-me-wrap'>
            <div className='about-div'>
                <div className='circle'>
                    <img className='my-photo' src='src\images\Capture.JPG'>
                    </img>              
                </div>
                <div className='name-stats'>
                    <div>   
                    <p>Evan Daniel Mikrut</p>
                    <p className='web-dev'>Web Developer</p></div>
                    <div className='icon-links'>
                       <img className='twitter-icon' src="src\images\twittericon.svg" alt="" />
                        <img className='github-icon' src="src\images\githubicon.png" alt="" />
                        <img className='instagram-icon' src="src\images\instagramicon.svg" alt="" />
                        <img className='facebook-icon' src="src\images\facebookicon.svg" alt="" />
                    </div>
                        <div className='footer-links'>
                            <button>DOWNLOAD CV</button>
                            <button>CONTACT ME</button>
                        </div>
                    
                </div>
            </div>
        </div>
            <div className='info-div-wrap'>
                <div className='info-div'>
                <h1>ABOUT ME</h1>
<div className='paragraph-div'>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima vero dolor ipsa nisi quidem laboriosam dolores natus cupiditate quas dolore, consequatur deleniti aliquid veritatis mollitia, dolorum iure ipsum saepe voluptate.</p></div>
<div>   
<div className='detail age-div'><p>Age</p>
<p>22</p>
</div>
<div className='detail residence-div'><p>Residence</p>
<p>USA</p>
</div>
<div className='detail freelance-div'><p>Freelance</p>
<p>Available</p>
</div>
<div className='detail home-div'><p>Location</p>
<p>Grand Rapids, MI</p>
</div>
</div>

                </div>
            </div>
            


       



    </div>
</div>

    )
}

export default AboutMe