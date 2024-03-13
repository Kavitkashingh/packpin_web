import React, { useEffect, useState } from "react";
import { GrMail } from "react-icons/gr";
import { IoIosCall, IoMdSearch } from "react-icons/io";
import { MdLibraryBooks, MdOutlineKeyboardArrowDown } from "react-icons/md";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GradingIcon from '@mui/icons-material/Grading';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HelpIcon from '@mui/icons-material/Help';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { PiListLight } from "react-icons/pi";
import logo from '../assets/logo.png'


import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
// import Modeldata from './modeldata';
import Bulk from '../pages/Bulk'
import Login from '../pages/Login'
import Register from '../pages/Register'

import {
    FaLinkedinIn,
    FaFacebookF,
    FaUser,
    FaLock,
    FaList,
    FaStore,
} from "react-icons/fa";
import {
    AiOutlineTwitter,
    AiFillGithub,
    AiFillHeart,
    AiFillShopping,
    AiFillInstagram,
} from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
    get_card_products,
    get_wishlist_products,
} from "../store/reducers/cardReducer";
import { FaCartArrowDown } from "react-icons/fa6";
import api from '../api/api'
import { user_reset } from '../store/reducers/authReducer'
import { reset_count } from '../store/reducers/cardReducer'
import { BiLogInCircle } from "react-icons/bi";
import { RxDashboard } from "react-icons/rx";
import { RiProductHuntLine } from "react-icons/ri";
import { BsChat, BsHeart } from "react-icons/bs";
import { TfiLock } from "react-icons/tfi";

const Headers = ({ handleLoginClick }) => {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    };

    const handleClick = () => {
        handleLoginClick();
    };

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // log-out
    const logout = async () => {
        try {
            const { data } = await api.get('/customer/logout')
            localStorage.removeItem('customerToken')
            dispatch(user_reset())
            dispatch(reset_count())
            navigate('/login')
        } catch (error) {
            console.log(error.response.data)
        }
    }




    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { categorys } = useSelector((state) => state.home);
    const { userInfo } = useSelector((state) => state.auth);
    const { card_product_count, wishlist_count } = useSelector(
        (state) => state.card
    );

    const { pathname } = useLocation();
    const [showShidebar, setShowShidebar] = useState(true);
    const [categoryShow, setCategoryShow] = useState(true);
    const [searchValue, setSearchValue] = useState("");
    const [category, setCategory] = useState("");

    const search = () => {
        navigate(`/products/search?category=${category}&&value=${searchValue}`);
    };
    const redirect_card_page = () => {
        if (userInfo) {
            navigate(`/card`);
        } else {
            navigate(`/login`);
        }
    };

    useEffect(() => {
        if (userInfo) {
            dispatch(get_card_products(userInfo.id));
            dispatch(get_wishlist_products(userInfo.id));
        }
    }, [userInfo]);
    return (
        <div className="xs:w-[100%] w-full bg-white">
            <div className="">
                <div className="xs:w-[100%] w-[95%] lg:w-[90%] mx-auto">
                    <div className="h-[80px] md-lg:h-[130px] flex justify-between items-center flex-wrap">
                        <div className="md-lg:w-full xs:mx-2 w-2/12 md-lg:pt-4">
                            <div className="flex ustify-center  items-center">

                                <div className="justify-center p-2 text-xl items-center bg-white cursor-pointer lg:hidden md-lg:flex xl:hidden hidden" onClick={() => setShowShidebar(false)}>
                                    <PiListLight />
                                </div>

                                <Link to="/">
                                    {/* <img src="http://localhost:3000/images/logo.png" className="xs:mr-[80px] h-[35px]  xs:h-[28px]" alt="logo" /> */}
                                    <img src={logo} className="xs:mr-[80px] h-[35px]  xs:h-[28px]" alt="logo" />
                                </Link>

                                {/* <div className="xs:mr-[25px] text-sm text-red-600 bg-slate-100 rounded-md  xs:justify-center xs:items-center xs:cursor-pointer"> */}
                                <li className='flex border border-red-500 mr-3 justify-center hover:bg-red-500 xs:w-[100px]  bg-slate-100 hover:text-white rounded-lg h-7   cursor-pointer items-center'>
                                    {
                                        userInfo ? <Link className='flex cursor-pointer justify-center items-center gap-2 ' to='/dashboard'>
                                            <span className='text-xs'>{userInfo.name}</span>
                                        </Link> : <Link to='/login' className='flex cursor-pointer justify-center items-center gap-2 text-sm'>
                                            <span><FaUser /></span>
                                            <span>Login</span>
                                        </Link>
                                    }
                                </li>
                                {/* </div> */}

                                <div
                                    onClick={redirect_card_page}
                                    className="relative xs:static xs:border border-slate-200 flex justify-center  items-center cursor-pointer w-[35px] h-[35px] rounded-full  bg-white xs:bg-red-600"
                                >

                                    <span className="text-lg text-white">
                                        <FaCartArrowDown />
                                    </span>
                                    {card_product_count !== 0 && (
                                        <div className="w-[30px] h-[30px] xs:w-[30px] xs:h-[30px] absolute bg-green-500 rounded-full text-white flex justify-center items-center">
                                            {card_product_count}
                                        </div>
                                    )}
                                </div>

                            </div>
                        </div>
                        <hr />
                        <div className="md-lg:w-full  w-10/12">
                            <div className="flex justify-between md-lg:justify-center items-center flex-wrap">
                                <div className="w-5/12 md-lg:w-full">
                                    <div className="flex xs:mx-2 border xs:h-[40px] h-[50px] xs:xs:rounded-full rounded-r-xl rounded-l-xl items-center relative gap-5">
                                        <div className="relative after:absolute  after:h-[25px] after:w-[1px] after:bg-[#afafaf] after:-right-[15px] md:hidden">
                                            <select
                                                onChange={(e) => setCategory(e.target.value)}
                                                className="w-[150px] text-slate-600 font-semibold bg-transparent px-1 h-full outline-0 border-none"
                                                name=""
                                                id=""
                                            >
                                                <option value="">Select category</option>
                                                {categorys.map((c, i) => (
                                                    <option key={i} value={c.name}>
                                                        {c.name}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        <input
                                            className="w-full xs:rounded-full xs:mx-4 text-italics relative bg-transparent text-slate-500 xs:text-xs outline-0 h-full"
                                            onChange={(e) => setSearchValue(e.target.value)}
                                            type="text"
                                            name=""
                                            id=""
                                            placeholder="Search Product, Category, Brand..."
                                        />
                                        <button
                                            onClick={search} className="bg-red-500 text-[40px] xs:text-[20px] xs:px-4 right-0 absolute px-2 h-full rounded-full  font-semibold uppercase text-white">
                                            <IoMdSearch />
                                        </button>
                                    </div>
                                </div>
                                <div className="flex lg:hidden justify-center items-center">

                                    <div className="flex justify-center gap-2">
                                        <div className="relative  flex justify-center items-center cursor-pointer rounded-lg">
                                            <div className=' relative'>
                                                <div onMouseEnter={() => setCategoryShow(!categoryShow)} className='flex rounded-lg cursor-pointer py-2 justify-center  items-center gap-2 text-sm px-10'>
                                                    <div className="flex gap-1 text-md text">
                                                        <span>
                                                            {
                                                                userInfo ? <Link className='flex cursor-pointer  justify-center items-center gap-2 ' to=''>
                                                                    <span className=' '><FaUser /></span>
                                                                    <span >{userInfo.name}</span>
                                                                </Link> : <Link to='' className='flex cursor-pointer justify-center items-center gap-2'>
                                                                    <span ><FaUser /></span>
                                                                    <span className=''>Login/Signup</span>
                                                                </Link>
                                                            }

                                                        </span>
                                                    </div>
                                                </div>

                                                <div className={`${categoryShow ? 'h-0' : 'h-auto '} overflow-hidden border-none  transition-all rounded-b-lg md-lg:relative duration-500 absolute z-[99999] bg-white w-full border-x`}>
                                                    <ul className=' font-medium h-full overflow-auto '>
                                                        <li className=' m-2 flex justify-start hover:bg-red-500 hover:text-white rounded-lg   cursor-pointer items-center gap-4 px-[24px] py-[6px]'>
                                                            {
                                                                userInfo ? <Link className='flex cursor-pointer justify-center items-center gap-2 ' to='/dashboard'>
                                                                    <span className='text-lg'><FaUser /></span>
                                                                    <span className=''>{userInfo.name}</span>
                                                                </Link> : <Link to='/login' className='flex cursor-pointer justify-center items-center gap-2 text-sm'>
                                                                    <span><FaUser /></span>
                                                                    <span>Login</span>
                                                                </Link>
                                                            }
                                                        </li>
                                                        <hr />
                                                        <li className=' m-2 flex justify-start hover:bg-red-500 hover:text-white  cursor-pointer items-center gap-4 px-[15px] py-[6px]'>
                                                            <span className='pt-1' onClick={handleOpen}  ><AccountCircleIcon /></span>
                                                            <Link to='/dashboard' className=''>My Profile</Link>
                                                        </li>
                                                        <hr />
                                                        <li className=' m-2 flex justify-start hover:bg-red-500 hover:text-white rounded-lg cursor-pointer items-center gap-4 px-[15px] py-[6px]'>
                                                            <span className='pt-1'><GradingIcon /></span>
                                                            <Link to='/dashboard/my-orders' className=''>My Orders</Link>
                                                        </li>
                                                        <hr />
                                                        <li className=' m-2 flex justify-start hover:bg-red-500 hover:text-white rounded-lg cursor-pointer items-center gap-4 px-[15px] py-[6px]'>
                                                            <span className='pt-1'><FavoriteIcon /></span>
                                                            <Link to='/dashboard/my-wishlist' className=''>My WishList</Link>
                                                        </li>
                                                        <hr />
                                                        <li className=' m-2 flex justify-start hover:bg-red-500 hover:text-white rounded-lg cursor-pointer items-center gap-4 px-[15px] py-[6px]'>
                                                            <span className='pt-1'><HelpIcon /></span>
                                                            <Link to='/dashboard/chat' className=''>Help</Link>
                                                        </li>
                                                        <hr />
                                                        <li onClick={logout} className=' m-2 flex justify-start hover:bg-red-500 hover:text-white rounded-lg cursor-pointer items-center gap-4 px-[15px] py-[6px]'>
                                                            <span className='pt-1'><ExitToAppIcon /></span>
                                                            <Link to={`/products?category`} className='text-lg  block'>Sign Out</Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="relative xl:hidden flex justify-center items-center cursor-pointer  rounded-full flex cursor-pointer justify-center items-center gap-2 rounded-lg ">
                                            <Link className='flex cursor-pointer justify-center items-center gap-2 rounded-lg px-2  py-2' to='/bulk'>
                                                <span ><MdLibraryBooks /></span>
                                                <span >Bulk enquiry</span>
                                            </Link>

                                        </div>
                                        <div className="relative flex justify-center items-center cursor-pointer rounded-full flex cursor-pointer justify-center items-center gap-2 rounded-lg ">
                                            <Link className='flex cursor-pointer justify-center items-center gap-2 rounded-lg px-2  py-2' to='/becomeseller'>
                                                <span className=' '><FaStore /></span>
                                                <span className=''>Become a sellera </span>
                                            </Link>
                                        </div>

                                        <div
                                            onClick={redirect_card_page}
                                            className="relative flex justify-center items-center cursor-pointer w-[35px] h-[35px] rounded-full bg-red-500"
                                        >
                                            <span className="text-xl text-white">
                                                <FaCartArrowDown />
                                            </span>
                                            {card_product_count !== 0 && (
                                                <div className="w-[30px] h-[30px] absolute bg-green-500 rounded-full text-white flex justify-center items-center -top-[3px] -right-[5px]">
                                                    {card_product_count}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* side data */}
            <div className="hidden md-lg:block">
                <div
                    onClick={() => setShowShidebar(true)}
                    className={`fixed duration-200 transition-all ${showShidebar ? "invisible" : "visible"
                        } hidden md-lg:block w-screen h-screen bg-[rgba(0,0,0,0.5)] top-0 left-0 z-20`}
                ></div>
                <div
                    className={`xs:w-[50%] w-[150px] z-[9999] transition-all duration-200 fixed  ${showShidebar ? "-left-[300px]" : "left-0"
                        } top-0 overflow-y-auto bg-white h-screen py-6 px-5`}
                >
                    <div className="flex justify-start flex-col gap-5">
                        <Link to="/">
                            <img src={logo} className="h-[30px]" alt="logo" />
                        </Link>
                        <div className="flex justify-star">
                            <div className="relative  flex justify-center items-center cursor-pointer rounded-lg">
                                <div className='relative'>
                                    <div className='h-auto overflow-hidden border-none  transition-all rounded-b-lg md-lg:relative duration-500 absolute z-[99999] bg-white w-full border-x'>
                                        <div className=" h-full overflow-auto">
                                            <span>
                                                {
                                                    userInfo ? <Link className='flex justify-start items-center gap-2 py-2' to=''>
                                                        <span className=' '><FaUser /></span>
                                                        <span >{userInfo.name}</span>
                                                    </Link> : <Link to='/login' className='flex justify-start items-center gap-2'>
                                                        <span ><FaUser /></span>
                                                        <span className=''>Login</span>
                                                    </Link>
                                                }

                                            </span>
                                        </div>
                                    </div>

                                    <div className={`  overflow-hidden border-none  transition-all rounded-b-lg md-lg:relative duration-500 absolute z-[99999] bg-white w-full border-x`}>
                                        <ul className='text-xs h-full overflow-auto '>
                                            <li className='flex xs:hidden justify-start items-center gap-2 py-2'>
                                                {
                                                    userInfo ? <Link className='flex cursor-pointer justify-center items-center gap-2 ' to='/dashboard'>
                                                        <span className='text-lg'><FaUser /></span>
                                                        <span className=''>{userInfo.name}</span>
                                                    </Link> : <Link to='/login' className='flex cursor-pointer justify-center items-center gap-2 text-sm'>
                                                        <span><FaUser /></span>
                                                        <span>Login</span>
                                                    </Link>
                                                }
                                            </li>
                                            <li className='flex justify-start items-center gap-1 py-2'>
                                                <span className='text-lg'><RxDashboard /></span>
                                                <Link to='/dashboard' className='block'>My Profile</Link>
                                            </li>
                                            <li className='flex justify-start items-center gap-1 py-2'>
                                                <span className='text-lg'><RiProductHuntLine /></span>
                                                <Link to='/dashboard/my-orders' className='block'>My Orders</Link>
                                            </li>
                                            <li className='flex justify-start items-center gap-1 py-2'>
                                                <span className='text-lg'><BsHeart /></span>
                                                <Link to='/dashboard/my-wishlist' className='block'>Wishlist</Link>
                                            </li>
                                            <li className='flex justify-start items-center gap-1 py-2'>
                                                <span className='text-lg'><BsChat /></span>
                                                <Link to='/dashboard/chat' className='block'>Chat</Link>
                                            </li>

                                            <li className='flex justify-start items-center gap-1 py-2'>
                                                <span className='text-lg'><TfiLock /></span>
                                                <Link to='/dashboard/chage-password' className='block'>Change Password</Link>
                                            </li>
                                            {/* become a seller */}
                                            <li className='flex justify-start items-center gap-1 py-2'>
                                                <span className='text-lg'><MdLibraryBooks /></span>
                                                <Link to='/bulk' className='block'>Bulk enquiry</Link>
                                            </li>

                                            <li className='flex justify-start items-center gap-1 py-2'>
                                                <span className='text-lg'><FaStore /></span>
                                                <Link to='/becomeseller' className='block'>Become a sellera</Link>
                                            </li>
                                            {/* become a seller */}
                                            <li onClick={logout} className='flex justify-start items-center gap-2 py-2 cursor-pointer'>
                                                <span className='text-lg'><BiLogInCircle /></span>
                                                <div className='block'>Logout</div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <ul className="flex flex-col justify-start items-start  text-md font-semibold uppercase">

                            <li>
                                <Link
                                    className={`py-2 block ${pathname === "/" ? "text-[#7fad39]" : "text-slate-600"
                                        }`}
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className={`py-2 block ${pathname === "/shop" ? "text-[#7fad39]" : "text-slate-600"
                                        }`}
                                >
                                    Shop
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className={`py-2 block ${pathname === "/about" ? "text-[#7fad39]" : "text-slate-600"
                                        }`}
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className={`py-2 block ${pathname === "/contact"
                                        ? "text-[#7fad39]"
                                        : "text-slate-600"
                                        }`}
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul> */}
                        <div className="flex xs:mt-48 justify-start  items-center gap-4">
                            <a href="#">
                                <FaFacebookF />
                            </a>
                            <a href="#">
                                <AiOutlineTwitter />
                            </a>
                            <a href="#">
                                <FaLinkedinIn />
                            </a>
                            <a href="#">
                                <AiFillInstagram />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Headers;