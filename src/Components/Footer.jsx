import { BsFacebook, BsGoogle, BsPinterest, BsTwitter ,BsRocketTakeoffFill} from 'react-icons/bs'
import '../Components/Componets.scss'

const Footer = () => {
  return (
    <>
        <footer className=''>
                <div className= " wrapper_footer">

        <div className="  p-0">
        <i>start with sobur</i>

<ul>
    <li>Our Company</li>
    <li>Our Locations</li>
    <li>Program </li>
    <li>Privacy Policy</li>
    <li>Your Account</li>
    <li>Contact Us</li>
</ul>

<div className="input-group mb-3">
    <input type="text" className="form-control me-3" placeholder="Please Enter Email"  aria-describedby="basic-addon2" />
       
            <span className="btn btn-outline-secondary" type="button"><BsRocketTakeoffFill/></span>
         
</div>

<div className='icon_foter'>
<span><BsFacebook /></span>
                        <span><BsTwitter /></span>
                        <span><BsGoogle /></span>
                        <span><BsPinterest /></span>
</div>

<p className="mb-0 ">2023 © Designed By Sbour. All Rights Reserved</p>
        </div>
                </div>

            </footer>
            {/* our contact menu  ernd */}

    </>
  )
}

export default Footer
