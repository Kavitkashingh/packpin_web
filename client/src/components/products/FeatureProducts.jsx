import React, { useEffect, useState } from 'react'
import { AiFillHeart, AiOutlineShoppingCart } from 'react-icons/ai'
import { FaEye } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import Ratings from '../Ratings'
import { add_to_card, messageClear, add_to_wishlist } from '../../store/reducers/cardReducer'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Details from '../../pages/CardDetals'


const style = {
    position: 'absolute',
    top: '50%',
    left: '83%',
    transform: 'translate(-50%, -50%)',
};

const FeatureProducts = ({ products }) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [quantity, setQuantity] = useState(0)
    const { product } = useSelector(state => state.home)



    const inc = () => {
        if (quantity >= product.stock) {
            toast.error('Out of stock')
        } else {
            setQuantity(quantity + 1)
        }
    }

    const dec = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

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

        <div className='xs:w-[96%] w-[100%] justify-start flex flex-wrap  mx-auto overflow-hidden'>

            <div className='flex xs:ml-2 ml-[50px] justify-start flex-col relative xs:text-sm text-slate-600 font-bold xs:pb-3 text-4xl pb-11'>
                <h2>FOOD PACKAGING</h2>
            </div>

            <div className='justify-center w-[95%] flex-wrap mx-auto xs:gap-2 gap-3 xs:rounded-sm rounded-2xl xs:w-full grid grid-cols-5 sm:grid-cols-2 xs:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 md-lg:grid-cols-2 2xl:grid-cols-4'>
                {
                    products.map((p, i) => <div key={i} className='h-[480px] box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px; xs:mb-2 w-[319px] xs:ml-1 xs:w-[180px] xs:h-[300px]  border p-2 bg-[#ffffff] rounded-3xl xs:rounded-xl   group transition-all duration-500 hover:shadow-md '>
                        <div className='relative overflow-hidden'>
                            <Link to={`/product/details/${p.slug}`}><img className='sm:w-full w-[298px] h-[315px]  xs:w-[164px] xs:rounded-lg rounded-3xl  xs:h-[175px]' src={p.images[0]} alt="product images" ></img></Link>
                            <ul className='flex transition-all duration-700 -bottom-10 justify-center items-center gap-2 absolute w-full group-hover:bottom-3'>
                                <li onClick={() => add_wishlist(p)} className='w-[38px] h-[38px] cursor-pointer bg-white flex justify-center items-center rounded-full hover:bg-[#7fad39] hover:text-white hover:rotate-[720deg] transition-all'><AiFillHeart /></li>
                                <Link to={`/product/details/${p.slug}`} className='w-[38px] h-[38px] cursor-pointer bg-white flex justify-center items-center rounded-full hover:bg-[#7fad39] hover:text-white hover:rotate-[720deg] transition-all' ><FaEye /></Link>
                                <li onClick={() => add_card(p._id)} className='w-[38px] h-[38px] cursor-pointer bg-white flex justify-center items-center rounded-full hover:bg-[#7fad39] hover:text-white hover:rotate-[720deg] transition-all'><AiOutlineShoppingCart /></li>

                            </ul>
                        </div>

                        <div className='xs:my-2 my-4'>

                            <span class='capitalize line-clamp-2 text-sm xs:text-[10px] font-lato bg-aquamarine xs:w-[150px] w-72'><span className='capitalize w-[100%] font-bold text-sm  xs:text-[12px]'>{p.name}</span>  {p.description}</span>

                            <div className='flex xs:mt-1 my-2 xs:text-[10px]'>
                                <span className='mr-2 xs:mt-[-6px] mt-[-3px] font-lato text-slate-500 text-sm xs:text-[10px]'>By:Shop</span>
                                <Ratings ratings={p.rating}/>
                            </div>

                            <div className='flex mt-4 xs:mt-0 justify-between' >
                                <div className='flex mt-[-10px] flex-col'>
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
                                <li onClick={() => add_card(p._id)} className='w-[36px] h-[36px] xs:w-[28px] xs:h-[28px] mr-[-40px]  cursor-pointer text-white bg-red-500  text-bold flex justify-center items-center rounded-full  transition-all xs:hidden'><AiOutlineShoppingCart /></li>
                                <Link onClick={handleOpen}><button className=' xs:h-[30px] xs:mt-1 xs:w-[75px] xs:text-xs  w-[119px] h-[40px] cursor-pointer hover:shadow-lg hover:shadow-red-500/40 bg-red-500 xs:rounded-md rounded-full text-white'>Buy Now</button> </Link>
                            </div>

                        </div>
                    </div>)
                }
            </div>

            < Modal open={open} onClose={handleClose} >
                <Box sx={style}>
                    <Typography  >
                        <Details />

                    </Typography>

                    <Typography  >
                    </Typography>
                </Box>
            </Modal>
        </div>
    )
}

export default FeatureProducts


