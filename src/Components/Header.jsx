import '../Components/Componets.scss'
import {FaHome} from 'react-icons/fa'
import {TbSettingsStar} from 'react-icons/tb'
import {IoMdPhotos} from 'react-icons/io'
import {GiTeamIdea} from 'react-icons/gi'
import {BiSolidPhoneCall} from 'react-icons/bi'
import {BsFillEmojiSmileFill} from 'react-icons/bs'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {  useState } from 'react'
 
const Header = () => {

    const [sticky , setSticky] = useState(false)
    

    
        const handleScroll = () =>{
            if(window.scrollY > 100){
                setSticky(true)
            }else{
                setSticky(false)
            }
        }
    




    window.addEventListener("scroll", handleScroll)

    return (
        <>
        

<header className={sticky ? " fixed" : null}>
    
 
<Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"><i className='fw-bold text-dark'>START WITH SOBUR</i></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-start py-4 py-lg-1 ly-md-1 py-xxl-1 gap-2 gap-lg-3 gap-md-3 gap-xxl-3">
          <li className="nav-item active">
                            <a className="nav-link mb-0" href="#home">   < FaHome className='nav_icon'/>  HOME</a>
                        </li>
          <li className="nav-item active">
                            <a className="nav-link mb-0" href="#about">   < BsFillEmojiSmileFill className='nav_icon'/>  ABOUT</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#services">   < TbSettingsStar className='nav_icon'/>  SERVICES</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#OurGallery">   < IoMdPhotos className='nav_icon'/> GALLERY </a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#our_team">   < GiTeamIdea className='nav_icon'/> TEAM </a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#contact">   < BiSolidPhoneCall className='nav_icon'/> CONTACT </a>
                        </li>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
 
</header>
 
        </>
    )
}

export default Header
