import { useState } from 'react'
import './Header.css'
import path from 'path';
import user from '../images/user.png';
import edit from '../images/edit.png';
import inbox from '../images/envelope.png';
import settings from '../images/settings.png';
import help from '../images/question.png';
import logout from '../images/log-out.png';


function NavBar (){

const [open, setOpen] = useState(false);

    return (
        <>
            <div className='header-wrap'>
                <div className='logo-div'>
                    <img className='site-logo' src='src\images\sai.JPG'></img>
                    
                </div>
                
                <div className='menu-div'>   
                    <div className='menu-trigger' onClick={()=>{setOpen(!open)}}><img className='hamburger-icon' src='src\images\Hamburger_icon.svg.png'></img>
                    </div>
                    <div className={`dropdown-menu ${open? 'active' : 'inactive'}`}>
<h3>Evan Mikrut</h3><span className='web-dev'>Website Designer</span>
                        <ul>
                            <DropdownItem img = {user} text = {"My Profile"}/>
                            <DropdownItem img = {edit} text = {"Edit Profile"}/>
                            <DropdownItem img = {inbox} text = {"Inbox"}/>
                            <DropdownItem img = {settings} text = {"Settings"}/>
                            <DropdownItem img = {help} text = {"Help"}/>
                            <DropdownItem img = {logout} text = {"Logout"}/>
                        </ul>
                    </div>
     
                </div>
            </div>
        </>
    );
}

function DropdownItem(props){
    return (
        <li className='dropdownItem'>
<img src={props.img}></img>
<a>{props.text}</a>
        </li>
    )
}

export default NavBar