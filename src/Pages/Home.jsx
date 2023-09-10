import '../Styles/Home.scss'
import aboutImg from '../assets/istockphoto-1165977130-612x612.jpg'
import img1 from '../assets/48x48x1.png'
import img2 from '../assets/48x48x2.png'
import img3 from '../assets/48x48x3.png'
import img4 from '../assets/48x48x4.png'
import img5 from '../assets/48x48x5.png'
import img6 from '../assets/48x48x6.png'
import img7 from '../assets/48x48x7.png'
import img8 from '../assets/48x48x8.png'
import img9 from '../assets/64x64x3.png'
import img10 from '../assets/64x64x2 (1).png'
import img11 from '../assets/64x64x4.png'
import img12 from '../assets/24x24x2.png'
import img13 from '../assets/24x24x1.png'
import { GiFlowerStar } from 'react-icons/gi'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { BsFacebook, BsGoogle, BsPinterest, BsTwitter } from 'react-icons/bs'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { FaHome } from 'react-icons/fa'
import { TbSettingsStar } from 'react-icons/tb'
import { IoMdPhotos } from 'react-icons/io'
import { GiTeamIdea } from 'react-icons/gi'
import { BiSolidPhoneCall } from 'react-icons/bi'

import Footer from '../Components/Footer'
const Home = () => {

    const [product, setProduct] = useState([])
    const getData = async () => {


        await axios.get("https://api.unsplash.com/search/photos/?photos?page=2&query=office&client_id=x5veEQV3_PogTvllMuRzMvaNf35fsN14nTSWCKcQ2Zk")
            .then((res) => {

                setProduct(res.data.results)

            })
            .catch((erorr) => {
                console.log(erorr)
            })
    }

    useEffect(() => {


        getData()
    }, [])

    console.log(product)
    return (
        <>


            {/* hero section ----------------------------------------------------------------------------------- */}
            <div className="hero" id='home'>

                <div className="hero_back_img">

                </div>
                <div className="content">
                    <div className="">
                        <h2>We Are Startup Business Solutions</h2>

                    </div>
                    <p className='pra-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, magni aliquid.</p>

                    <a href="" className='btn_box'> red more <span className='btn-1'></span></a>
                </div>

            </div>


            {/* hero section end ----------------------------------------------------------------------------------- */}

            {/*  about ----------------------*/}
            <section className="about" id='about'>
                <div className="conatiner-xxl">
                    <div className="row justify-content-between gap-5 gap-lg-0 gap-md-0 gap-xxl-0 ">
                        <div className="col-lg-4 col-12">
                            <img src={aboutImg} className='img-fluid h-100' alt="" />
                        </div>
                        <div className="col-lg-4">
                            <div className="about_box">
                                <div className="subtitle">
                                    <h3>about us</h3>
                                </div>
                                <p className='pra_text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore nisi fugit magnam eum ex reprehenderit eligendi possimus nam. Fugiat placeat magni illo repudiandae quibusdam voluptatem dicta quam odit totam quaerat.

                                </p>
                                <p className='pra_text mb-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit minima atque dicta perspiciatis? Hic quisquam, pariatur nulla quos facere maiores! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, consectetur?</p>
                                <a href="" className='btn_box d-inline-block'> red more <span className='btn-1'></span></a>


                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="what_do">
                                <div className="subtitle">
                                    <h3>What We Dos</h3>
                                </div>
                                <p className='pra_text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum voluptatem quidem perferendis necessitatibus labore veniam distinctio, debitis laboriosam ratione dolorem!</p>

                                <ul className='p-0 m-0 d-flex flex-column gap-3 text-uppercase  pra-2 mb-4'>
                                    <li ><span className=' '><GiFlowerStar className='  me-3' /></span>   DONEC VARIUS SODALES</li>
                                    <li><span><GiFlowerStar className='  me-3' /></span>
                                        CLASS APTENT TACITI HIMENAEOS</li>
                                    <li><span><GiFlowerStar className='   me-3' /></span>
                                        AENEAN ARCU VIVERRA VARIUS</li>
                                </ul>

                                <a href="" className='btn_box d-inline-block'> red more <span className='btn-1'></span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* about end ------------------- */}

            {/* our services start section------------------- */}

            <section className="services " id='services'>
                <div className="container-xxl">

                    <div className="">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="subtitle d-inline-block">
                                    <h3>Our Services</h3>
                                </div>

                                <p className="pra_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore excepturi aspernatur veniam minus, eum adipisci eos molestias iste similique cupiditate quas. Repellendus sit adipisci delectus, assumenda tempora ullam omnis, recusandae deleniti accusantium voluptates provident in porro aliquid laudantium rem exercitationem.</p>


                                <ul className='p-0 m-0 d-flex flex-column gap-3 text-uppercase  pra-2 mb-4'>
                                    <li ><span className=' '><GiFlowerStar className='  me-3' /></span>   DONEC VARIUS SODALES</li>
                                    <li><span><GiFlowerStar className='  me-3' /></span>
                                        CLASS APTENT TACITI HIMENAEOS</li>
                                    <li><span><GiFlowerStar className='   me-3' /></span>
                                        AENEAN ARCU VIVERRA VARIUS</li>
                                </ul>

                                <a href="" className='btn_box d-inline-block mb-4 mb-lg-0 mb-md-0 mb-xxl-0'> red more <span className='btn-1'></span></a>
                            </div>
                            <div className="col-lg-6">
                                <div className="row g-4">
                                    <div className="col-lg-6">
                                        <div className="services_box text-center ">
                                            <img src={img1} alt="opps sorry" className="img-fluid" />
                                            <h2 className="subtitle-2">Corporate Training</h2>
                                            <p className="pra_text mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="services_box text-center ">
                                            <img src={img2} alt="opps sorry" className="img-fluid" />
                                            <h2 className="subtitle-2">Corporate Training</h2>
                                            <p className="pra_text mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="services_box text-center ">
                                            <img src={img3} alt="opps sorry" className="img-fluid" />
                                            <h2 className="subtitle-2">Corporate Training</h2>
                                            <p className="pra_text mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="services_box text-center ">
                                            <img src={img4} alt="opps sorry" className="img-fluid" />
                                            <h2 className="subtitle-2">Corporate Training</h2>
                                            <p className="pra_text mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
            {/* our services start section end ------------------- */}

            {/* Our Features--------------------- */}

            <section className="OurFeatures">
                <div className="container-xxl">
                    <div className=" title text-center">
                        <h2>Our Features</h2>
                    </div>

                    <div className="body_service">
                        <div className="row g-4">
                            <div className="col-lg-6">
                                <ul>
                                    <li className='d-flex gap-3'>

                                        <div>
                                            <img src={img5} alt="" className="img-fluid" />
                                        </div>
                                        <div>
                                            <h4 className="subtitle-2">24*7 Premium Support</h4>
                                            <p className="pra_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam vero aut ipsam autem sapiente aliquid.</p>
                                        </div>
                                    </li>
                                    <li className='d-flex gap-3'>

                                        <div>
                                            <img src={img6} alt="" className="img-fluid" />
                                        </div>
                                        <div>
                                            <h4 className="subtitle-2">
                                                30+ Domain Expertise</h4>
                                            <p className="pra_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam vero aut ipsam autem sapiente aliquid.</p>
                                        </div>
                                    </li>
                                    <li className='d-flex gap-3'>

                                        <div>
                                            <img src={img7} alt="" className="img-fluid" />
                                        </div>
                                        <div>
                                            <h4 className="subtitle-2">
                                                100+ Happiest Clients</h4>
                                            <p className="pra_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam vero aut ipsam autem sapiente aliquid.</p>
                                        </div>
                                    </li>
                                    <li className='d-flex gap-3'>

                                        <div>
                                            <img src={img8} alt="" className="img-fluid" />
                                        </div>
                                        <div>
                                            <h4 className="subtitle-2">Accurate Tracking & Reporting</h4>
                                            <p className="pra_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam vero aut ipsam autem sapiente aliquid.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <img src="https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg?auto=compress&cs=tinysrgb&h=627&fit=crop&w=1200" alt="" className="img-fluid h-100 banner1" />
                            </div>
                        </div>
                    </div>


                    <div className="body-2 py-5">

                        <div className="row g-5 ">
                            <div className="col-lg-6 position-relative">
                                <img src="https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg?
                auto=compress&cs=tinysrgb&h=627&fit=crop&w=1200" alt="" className="img-fluid h-100" />
                                <div className="content_box">
                                    <p className="pra_text text-white mb-0">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates possimus sapiente aspernatur. Quasi, nihil! Porro sapiente doloribus ea est neque?</p>
                                </div>
                            </div>
                            <div className="col-lg-6  bg-light">
                                <div className="wrapper">
                                    <div className="subtitle d-inline-block">
                                        <h3>Work Beyond The Limit</h3>
                                    </div>
                                    <p className="pra_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi perferendis quibusdam repellat vero a, soluta error corrupti reprehenderit. Asperiores iste eaque eveniet beatae aspernatur est alias rem cum illum, quisquam, aut ullam odio quaerat nulla, voluptate quidem perferendis minima debitis.</p>
                                    <p className="pra_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi perferendis quibusdam repellat vero a, soluta error corrupti reprehenderit. Asperiores iste eaque eveniet beatae aspernatur est alias rem cum illum, quisquam, aut ullam odio quaerat nulla, voluptate quidem perferendis minima debitis.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="body-3  ">

                        <div className="row g-5  ">
                            <div className="col-lg-6 order-1 position-relative">
                                <img src="https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg?
                auto=compress&cs=tinysrgb&h=627&fit=crop&w=1200" alt="" className="img-fluid h-100" />
                                <div className="content_box">
                                    <p className="pra_text text-white mb-0">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates possimus sapiente aspernatur. Quasi, nihil! Porro sapiente doloribus ea est neque?</p>
                                </div>
                            </div>
                            <div className="col-lg-6   bg-light">
                                <div className="wrapper">
                                    <div className="subtitle d-inline-block">
                                        <h3 className='d-inline-block'>Work Beyond The Limit</h3>
                                    </div>
                                    <p className="pra_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi perferendis quibusdam repellat vero a, soluta error corrupti reprehenderit. Asperiores iste eaque eveniet beatae aspernatur est alias rem cum illum, quisquam, aut ullam odio quaerat nulla, voluptate quidem perferendis minima debitis.</p>
                                    <p className="pra_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi perferendis quibusdam repellat vero a, soluta error corrupti reprehenderit. Asperiores iste eaque eveniet beatae aspernatur est alias rem cum illum, quisquam, aut ullam odio quaerat nulla, voluptate quidem perferendis minima debitis.</p>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* Our Features end --------------------- */}




            {/*Our Gallery-------------------------------- */}

            <section className="OurGallery" id='OurGallery'>
                <div className="container-xxl">
                    <div className=" title text-center">
                        <h2>Our Gallery</h2>
                    </div>
                </div>

                <div className="menu">
                    <ul className='d-flex align-items-center justify-content-center gap-4 flex-wrap'>
                        <a href="" className='active'>All</a>
                        <a href="">Development</a>
                        <a href="">Design</a>
                        <a href="">Branding</a>
                        <a href="">Marketing</a>
                        <a href="">Graphic</a>
                        <a href="">Design</a>
                    </ul>
                </div>

                <div className="gallary_item">
                    <div className="row py-5 g-4">

                        {
                            product.slice(0, 8).map((item, index) => {
                                return (

                                    <div className="col-lg-3 col-md-6" key={index} >
                                        <img src={item.urls.regular} alt="s" className="img-fluid" />

                                    </div>

                                )
                            })
                        }

                    </div>
                </div>

            </section>

            {/*Our Gallery end -------------------------------- */}

            {/* our price ------------------ */}


            <section className="ourprice" id='ourprice'>
                <div className="container-xxl">
                    <div className=" title text-center">
                        <h2>Our Pricing</h2>
                    </div>
                    <div className="row ">
                        <div className="col-lg-4">
                            <div className="price_table">
                                <ul>
                                    <li className='header_price  subtitle-2'> <span className='  '>
                                        STANDARD</span> $30 / yr</li>
                                    <li>Download SDK </li>
                                    <li>24/7 Support</li>
                                    <li>Update Priority</li>
                                    <li>Adds Free</li>
                                    <li>Support Priority</li>

                                    <li><a href="" className='btn_box d-inline-block'>  buy now <span className='btn-1'></span></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="price_table">
                                <ul>
                                    <li className='header_price  subtitle-2'> <span className='  '>BUSINESS</span> $90 / yr</li>
                                    <li>Download SDK </li>
                                    <li>24/7 Support</li>
                                    <li>Update Priority</li>
                                    <li>Adds Free</li>
                                    <li>Support Priority</li>

                                    <li><a href="" className='btn_box d-inline-block'>  buy now <span className='btn-1'></span></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="price_table">
                                <ul>
                                    <li className='header_price  subtitle-2'> <span className='  '>PREMIUM</span> $120 / yr</li>
                                    <li>Download SDK </li>
                                    <li>24/7 Support</li>
                                    <li>Update Priority</li>
                                    <li>Adds Free</li>
                                    <li>Support Priority</li>

                                    <li><a href="" className='btn_box d-inline-block'>  buy now <span className='btn-1'></span></a></li>
                                </ul>
                            </div>
                        </div>


                    </div>
                </div>
            </section>

            {/* our price end ---------------- */}

            {/* our team ----------------- */}

            <section className="our_team" id='our_team'>
                <div className="container-xxl">
                    <div className=" title text-center">
                        <h2>Our Team</h2>
                    </div>

                    <div className="row g-4">

                        <div className="col-lg-3 col-md-6">
                            <div className="member_list">
                                <img src="https://media.istockphoto.com/id/1419898772/photo/confident-business-man-standing-with-arms-crossed-in-an-office-looking-proud-and-happy-alone.webp?b=1&s=170667a&w=0&k=20&c=V-rhe77lW4iIi-NgzKVSYyk9Mn5D6ZXKi1xt38b-yz0=" alt="" className="img-fluid h-100" />
                                <div className='mem_adress'>
                                    <ul className='d-flex gap-3'>
                                        <span><BsFacebook /></span>
                                        <span><BsTwitter /></span>
                                        <span><BsGoogle /></span>
                                        <span><BsPinterest /></span>
                                    </ul>

                                </div>

                            </div>
                            <div className="name text-center py-3">
                                <h2 className="subtitle-2 mb-0">
                                    Peterpaul

                                </h2>
                                <p className='pra_text'>Developer</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="member_list">
                                <img src='https://plus.unsplash.com/premium_photo-1658506649564-e77ba2dd1790?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D&w=1000&q=80' alt="" className="img-fluid h-100" />
                                <div className='mem_adress'>
                                    <ul className='d-flex gap-3'>
                                        <span><BsFacebook /></span>
                                        <span><BsTwitter /></span>
                                        <span><BsGoogle /></span>
                                        <span><BsPinterest /></span>
                                    </ul>

                                </div>

                            </div>
                            <div className="name text-center py-3">
                                <h2 className="subtitle-2 mb-0 text-capitalize">

                                    James Daved

                                </h2>
                                <p className='pra_text'>Developer</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="member_list">
                                <img src="https://images.unsplash.com/photo-1627161683077-e34782c24d81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1603&q=80" alt="" className="img-fluid h-100" />
                                <div className='mem_adress'>
                                    <ul className='d-flex gap-3'>
                                        <span><BsFacebook /></span>
                                        <span><BsTwitter /></span>
                                        <span><BsGoogle /></span>
                                        <span><BsPinterest /></span>
                                    </ul>

                                </div>

                            </div>
                            <div className="name text-center py-3">
                                <h2 className="subtitle-2 mb-0">
                                    Clay Elliot

                                </h2>
                                <p className='pra_text'>Developer</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="member_list">
                                <img src="https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="" className="img-fluid h-100" />
                                <div className='mem_adress'>
                                    <ul className='d-flex gap-3'>
                                        <span><BsFacebook /></span>
                                        <span><BsTwitter /></span>
                                        <span><BsGoogle /></span>
                                        <span><BsPinterest /></span>
                                    </ul>

                                </div>

                            </div>
                            <div className="name text-center py-3">
                                <h2 className="subtitle-2 mb-0">
                                    Lara Emily

                                </h2>
                                <p className='pra_text'>Developer</p>
                            </div>
                        </div>


                    </div>
                </div>

            </section>
            {/* our team end ----------------- */}

            {/* section counter */}


            <section className="counter">

                <div className="container-xxl">
                    <div className="row gap-5">
                        <div className="col-lg-4">
                            <div className="">
                                <h3 className='subtitle'>Where We Are Now?</h3>
                                <p className='pra_text lh-3 text-dark'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quasi mollitia repellendus quos aperiam odio, omnis tempora inventore consequuntur, aut vel nesciunt temporibus laborum dolore iure quis autem maiores natus.</p>
                            </div>

                        </div>
                        <div className="col-lg-2">
                            <ul className='text-center '>
                                <img src={img9} alt="" className="img-fluid" />
                                <h2 className="subtitle-2 ">2330</h2>
                                <span className='m-0'>ADVISORS</span>
                            </ul>
                        </div>
                        <div className="col-lg-2">
                            <ul className='text-center '>
                                <img src={img10} alt="" className="img-fluid" />
                                <h2 className="subtitle-2 ">3000</h2>
                                <span className='m-0'>ADVISORS</span>
                            </ul>
                        </div>
                        <div className="col-lg-2">
                            <ul className='text-center '>
                                <img src={img11} alt="" className="img-fluid" />
                                <h2 className="subtitle-2 ">2430</h2>
                                <span className='m-0'>ADVISORS</span>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>
            {/* section counter end -------------------------- */}

            {/* our news start */}

            <section className="our_news">
                <div className="container-xxl">
                    <div className=" title text-center">
                        <h2>Our News</h2>
                    </div>
                    <div className="news_wrapper">
                        <div className="row">

                            <div className="col-lg-4">
                                <div>
                                    <img src="https://media.istockphoto.com/id/815165952/photo/young-finance-market-analyst-in-eyeglasses-working-at-sunny-office-on-laptop-while-sitting-at.jpg?s=612x612&w=0&k=20&c=CNacXs0UfpeTfwf94fInRxZvCmZarw4aUgMkd7bzQEw=" alt="" className="img-fluid top_img" />
                                </div>
                                <div className="content_body">
                                    <h2 className="subtitle-2 py-3 mb-0">Word Startup Meeting</h2>

                                    <div className="date_blog d-flex justify-content-between align-items-center w-100  ">
                                        <div className='d-flex align-items-center justify-content-between  gap-2'> <img src={img13} alt="" className="img-fluid h-100" /><span className='mb-0'> MAR 24 , 2017 </span></div>
                                        <div className='d-flex align-items-center justify-content-between  gap-2' > <img src={img12} alt="" className="img-fluid h-100" /> <span>ELENA </span></div>
                                    </div>
                                    <p className='pra_text mb-0'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt iure non eligendi quos voluptas unde aspernatur vitae maiores odio eius autem ex dolorum, eos minus laborum fuga iste eveniet ipsum obcaecati, quis temporibus earum fugit.</p>

                                    <a href="">red more <HiOutlineArrowNarrowRight /> </a>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div>
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL9fTedv-jqFvvFdu8wKVckI-Uv2E7UukgHx20YSavMw&s" alt="" className="img-fluid top_img" />
                                </div>
                                <div className="content_body">
                                    <h2 className="subtitle-2 py-3 mb-0">Word Startup Meeting</h2>

                                    <div className="date_blog d-flex justify-content-between align-items-center w-100  ">
                                        <div className='d-flex align-items-center justify-content-between  gap-2'> <img src={img13} alt="" className="img-fluid h-100" /><span className='mb-0'> MAR 24 , 2017 </span></div>
                                        <div className='d-flex align-items-center justify-content-between  gap-2' > <img src={img12} alt="" className="img-fluid h-100" /> <span>ELENA </span></div>
                                    </div>
                                    <p className='pra_text mb-0'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt iure non eligendi quos voluptas unde aspernatur vitae maiores odio eius autem ex dolorum, eos minus laborum fuga iste eveniet ipsum obcaecati, quis temporibus earum fugit.</p>

                                    <a href="">red more <HiOutlineArrowNarrowRight /> </a>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div>
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzwHbLURmBHlRz6ioF0OSbL5SDoEvxjsSVw3Yrt6cf7JmbKDgPa_sImZJiaEtYbo5yfa0&usqp=CAU" alt="" className="img-fluid top_img" />
                                </div>
                                <div className="content_body">
                                    <h2 className="subtitle-2 py-3 mb-0">Word Startup Meeting</h2>

                                    <div className="date_blog d-flex justify-content-between align-items-center w-100  ">
                                        <div className='d-flex align-items-center justify-content-between  gap-2'> <img src={img13} alt="" className="img-fluid h-100" /><span className='mb-0'> MAR 24 , 2017 </span></div>
                                        <div className='d-flex align-items-center justify-content-between  gap-2' > <img src={img12} alt="" className="img-fluid h-100" /> <span>ELENA </span></div>
                                    </div>
                                    <p className='pra_text mb-0'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt iure non eligendi quos voluptas unde aspernatur vitae maiores odio eius autem ex dolorum, eos minus laborum fuga iste eveniet ipsum obcaecati, quis temporibus earum fugit.</p>

                                    <a href="">red more <HiOutlineArrowNarrowRight /> </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* our news start end --------------------- */}

            {/* our contact menu  */}


            <section className='contact' id='contact'>
                <div className="container-xxl">
                    <div className="wrapper_contact">
                        <h1>1800-112-003-500</h1>
                        <h3 className="subtitle-2 text-white">[CALLS ARE TOLL FREE]</h3>
                        <p className='subtitle-2 mb-0'>Contact Us For A Free Consultation</p>

                        <div className='d-flex gap-3'>
                            <span><FaHome /></span>
                            <span><TbSettingsStar /></span>
                            <span><IoMdPhotos /></span>
                            <span><GiTeamIdea /></span>
                            <span><BiSolidPhoneCall /></span>




                        </div>
                    </div>
                </div>

            </section>

          <Footer/>

        </>
    )
}

export default Home








