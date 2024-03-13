import { AiFillHeart, AiOutlineShoppingCart } from 'react-icons/ai'
import { FaEye } from 'react-icons/fa'
import Ratings from '../Ratings'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { add_to_card, messageClear, add_to_wishlist } from '../../store/reducers/cardReducer'


const ShopProducts = ({ styles, products }) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { userInfo } = useSelector(state => state.auth)
    const { successMessage, errorMessage } = useSelector(state => state.card)

    const add_card = (id) => {
        if (userInfo) {
            dispatch(add_to_card({
                userId: userInfo.id,
                quantity: 1,
                productId: id
            }))
        } else {
            navigate('/login')
        }
    }
    useEffect(() => {
        if (successMessage) {
            toast.success(successMessage)
            dispatch(messageClear())
        }
        if (errorMessage) {
            toast.error(errorMessage)
            dispatch(messageClear())
        }
    }, [errorMessage, successMessage])

    const add_wishlist = (pro) => {
        dispatch(add_to_wishlist({
            userId: userInfo.id,
            productId: pro._id,
            name: pro.name,
            price: pro.price,
            image: pro.images[0],
            discount: pro.discount,
            rating: pro.rating,
            slug: pro.slug
        }))
    }


    return (
        <div className={`w-full grid ${styles === 'grid' ? 'grid-cols-4 md-lg:grid-cols-2 md:grid-cols-2' : 'grid-cols-1 md-lg:grid-cols-2 md:grid-cols-2'} justify-center items-center px-1 py-3 bg-slate-300`}>
            {
                products.map((p, i) => <div key={i} className='h-[500px] box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px; xs:mb-2 w-[319px] xs:ml-1 xs:w-[180px] xs:h-[290px] group border p-2 bg-[#ffffff] rounded-xl group transition-all duration-500 hover:shadow-md '>
                <div className='relative overflow-hidden'>
                    <Link to={`/product/details/${p.slug}`}><img className='sm:w-full w-[298px] h-[315px]  xs:w-[164px] rounded-lg xs:h-[175px]' src={p.images[0]} alt="product images" ></img></Link>
                    <ul className='flex transition-all duration-700 -bottom-10 justify-center items-center gap-2 absolute w-full group-hover:bottom-3'>
                        <li onClick={() => add_wishlist(p)} className='w-[38px] h-[38px] cursor-pointer bg-white flex justify-center items-center rounded-full hover:bg-[#7fad39] hover:text-white hover:rotate-[720deg] transition-all'><AiFillHeart /></li>
                        <Link to={`/product/details/${p.slug}`} className='w-[38px] h-[38px] cursor-pointer bg-white flex justify-center items-center rounded-full hover:bg-[#7fad39] hover:text-white hover:rotate-[720deg] transition-all' ><FaEye /></Link>
                        <li onClick={() => add_card(p._id)} className='w-[38px] h-[38px] cursor-pointer bg-white flex justify-center items-center rounded-full hover:bg-[#7fad39] hover:text-white hover:rotate-[720deg] transition-all'><AiOutlineShoppingCart /></li>

                    </ul>
                </div>

                <div className='xs:my-2'>

                    <span class='capitalize line-clamp-2 text-[10px] font-lato bg-aquamarine xs:w-[150px] w-72'><span className='capitalize w-[100%] font-bold text-[12px]'>{p.name}</span>  {p.description}</span>
                    <div className='flex xs:mt-0 xs:mt-1 xs:text-[10px]'>
                        <span className='mr-2 xs:mt-[-2px] font-lato text-slate-500 text-[8px]'>By:Shop</span>
                        <Ratings ratings={p.rating}/>
                    </div>

                    <div className='flex mt-2 xs:justify-between' >
                        <div className='flex flex-col xs:my-1'>
                            {
                                <span className="text-black xs:text-[12px]  text-[1.62em]   w-[auto] font-bold">₹{p.price - Math.floor((p.price * p.discount) / 100)}</span>

                            }

                            <div className='flex'>
                                {
                                    p.discount !== 0 ? <>
                                        <span className='line-through text-black text-[0.625em] xs:mt-[2px] xs:text-[8px] xs:mr-1'>₹{p.price}</span>
                                        <span className="text-[0.75em] xs:text-[10px] text-[green]  font-bold ">(-{p.discount}%)</span>
                                    </> : <span className="text-[0.75em] text-[green] font-bold ">Price : {p.price}</span>
                                }
                            </div>

                        </div>
                        <li onClick={() => add_card(p._id)} className='w-[36px] h-[36px] xs:w-[28px] xs:h-[28px]  cursor-pointer text-white bg-red-500  text-bold flex justify-center items-center rounded-full text-black transition-all xs:hidden'><AiOutlineShoppingCart /></li>
                        <Link ><button className=' xs:h-[30px] xs:mt-1 xs:w-[75px] xs:text-xs  w-[119px] h-[40px] cursor-pointer hover:shadow-lg hover:shadow-red-500/40 bg-red-500 rounded-md text-white'>Buy Now</button> </Link>
                    </div>

                </div>
            </div>)
                    // products.map((p, i) => <div key={i} className='border p-3 w-[319px] h-[553] bg-[#D9D9D9] rounded-2xl group transition-all duration-500 hover:shadow-md hover:-mt-3'>
                    //     <div className='relative overflow-hidden'>
                    //         {
                    //             p.discount ? <div className='flex justify-center items-center absolute text-white w-[38px] h-[38px] rounded-full bg-red-500 font-semibold text-xs left-2 top-2'>{p.discount}%</div> : ""
                    //         }
                    //        <Link to={`/product/details/${p.slug}`}> <img className='sm:w-full w-[298px] rounded-3xl h-[315px]' src={p.images[0]} alt="product images" /></Link>
                    //         <img className='w-[110px] h-[110px]' src={p.images[0]} alt="images" />
                    //         <ul className='flex transition-all duration-700 -bottom-10 justify-center items-center gap-2 absolute w-full group-hover:bottom-3'>
                    //             <li onClick={() => add_wishlist(p)} className='w-[38px] h-[38px] cursor-pointer bg-white flex justify-center items-center rounded-full hover:bg-[#7fad39] hover:text-white hover:rotate-[720deg] transition-all'><AiFillHeart /></li>
                    //             <Link to={`/product/details/${p.slug}`} className='w-[38px] h-[38px] cursor-pointer bg-white flex justify-center items-center rounded-full hover:bg-[#7fad39] hover:text-white hover:rotate-[720deg] transition-all' ><FaEye /></Link>
                    //             <li onClick={() => add_card(p._id)} className='w-[38px] h-[38px] cursor-pointer bg-white flex justify-center items-center rounded-full hover:bg-[#7fad39] hover:text-white hover:rotate-[720deg] transition-all'><AiOutlineShoppingCart /></li>
                    //         </ul>
                    //     </div>

                    //     <div className='mt-[19px] text-black px-3 '>
                    //         <span className='font-bold' >{p.name}</span>
                    //         <div className='flex mt-[19px]'>
                    //             <span className='mr-3'>By: Shop name </span>
                    //             <Ratings ratings={p.rating} />
                    //         </div>

                    //         <div className='flex mt-3'>
                    //             <div className='flex flex-col mr-10'>
                    //                 {
                    //                     <span className="text-black text-[1.62em] font-bold">${p.price - Math.floor((p.price * p.discount) / 100)}</span>

                    //                 }

                    //                 <div className='mt-[-8px] mb-3'>
                    //                     {
                    //                         p.discount !== 0 ? <>
                    //                             <span className='line-through text-black text-[0.625em] mr-1 '>${p.price}</span>
                    //                             <span className="text-[0.75em] text-[green] font-bold ">$(-{p.discount}%)</span>
                    //                         </> : <span className="text-[0.75em] text-[green] font-bold ">Price : ${p.price}</span>
                    //                     }
                    //                     <span className="text-[0.75em] text-[green] font-bold "></span>
                    //                 </div>
                    //             </div>

                    //             <div className='flex' >
                    //                 <li onClick={() => add_card(p._id)} className='w-[36px] h-[40px] mr-5 cursor-pointer bg-white flex justify-center items-center rounded-full text-black transition-all'><AiOutlineShoppingCart /></li>
                    //                 <button className='w-[119px] h-[40px] cursor-pointer hover:shadow-lg hover:shadow-red-500/40 bg-red-500 font-bold rounded-full text-white'>Buy Now</button>
                    //             </div>
                    //         </div>
                    //     </div>
                    // </div>)
                }
        </div>
    )
}

export default ShopProducts