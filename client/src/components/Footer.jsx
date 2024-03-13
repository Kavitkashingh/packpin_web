import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaFacebookF, FaLinkedin } from 'react-icons/fa'
import { AiFillGithub, AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import { AiFillShopping, AiFillHeart } from 'react-icons/ai'
import logo from '../assets/logo.png'

const Footer = () => {

    const { card_product_count, wishlist_count } = useSelector(state => state.card)
    const navigate = useNavigate()
    const { userInfo } = useSelector(state => state.auth)


    return (
        <footer className='bg-[#F3F6Fa]'>
            <div className='w-[95%] grid grid-row-2 mx-auto border-b py-5 md-lg:pb-10 sm:pb-6 '>
                <div className='sm:w-full flex  mb-3 place-content-between '>
                    <div className=''>
                        <img className=' h-[30px]' src={logo} alt="logo" />
                        {/* <img className=' h-[30px]' src="http://localhost:3000/images/logo.png" alt="logo" /> */}
                    </div>
                    <div className=''>
                        <button className='border  border-black xs:px-5 xs:py-1 px-[50px] py-2 rounded-full hover:border-none hover:bg-red-500 hover:text-white' >Contact</button>
                    </div>
                </div>
                <hr />
                <div className='ml-2 grid grid-cols-5 xs:grid-cols-3 sm:grid-cols-2 sm-md:grid-col-2 md:grid-cols-3 xs:justify-center md:justify-center place-content-between'>
                    <div className='lg:w-8/12 sm-md:flex-row '>
                        <div className='flex justify-center sm:justify-center sm:mt-6 w-full'>
                            <div>
                                <h2 className='font-bold text-lg mb-2'>Product</h2>
                                <div className='flex justify-between gap-[80px] lg:gap-[40px]'>
                                    <ul className='flex flex-col gap-2 text-slate-600 text-sm'>
                                        <li>
                                            <Link>Landing Page</Link>
                                        </li>
                                        <li>
                                            <Link>Poup Builder</Link>
                                        </li>
                                        <li>
                                            <Link>Web-Design</Link>
                                        </li>
                                        <li className='xs:hidden'>
                                            <Link>Content</Link>
                                        </li>
                                        <li className='xs:hidden'>
                                            <Link>Integration</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='lg:w-9/12 xs:hidden'>
                        <div className='flex justify-center sm:justify-center sm:mt-6 w-full'>
                            <div>
                                <h2 className='font-bold text-lg mb-2 '>Use Cases</h2>
                                <div className='flex justify-between gap-[80px] lg:gap-[40px]'>
                                    <ul className='flex flex-col gap-2 text-slate-600 text-sm'>
                                        <li>
                                            <Link>Web-designers</Link>
                                        </li>
                                        <li>
                                            <Link>Marketers</Link>
                                        </li>
                                        <li>
                                            <Link>Small Bussiness</Link>
                                        </li>
                                        <li>
                                            <Link>Website Builder</Link>
                                        </li>
                                        <li>
                                            <Link>Support</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='lg:w-8/12 sm-md:flex-row'>
                        <div className='flex justify-center sm:justify-center sm:mt-6 w-full'>
                            <div>
                                <h2 className='font-bold text-lg mb-2'>Resources</h2>
                                <div className='flex justify-between gap-[80px] lg:gap-[40px]'>
                                    <ul className='flex flex-col gap-2 text-slate-600 text-sm'>
                                        <li>
                                            <Link>Academy</Link>
                                        </li>
                                        <li>
                                            <Link>Blog</Link>
                                        </li>
                                        <li>
                                            <Link>Themes</Link>
                                        </li>
                                        <li>
                                            <Link>Hosting</Link>
                                        </li>
                                        <li>
                                            <Link>Developers</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='lg:w-8/12 sm-md:flex-row '>
                        <div className='flex justify-center sm:justify-center sm:mt-6 w-full'>
                            <div>
                                <h2 className='font-bold text-lg mb-2'>Company</h2>
                                <div className='flex justify-between gap-[80px] lg:gap-[40px]'>
                                    <ul className='flex flex-col gap-2 text-slate-600 text-sm'>
                                        <li>
                                            <Link>About Us</Link>
                                        </li>
                                        <li>
                                            <Link>Careers</Link>
                                        </li>
                                        <li>
                                            <Link>FAQs</Link>
                                        </li>
                                        <li>
                                            <Link>Thems</Link>
                                        </li>
                                        <li>
                                            <Link>Contact Us</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='xs:w-[100%] xs:ml-[70px] lg:w-full lg:mt-6 sm:ml-10 sm:justify-center '>
                        <div className='w-full flex flex-col sm:justify-center gap-2'>
                            <h2 className='font-bold  text-lg xs:ml-12 xs:w-36 mb-2' >
                                <Link>Follow us</Link>
                            </h2>
                            <ul className='flex justify-start items-center gap-3'>
                                <li>
                                    <a className='w-[38px] h-[38px] hover:bg-red-500 hover:text-white flex justify-center items-center bg-white rounded-full' href="#"><FaFacebookF /></a>
                                </li>
                                <li>
                                    <a className='w-[38px] h-[38px] hover:bg-red-500 hover:text-white flex justify-center items-center bg-white rounded-full' href="#"><AiOutlineTwitter /></a>
                                </li>
                                <li>
                                    <a className='w-[38px] h-[38px] hover:bg-red-500 hover:text-white flex justify-center items-center bg-white rounded-full' href="#"><FaLinkedin /></a>
                                </li>
                                <li>
                                    <a className='w-[38px] h-[38px] hover:bg-red-500 hover:text-white flex justify-center items-center bg-white rounded-full' href="#"><AiFillInstagram/></a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
            <div className='w-[90%] xs:w-[95%] mx-4 pb-2 flex flex-wrap sm:flex-row  text-slate-600 place-content-between'>
                <div>
                    <ul className='flex mt-2 sm:flex-row  text-sm'>
                        <li>
                            <a href="#" >Provarcy Policy</a>
                        </li>
                        <li>
                            <a href="#">Terms of Use</a>
                        </li>
                        <li>
                            <a href="#">Sales and Refunds</a>
                        </li>
                        <li>
                            <a href="#">Leagal</a>
                        </li>
                        <li>
                            <a href="#">Site Map</a>
                        </li>
                    </ul>
                </div>
                <span className='xs:ml-6 mt-3 text-black'>Copiright ©2023 All rights reserved</span>
            </div>




            {/* <div className='hidden fixed md-lg:block w-[50px] bottom-3 h-[110px] right-2 bg-white rounded-full p-2'>
                <div className='w-full h-full flex gap-3 flex-col justify-center items-center'>
                    <div onClick={() => navigate(userInfo ? '/card' : '/login')} className='relative flex justify-center items-center cursor-pointer w-[35px] h-[35px] rounded-full bg-[#e2e2e2]'>
                        <span className='text-xl text-orange-500'><AiFillShopping /></span>
                        {
                            card_product_count !== 0 && <div className='w-[20px] h-[20px] absolute bg-green-500 rounded-full text-white flex justify-center items-center -top-[3px] -right-[5px]'>
                                {
                                    card_product_count
                                }
                            </div>
                        }
                    </div>
                    <div onClick={() => navigate(userInfo ? '/dashboard/my-wishlist' : '/login')} className='relative flex justify-center items-center cursor-pointer w-[35px] h-[35px] rounded-full bg-[#e2e2e2]'>
                        <span className='text-xl text-red-500'><AiFillHeart /></span>
                        {
                            wishlist_count !== 0 && <div className='w-[20px] h-[20px] absolute bg-green-500 rounded-full text-white flex justify-center items-center -top-[3px] -right-[5px]'>
                                {wishlist_count}
                            </div>
                        }
                    </div>
                </div>
            </div> */}
        </footer>
    )
}

export default Footer