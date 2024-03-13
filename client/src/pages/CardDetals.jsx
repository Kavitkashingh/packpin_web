import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import 'react-multi-carousel/lib/styles.css'
import 'swiper/css'
import { useDispatch, useSelector } from 'react-redux'
import 'swiper/css/pagination'
import Ratings from '../components/Ratings'
import { get_product } from '../store/reducers/homeReducer'
import { add_to_card, messageClear, add_to_wishlist } from '../store/reducers/cardReducer'
import toast from 'react-hot-toast'

const Details = () => {

    const navigate = useNavigate()
    const { slug } = useParams()
    const dispatch = useDispatch()
    const { product } = useSelector(state => state.home)
    const { userInfo } = useSelector(state => state.auth)
    const { errorMessage, successMessage } = useSelector(state => state.card)

    const [image, setImage] = useState('')
    const [state, setState] = useState('reviews')


    const [quantity, setQuantity] = useState(0)

    const inc = () => {
        if (quantity >= product.stock) {
            toast.error('Out of stock')
        } else {
            setQuantity(quantity + 50)
        }
    }

    const dec = () => {
        if (quantity > 1) {
            setQuantity(quantity - 50)
        }
    }

    const add_card = () => {
        if (userInfo) {
            dispatch(add_to_card({
                userId: userInfo.id,
                quantity,
                productId: product._id
            }))
        } else {
            navigate('/login')
        }
    }

    const add_wishlist = () => {
        if (userInfo) {
            dispatch(add_to_wishlist({
                userId: userInfo.id,
                productId: product._id,
                name: product.name,
                price: product.price,
                image: product.images[0],
                discount: product.discount,
                rating: product.rating,
                slug: product.slug
            }))
        } else {
            navigate('/login')
        }

    }

    useEffect(() => {
        dispatch(get_product(slug))
    }, [slug])
    useEffect(() => {
        if (errorMessage) {
            toast.error(errorMessage)
            dispatch(messageClear())
        }
        if (successMessage) {
            toast.success(successMessage)
            dispatch(messageClear())
        }
    }, [errorMessage, successMessage])

    const buy = () => {
        let price = 0;
        if (product.discount !== 0) {
            price = product.price - Math.floor((product.price * product.discount) / 100)
        } else {
            price = product.price
        }
        const obj = [
            {
                sellerId: product.sellerId,
                shopName: product.shopName,
                price: quantity * (price - Math.floor((price * 5) / 100)),
                products: [
                    {
                        quantity,
                        productInfo: product
                    }
                ]
            }
        ]
        navigate('/shipping', {
            state: {
                products: obj,
                price: price * quantity,
                shipping_fee: 85,
                items: 1
            }
        })
    }
    return (
        <div className='h-[100vh] w-[65%] bg-white p-2'>

            <div className='shadow-lg shadow-slate-300 xs:w-[100%] w-full md:w-[80%] sm:w-[90%] lg:w-[90%] h-[100px]'>

                <div className='w-[100%] flex gap-2'>
                    <div className=''>
                        <img className='w-[98%]' src={image ? image : product.images?.[0]} alt="" />
                    </div>

                    <div className='flex flex-col h-[100px] w-[400px]'>

                        <div className='text-xl flex-col xs:text-[10px] text-slate-600 gap-2 font-bold'>
                            <div className='grid grid-cols-3 text-[10px]'>
                                <span className=''>By:Shope</span>
                                <span className='flex mt-2'><Ratings ratings={product.rating} /></span>
                                <span className='text-[8px] text-green-500'>(23 reviews)</span>
                            </div>

                            <span class='mt-[-10px] capitalize line-clamp-1 text-[10px] font-lato bg-aquamarine xs:w-[150px]'><span className='capitalize w-[100%] font-bold text-[12px]'>{product.name}</span>  {product.description}</span>
                        </div>

                        <div className='text-xs text-black  font-bold flex gap-3'>
                            {
                                product.discount !== 0 ? < >
                                    <span className='flex flex-col'>
                                        <h2>${product.price - Math.floor((product.price * product.discount) / 100)} (-{product.discount}%)</h2>
                                        <h2 className='line-through '>${product.price}</h2>
                                    </span>
                                </> : <h2>Price : ${product.price}</h2>
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full flex flex-col  gap-3'>
                <div className='flex gap-3 flex-col my-4  '>
                    <h1 className=''>Choose Colour</h1>
                    <div className=' flex gap-1 flex-grow'>
                        <span className='h-8 w-8 rounded-full cursor-pointer hover:text-white bg-black text-black hover:shadow-lg  bg-white-500 border-solid border-2  '></span>
                        <span className='h-8 w-8 rounded-full cursor-pointer hover:text-white bg-white hover:shadow-lg  bg-white-500 text-black border-solid border-2 border-red-300 '></span>
                        <span className='h-8 w-8 rounded-full cursor-pointer hover:text-whitebg-red-500   bg-[#a98041] text-black border-solid border-2'></span>
                    </div>
                </div>    
                <div className='flex gap-3 flex-col'>
                    <h1 className=''>Choose size</h1>
                    <div className=' flex gap-1 flex-grow'>
                        <span className='px-2 text-[10px] w-[50%] py-[7px] h-[30px] cursor-pointer hover:text-white hover:bg-red-500 hover:shadow-lg hover:shadow-red-500/40 rounded-2xl bg-white-500 text-black border-solid border-2 border-red-500 '>8.5x4.5x3.5in</span>
                        <span className='px-2 text-[10px] w-[50%] py-[7px] h-[30px] cursor-pointer hover:text-white hover:bg-red-500 hover:shadow-lg hover:shadow-red-500/40 rounded-2xl bg-white-500 text-black border-solid border-2 border-red-500 '>8.5 x 6.8 x 3.5 in</span>
                    </div>
                    <div className=' flex gap-1 flex-grow'>
                        <span className='px-2 text-[10px] w-[50%] py-[7px] h-[30px] cursor-pointer hover:text-white hover:bg-red-500 hover:shadow-lg hover:shadow-red-500/40 rounded-2xl bg-white-500 text-black border-solid border-2 border-red-500 '>12 x 6.5 x 4 in</span>
                        <span className='px-2 text-[10px] w-[50%] py-[7px] h-[30px] cursor-pointer hover:text-white hover:bg-red-500 hover:shadow-lg hover:shadow-red-500/40 rounded-2xl bg-white-500 text-black border-solid border-2 border-red-500 '>12 x 6.5 x 4 in</span>
                    </div>
                    <div className=' flex gap-1 flex-grow'>
                        <span className='px-2 text-[10px] w-[50%] py-[7px] h-[30px] cursor-pointer hover:text-white hover:bg-red-500 hover:shadow-lg hover:shadow-red-500/40 rounded-2xl bg-white-500 text-black border-solid border-2 border-red-500 '>15 x 12.5 x 8 in</span>
                        <span className='px-2 text-[10px] w-[50%] py-[7px] h-[30px] cursor-pointer hover:text-white hover:bg-red-500 hover:shadow-lg hover:shadow-red-500/40 rounded-2xl bg-white-500 text-black border-solid border-2 border-red-500 '>8.5 x 4.5 x 3.5</span>
                    </div>


                    {/* <select className='p-3 rounded-xl border-2-red border-solid border-2 border-red-500 px-4' >
                        <option value="" key="" className='px-8 py-3 h-[50px] cursor-pointer hover:text-white hover:bg-red-500 hover:shadow-lg hover:shadow-red-500/40 rounded-2xl bg-white-500 text-black border-solid border-2 border-red-500'><span className='px-8 py-3 h-[50px] cursor-pointer hover:text-white hover:bg-red-500 hover:shadow-lg hover:shadow-red-500/40 rounded-2xl bg-white-500 text-black border-solid border-2 border-red-500 '>8.5x4.5x3.5in</span></option>
                        <option value="" key=""><span className='px-8 py-3 h-[50px] cursor-pointer hover:text-white hover:bg-red-500 hover:shadow-lg hover:shadow-red-500/40 rounded-2xl bg-white-500 text-black border-solid border-2 border-red-500 '>8.5 x 6.8 x 3.5 in</span></option>
                        <option value="" key=""><span className='px-8 py-3 h-[50px] cursor-pointer hover:text-white hover:bg-red-500 hover:shadow-lg hover:shadow-red-500/40 rounded-2xl bg-white-500 text-black border-solid border-2 border-red-500 '>12 x 6.5 x 4 in</span></option>
                        <option value="" key=""><span className='px-8 py-3 h-[50px] cursor-pointer hover:text-white hover:bg-red-500 hover:shadow-lg hover:shadow-red-500/40 rounded-2xl bg-white-500 text-black border-solid border-2 border-red-500 '>12 x 6.5 x 4 in</span></option>
                        <option value="" key=""><span className='px-8 py-3 h-[50px] cursor-pointer hover:text-white hover:bg-red-500 hover:shadow-lg hover:shadow-red-500/40 rounded-2xl bg-white-500 text-black border-solid border-2 border-red-500 '>15 x 12.5 x 8 in</span></option>
                        <option value="" key=""><span className='px-8 py-3 h-[50px] cursor-pointer hover:text-white hover:bg-red-500 hover:shadow-lg hover:shadow-red-500/40 rounded-2xl bg-white-500 text-black border-solid border-2 border-red-500 '>8.5 x 4.5 x 3.5 in</span></option>
                        <option value="" key=""><span className='px-8 py-3 h-[50px] cursor-pointer hover:text-white hover:bg-red-500 hover:shadow-lg hover:shadow-red-500/40 rounded-2xl bg-white-500 text-black border-solid border-2 border-red-500 '>9 x 5.8 x 4.9 in</span></option>
                        <option value="" key=""><span className='px-8 py-3 h-[50px] cursor-pointer hover:text-white hover:bg-red-500 hover:shadow-lg hover:shadow-red-500/40 rounded-2xl bg-white-500 text-black border-solid border-2 border-red-500 '>9 x 5.8 x 4.9 in</span></option>
                    </select> */}
                </div>
                {/* <span className='px-8 py-3 h-[50px] cursor-pointer hover:text-white hover:bg-red-500 hover:shadow-lg hover:shadow-red-500/40 rounded-2xl bg-white-500 text-black border-solid border-2 border-red-500 '>8.5x4.5x3.5in</span> */}

                <div className='flex xs:flex-col  gap-3 '>
                    <h1 className='mt-4'>Quantity</h1>
                    {
                        product.stock ? <>
                            <div className='flex bg-slate-200 w-[50%] h-[30px] rounded-xl justify-center items-center text-xl border-solid border-2 border-red-500'>
                                <div onClick={dec} className=' cursor-pointer'>-</div>
                                <div className='px-5'>{quantity}</div>
                                <div onClick={inc} className=' cursor-pointer'>+</div>
                            </div>
                            <div>
                                {/* <button onClick={add_card} className='px-8 py-3 h-[50px] cursor-pointer hover:shadow-lg hover:shadow-purple-500/40 bg-red-500 rounded-full text-white'>Add To Card</button> */}
                            </div>
                        </> : ''
                    }

                </div>



            </div>

            <div className='w-full mt-20'>
                {
                    product.stock ? <button onClick={buy} className='w-full py-3  h-[40px] cursor-pointer hover:shadow-lg hover:shadow-emerald-500/40 rounded-xl bg-red-500 font-bold text-white'>Buy Now</button> : ""
                }
                <div>
                    <button onClick={add_card} className='w-full py-3 h-[40px] my-3 cursor-pointer hover:shadow-lg hover:shadow-purple-500/40 bg-red-500 rounded-xl font-bold text-white'>Add To Card</button>
                </div>
            </div>
        </div >
    )
}

export default Details